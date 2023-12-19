const hamburger = document.querySelector('.hamburger');
const navCollapse = document.querySelector('.nav-collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});

var swiper = new Swiper(".categorySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});