const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  // set counter element with the value of 0
  counterValueEl.textContent = 0;

  // reset background color
  counterEl.classList.remove("counter--limit");

  // reset counter title
  counterTitleEl.textContent = "Fancy Counter";

  // enable increase / decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
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
  let newValue = currentValueAsNumber + 1;

  // check if the newValue is greater than 5
  if (newValue > 5) {
    newValue = 5;

    // give visual indicator
    counterEl.classList.add("counter--limit");

    // update counter title
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter element with the new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) increase button
  increaseButtonEl.blur();
}

function decrementCounter() {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // decrement the value by one
  let newValue = currentValueAsNumber - 1;

  // check if the new value is less than 0
  if (newValue < 0) {
    newValue = 0;
  }

  // set counter element with the new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) decrease button
  decreaseButtonEl.blur();
}
