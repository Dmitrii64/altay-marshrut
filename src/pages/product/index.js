const productsExtraSwiper = new Swiper('.products-extra-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 10,
  slidesOffsetBefore: 10,
  breakpoints: {
    768: {
      slidesOffsetBefore: 0,
    },

    1200: {
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    }
  },
  navigation: {
    nextEl: '.products-extra-swiper-button-next',
    prevEl: '.products-extra-swiper-button-prev',
  },
});

const productsSimilarSwiper = new Swiper('.products-similar-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 10,
  slidesOffsetBefore: 10,
  breakpoints: {
    768: {
      slidesOffsetBefore: 0,
    },

    1200: {
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    }
  },
  navigation: {
    nextEl: '.products-similar-swiper-button-next',
    prevEl: '.products-similar-swiper-button-prev',
  },
});