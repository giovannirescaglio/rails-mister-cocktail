
function initUpdateNavbarOnScroll() {
  console.log('hello')
  const navbar = document.querySelector('.navbar-wagon');
  console.log(navbar)
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 320) {
      navbar.classList.add('navbar-wagon-white');
    } else {
      navbar.classList.remove('navbar-wagon-white');
    }
  });
}

export { initUpdateNavbarOnScroll };
