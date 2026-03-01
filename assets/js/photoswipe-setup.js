import PhotoSwipeLightbox from "https://jsd.cdn.zzko.cn/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js";
import PhotoSwipe from "https://jsd.cdn.zzko.cn/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js";
const photoswipe = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});
photoswipe.init();
