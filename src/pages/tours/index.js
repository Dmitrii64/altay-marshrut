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