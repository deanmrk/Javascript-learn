const total = document.querySelector('.total');
let calculation = '';

function clear() {
    calculation = '';
    displayCalculation();
}

function equal() {
    calculation = eval(calculation);
    displayCalculation();
}

function nums(select) {
    calculation += select;
    displayCalculation();
}

function displayCalculation() {
    total.innerHTML = calculation;
}

