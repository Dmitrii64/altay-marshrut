let rangeAmount = document.querySelector('.range-1');
let rangeDuration = document.querySelector('.range-2');

noUiSlider.create(rangeAmount, {

  range: {
    'min': 0,
    'max': 150000
  },

  step: 1000,
  start: [20000, 80000],
  margin: 1000,
  connect: true,
  tooltips: [
    wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '₽'
    }),
    wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '₽'
    })
  ]
});

noUiSlider.create(rangeDuration, {

  range: {
    'min': 2,
    'max': 14
  },

  step: 1,
  start: [3, 10],
  margin: 1,
  connect: true,
  tooltips: [
    wNumb({
      decimals: 0,
      suffix: 'дня'
    }),
    wNumb({
      decimals: 0,
      suffix: 'дней'
    })
  ]
});

let minusButton = document.querySelector(".filters__minus");
let plusButton = document.querySelector(".filters__plus");

minusButton.addEventListener("click", () => {
  let amount = document.querySelector(".filters__amount-value");
  let value = amount.innerHTML;
  value = value - 1;
  amount.innerHTML = value;
  if (value === 1) {
    minusButton.setAttribute("disabled", "disabled")
  }
})

plusButton.addEventListener("click", () => {
  let amount = document.querySelector(".filters__amount-value");
  let value = amount.innerHTML;
  
  if (value === "1") {
    minusButton.removeAttribute("disabled", "disabled")
  }
  value = +value + 1;
  amount.innerHTML = value;
})

//mobile-filters
let filtersButton = document.querySelector('.mobile-filters');
let filtersClose = document.querySelector('.filters__close');
let filters = document.querySelector('.tours__filters');
const body = document.querySelector("body");

filtersButton.addEventListener('click', ()=> {
  filters.classList.add('tours__filters_open');
  body.classList.add("no-scroll")
})

filtersClose.addEventListener('click', ()=> {
  filters.classList.remove('tours__filters_open');
  body.classList.remove("no-scroll")
})

//mobile-menu
const burger = document.querySelector(".header__burger");
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