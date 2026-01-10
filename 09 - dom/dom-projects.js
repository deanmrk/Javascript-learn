let subsButton = document.querySelector(".subsBtn");

//SUBSCRIBE BUTTON
function subscribe() {
  if (subsButton.innerText === "Subscribe") {
    subsButton.innerHTML = "Subscribed";
  } else {
    subsButton.innerHTML = "Subscribe";
  }
}

//AMAZON SHIP FUNCTION


function calculate() {
  let amount = document.querySelector('.js-text-input');
  getAmount = amount.value;
  let total = document.querySelector('.total');
  
  if (getAmount < 40) {
    getAmount + 10;
    total.innerHTML = `$ ${getAmount}`
  }
  
}
