import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Want some fresh cocktails ?", "Check this out"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
