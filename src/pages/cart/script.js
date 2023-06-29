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

let products = document.querySelectorAll(".cart__item");
products.forEach(product => {
  let minusButton = product.querySelector(".cart__item-minus");
  let plusButton = product.querySelector(".cart__item-plus");

  minusButton.addEventListener("click", () => {
    let amount = product.querySelector(".cart__item-number");
    let value = amount.innerHTML;
    value = value - 1;
    amount.innerHTML = value;
    if (value === 1) {
      minusButton.setAttribute("disabled", "disabled")
    }
  })

  plusButton.addEventListener("click", () => {
    let amount = product.querySelector(".cart__item-number");
    let value = amount.innerHTML;

    if (value === "1") {
      minusButton.removeAttribute("disabled", "disabled")
    }
    value = +value + 1;
    amount.innerHTML = value;
  })
})