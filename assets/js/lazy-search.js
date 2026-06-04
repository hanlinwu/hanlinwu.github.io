(function () {
  let searchReady;

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

  const ensureSearch = async () => {
    if (searchReady) return searchReady;

    searchReady = (async () => {
      await customElements.whenDefined("ninja-keys");

      let ninjaKeys = document.querySelector("ninja-keys");
      if (!ninjaKeys) {
        ninjaKeys = document.createElement("ninja-keys");
        ninjaKeys.setAttribute("hideBreadcrumbs", "");
        ninjaKeys.setAttribute("noAutoLoadMdIcons", "");
        ninjaKeys.setAttribute("placeholder", "Type to start searching");
        document.body.appendChild(ninjaKeys);
      }

      if (typeof determineComputedTheme === "function" && determineComputedTheme() === "dark") {
        ninjaKeys.classList.add("dark");
      }

      await loadScript("/assets/js/search-data.js");
      return ninjaKeys;
    })();

    return searchReady;
  };

  window.openSearchModal = async () => {
    const navbarNav = window.$ ? $("#navbarNav") : null;
    if (navbarNav && navbarNav.hasClass("show")) {
      navbarNav.collapse("hide");
    }

    const ninjaKeys = await ensureSearch();
    ninjaKeys.open();
  };

  document.addEventListener("readystatechange", () => {
    if (document.readyState !== "interactive") return;

    const shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement && navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
      shortcutKeyElement.innerHTML = '&#x2318; k <i class="fa-solid fa-magnifying-glass"></i>';
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      window.openSearchModal();
    }
  });
})();
