const formTipCalculatorEl = document.querySelector(".formTipCalculator");
const amountOnAccountEl = document.querySelector(".amountOnAccount");
const serviceQualityEl = document.querySelector(".serviceQuality");
const qtyPeopleEl = document.querySelector(".qtyPeople");
const commonTipEl = document.querySelector(".commonTip");
const countTipPerPersonEl = document.querySelector(".countTipPerPerson");

const submitForm = (event) => {
  event.preventDefault();

  const amountOnAccountValue = Number(amountOnAccountEl.value);
  const serviceQualityValue = Number(serviceQualityEl.value);
  const qtyPeopleEl = Number(serviceQualityEl.value);
  const commonTip = (serviceQualityValue * amountOnAccountValue) / 100;
  const countTipPerPerson = commonTip / qtyPeopleEl;

  commonTipEl.textContent = commonTip;
  countTipPerPersonEl.textContent = countTipPerPerson;
};

formTipCalculatorEl.addEventListener("submit", submitForm);
