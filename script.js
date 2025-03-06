const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

resetButtonEl.addEventListener("click", () => {
  // set counter element with the value of 0
  counterValueEl.textContent = 0;
});

increaseButtonEl.addEventListener("click", incrementCounter);

document.addEventListener("keydown", incrementCounter);

decreaseButtonEl.addEventListener("click", decrementCounter);

function incrementCounter() {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // increment the value by one
  const newValue = currentValueAsNumber + 1;

  // set counter element with the new value
  counterValueEl.textContent = newValue;
}

function decrementCounter() {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // decrement the value by one
  const newValue = currentValueAsNumber - 1;

  // set counter element with the new value
  counterValueEl.textContent = newValue;
}
