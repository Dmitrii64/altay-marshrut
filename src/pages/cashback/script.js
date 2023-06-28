const hotSwiper = new Swiper('.hot-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    }
  },
  navigation: {
    nextEl: '.hot-swiper-button-next',
    prevEl: '.hot-swiper-button-prev',
  },
});