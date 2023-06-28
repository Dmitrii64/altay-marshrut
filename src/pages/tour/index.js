const programSwiper = new Swiper('.program-swiper', {
  slidesPerView: 1,
  
  navigation: {
    nextEl: '.program-swiper-button-next',
    prevEl: '.program-swiper-button-prev',
  },
});

const imgSwiper = new Swiper('.img-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  
  navigation: {
    nextEl: '.img-swiper-button-next',
    prevEl: '.img-swiper-button-prev',
  },
});

const gidsSwiper = new Swiper('.gids-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 10,
  slidesOffsetBefore: 10,
  breakpoints: {
    769: {
      slidesOffsetAfter: 0,
      slidesPerView: 3,
      slidesOffsetBefore: 0,
    },
    1024: {
      spaceBetween: 68,
      slidesPerView: 3,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    }
  },
  navigation: {
    nextEl: '.gids-swiper-button-next',
    prevEl: '.gids-swiper-button-prev',
  },
});

const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 'auto',
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 12,
  breakpoints: {
    1024: {
      spaceBetween: 18,
      slidesOffsetBefore: 14,
      slidesOffsetAfter: 14,
      initialSlide: 0,
      centeredSlides: false,
    }
  }
});

const reviewSwiper = new Swiper('.review-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 14,
  slidesOffsetAfter: 10,
  slidesOffsetBefore: 10,
  breakpoints: {
    769: {
      slidesOffsetAfter: 0,
      slidesPerView: 2,
      slidesOffsetBefore: 0,
    },
  },
  navigation: {
    nextEl: '.review-swiper-button-next',
    prevEl: '.review-swiper-button-prev',
  },
});