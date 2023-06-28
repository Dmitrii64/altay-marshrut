const blogSwiper = new Swiper('.blog-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 16,
  slidesOffsetAfter: 10,
  slidesOffsetBefore: 10,
  breakpoints: {
    600: {
      slidesPerView: 2,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },

    1024: {
      slidesPerView: 3,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },

    1200: {
      slidesPerView: 4,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },
  },
  navigation: {
    nextEl: '.blog-swiper-button-next',
    prevEl: '.blog-swiper-button-prev',
  },
});