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

//nav
let navigation = document.querySelector('.product-tabs__list')

navigation.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains('product-tabs__item') && !target.classList.contains('product-tabs__item_active')) {
    document.querySelector(".product-tabs__item_active").classList.remove("product-tabs__item_active");
    target.classList.add("product-tabs__item_active");
  }
})