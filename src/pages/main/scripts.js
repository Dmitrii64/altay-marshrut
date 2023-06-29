//swipers
const posterSwiper = new Swiper('.poster-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.poster-swiper-button-next',
    prevEl: '.poster-swiper-button-prev',
  },
  pagination: {
    el: ".poster-swiper-pagination",
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return current + '<span class="swiper-separator"></span>' + total;
    }
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

const productsSwiper = new Swiper('.products-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 16,
  breakpoints: {
    1200: {
      slidesOffsetAfter: 0,
    }
  },
  navigation: {
    nextEl: '.products-swiper-button-next',
    prevEl: '.products-swiper-button-prev',
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

//mobile-menu
const burger = document.querySelector(".header__burger");
const body = document.querySelector("body");
const menu = document.querySelector(".mobile-menu");
const parent = document.querySelector(".mobile-menu__item_child")
const subMenu = document.querySelector(".mobile-menu__sublist");
const subMenuButton = document.querySelector(".mobile-menu__sublist-back");

burger.addEventListener("click", () => {
  body.classList.toggle("no-scroll")
  burger.classList.toggle("header__burger_open");
  menu.classList.toggle("mobile-menu_open");
})

parent.querySelector('p').addEventListener("click", ()=> {
  subMenu.classList.add("mobile-menu__sublist_open")
})

subMenuButton.addEventListener("click", ()=> {
  subMenu.classList.remove("mobile-menu__sublist_open")
})

//popup
const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".user__link_js");
const popupClose = document.querySelector(".popup__close");

popupOpen.addEventListener("click", () => {
  popup.classList.add('popup_open');
  body.classList.add("no-scroll")
})

popupClose.addEventListener("click", () => {
  popup.classList.remove('popup_open');
  body.classList.remove("no-scroll")
})

//near month

let monthList = document.querySelector(".near__nav");
if (document.documentElement.clientWidth > 1024) {
  monthList.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains('near__month') && !target.classList.contains('near__month_active')) {
      document.querySelector(".near__month_active").classList.remove("near__month_active");
      target.classList.add("near__month_active");
    }
  })
} else {
  monthList.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains('near__month_active')) {
      monthList.classList.add('near__nav_open');
      document.querySelectorAll(".near__month").forEach(month => {
        month.classList.add("near__month_open");
      });
    }
    if (target.classList.contains('near__month') && !target.classList.contains('near__month_active')) {
      document.querySelector(".near__month_active").classList.remove("near__month_active");
      target.classList.add("near__month_active");
      monthList.classList.remove('near__nav_open');
      document.querySelectorAll(".near__month").forEach(month => {
        month.classList.remove("near__month_open");
      });
    }
  })
}

//faq nav

let faqList = document.querySelector(".faq__nav");
if (document.documentElement.clientWidth > 1024) {
  faqList.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains('faq__chapter') && !target.classList.contains('faq__chapter_active')) {
      document.querySelector(".faq__chapter_active").classList.remove("faq__chapter_active");
      target.classList.add("faq__chapter_active");
    }
  })
} else {
  faqList.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains('faq__chapter_active')) {
      faqList.classList.add('near__nav_open');
      document.querySelectorAll(".faq__chapter").forEach(month => {
        month.classList.add("faq__chapter_open");
      });
    }
    if (target.classList.contains('faq__chapter') && !target.classList.contains('faq__chapter_active')) {
      document.querySelector(".faq__chapter_active").classList.remove("faq__chapter_active");
      target.classList.add("faq__chapter_active");
      faqList.classList.remove('near__nav_open');
      document.querySelectorAll(".faq__chapter").forEach(month => {
        month.classList.remove("faq__chapter_open");
      });
    }
  })
}

//accordion

let faqAccordion = document.querySelector(".faq__list");
faqAccordion.addEventListener("click", (event) => {
  let target = event.target;
  let item = target.closest('.accordion__item');
  if (!item) return;
  item.classList.toggle("accordion__item_active");
})