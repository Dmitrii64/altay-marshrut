//код нехороший, но чтобы кучу страниц не плодить

let navButtons = document.querySelectorAll(".webpage-navigation__item");
let activeCategory

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(button => {
      button.classList.remove("webpage-navigation__item_active")
    })
    button.classList.add("webpage-navigation__item_active");
    activeCategory = button.dataset.category

    let contentBlocks = document.querySelectorAll(".content-js");
    let activeBlock = document.querySelectorAll(`[data-category=${activeCategory}]`)[1];
    
    contentBlocks.forEach(block => {
      block.classList.add('hidden');
      activeBlock.classList.remove('hidden');
    })
  })
})