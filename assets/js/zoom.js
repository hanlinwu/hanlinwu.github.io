// Custom image zoom with animation - replaces medium-zoom to avoid blurry CSS transform scaling.
// Animates from thumbnail position to center, then shows a full-resolution image.
$(document).ready(function () {
  var DURATION = 300;
  var bgColor =
    getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee";

  // State
  var isOpen = false;
  var currentThumb = null;

  // Create overlay background
  var overlay = document.createElement("div");
  overlay.className = "medium-zoom-overlay";
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;z-index:999;" +
    "opacity:0;transition:opacity " + DURATION + "ms;pointer-events:none;background:" + bgColor;
  document.body.appendChild(overlay);

  // Create the animated clone (shows during transition)
  var clone = document.createElement("img");
  clone.style.cssText =
    "position:fixed;z-index:1000;transition:all " + DURATION + "ms ease;cursor:zoom-out;" +
    "will-change:transform,width,height,top,left;";
  clone.style.display = "none";
  document.body.appendChild(clone);

  // Create the full-res image (swapped in after animation)
  var hdImg = document.createElement("img");
  hdImg.style.cssText =
    "position:fixed;z-index:1001;cursor:zoom-out;opacity:0;transition:opacity 150ms;";
  hdImg.style.display = "none";
  document.body.appendChild(hdImg);

  function getTargetRect(naturalW, naturalH) {
    var viewW = window.innerWidth * 0.9;
    var viewH = window.innerHeight * 0.9;
    var scale = Math.min(viewW / naturalW, viewH / naturalH, 1);
    var w = naturalW * scale;
    var h = naturalH * scale;
    return {
      top: (window.innerHeight - h) / 2,
      left: (window.innerWidth - w) / 2,
      width: w,
      height: h,
    };
  }

  function open(thumb) {
    if (isOpen) return;
    isOpen = true;
    currentThumb = thumb;

    var src = thumb.getAttribute("data-zoom-src") || thumb.src;
    var rect = thumb.getBoundingClientRect();

    // Hide original
    thumb.style.visibility = "hidden";

    // Show overlay with fade
    overlay.style.pointerEvents = "auto";
    // force reflow before transition
    overlay.offsetHeight;
    overlay.style.opacity = "1";

    // Position clone at thumbnail location
    clone.src = thumb.src;
    clone.style.top = rect.top + "px";
    clone.style.left = rect.left + "px";
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.borderRadius = getComputedStyle(thumb).borderRadius;
    clone.style.display = "block";
    clone.style.objectFit = "cover";

    // Pre-load HD image (only mark as loaded, don't show yet)
    var hdLoaded = false;
    hdImg.onload = function () {
      hdLoaded = true;
    };
    hdImg.src = src;

    // Compute target rect using thumbnail aspect ratio first
    var natW = hdImg.naturalWidth || rect.width * 8;
    var natH = hdImg.naturalHeight || rect.height * 8;
    var target = getTargetRect(natW, natH);

    // Animate clone to center after reflow
    requestAnimationFrame(function () {
      clone.style.top = target.top + "px";
      clone.style.left = target.left + "px";
      clone.style.width = target.width + "px";
      clone.style.height = target.height + "px";
      clone.style.borderRadius = "4px";
      clone.style.objectFit = "contain";
    });

    // After animation completes, swap in HD image
    setTimeout(function () {
      if (!isOpen) return;
      if (hdLoaded) {
        showHD(hdImg);
      } else {
        // HD still loading, show when ready
        hdImg.onload = function () {
          if (isOpen) showHD(this);
        };
      }
    }, DURATION + 50);
  }

  function showHD(img) {
    if (!isOpen) return;
    var natW = img.naturalWidth || 800;
    var natH = img.naturalHeight || 600;
    var target = getTargetRect(natW, natH);

    // Also update clone to match final HD dimensions
    clone.style.top = target.top + "px";
    clone.style.left = target.left + "px";
    clone.style.width = target.width + "px";
    clone.style.height = target.height + "px";

    hdImg.style.top = target.top + "px";
    hdImg.style.left = target.left + "px";
    hdImg.style.width = target.width + "px";
    hdImg.style.height = target.height + "px";
    hdImg.style.display = "block";
    // force reflow
    hdImg.offsetHeight;
    hdImg.style.opacity = "1";
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;

    // Hide HD image immediately
    hdImg.style.opacity = "0";
    setTimeout(function () {
      hdImg.style.display = "none";
    }, 150);

    // Fade out overlay
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";

    // Animate clone back to thumbnail position
    if (currentThumb) {
      var rect = currentThumb.getBoundingClientRect();
      clone.style.top = rect.top + "px";
      clone.style.left = rect.left + "px";
      clone.style.width = rect.width + "px";
      clone.style.height = rect.height + "px";
      clone.style.borderRadius = getComputedStyle(currentThumb).borderRadius;
      clone.style.objectFit = "cover";
    }

    setTimeout(function () {
      clone.style.display = "none";
      if (currentThumb) {
        currentThumb.style.visibility = "";
      }
      currentThumb = null;
    }, DURATION);
  }

  // Bind click on zoomable images
  document.querySelectorAll("[data-zoomable]").forEach(function (img) {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      open(this);
    });
  });

  // Close handlers
  overlay.addEventListener("click", close);
  clone.addEventListener("click", close);
  hdImg.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  // Expose medium_zoom compatible interface for theme.js
  medium_zoom = {
    update: function (opts) {
      if (opts && opts.background) {
        overlay.style.background = opts.background;
      }
    },
  };
});
