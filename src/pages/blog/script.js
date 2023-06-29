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
let activeCategory

if (document.documentElement.clientWidth > 768) {
  let navButtons = document.querySelectorAll(".webpage-navigation__item");
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      navButtons.forEach(button => {
        button.classList.remove("webpage-navigation__item_active")
      })
      button.classList.add("webpage-navigation__item_active");
      activeCategory = button.dataset.category

      let contentBlock = document.querySelector(".blog-content");
      let activeBlock = contentBlock.querySelector(`[data-category=${activeCategory}]`);

      document.querySelectorAll(".content-js").forEach(block => {
        block.classList.add('hidden');
        activeBlock.classList.remove('hidden');
      })
    })
  })
} else {
  let select = document.querySelector(".webpage__type-select");
  select.addEventListener('change', (event) => {
    activeCategory = event.target.options[event.target.selectedIndex].dataset.category;
    let contentBlock = document.querySelector(".blog-content");
    let activeBlock = contentBlock.querySelector(`[data-category=${activeCategory}]`);

    document.querySelectorAll(".content-js").forEach(block => {
      block.classList.add('hidden');
      activeBlock.classList.remove('hidden');
    })
  })
}

//faqNav

let faqList = document.querySelector(".faq-content__categories");
faqList.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains('faq-content__category') && !target.classList.contains('faq-content__category_active')) {
    document.querySelector(".faq-content__category_active").classList.remove("faq-content__category_active");
    target.classList.add("faq-content__category_active");
  }
})

//accordion

let faqAccordion = document.querySelector(".faq-content__list");
faqAccordion.addEventListener("click", (event) => {
  let target = event.target;
  let item = target.closest('.accordion__item');
  if (!item) return;
  item.classList.toggle("accordion__item_active");
})