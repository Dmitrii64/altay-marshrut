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

//accordion

let faqAccordion = document.querySelector(".program__faq");
faqAccordion.addEventListener("click", (event) => {
  let target = event.target;
  let item = target.closest('.accordion__item');
  if (!item) return;
  item.classList.toggle("accordion__item_active");
})