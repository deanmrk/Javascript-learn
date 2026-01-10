//SUBSCRIBE BUTTON
let btnSubs = document.querySelector('.subsBtn');

function subscribe() {
    if (btnSubs.innerHTML === 'Subscribe') {
        btnSubs.innerHTML = 'Subscribed'
        btnSubs.classList.add('isSubscribe')
    } else {
        btnSubs.innerHTML = 'Subscribe'
        btnSubs.classList.remove('isSubscribe')
    }
}

//AMAZON FUNCTION
function calculate() {
    let text = document.querySelector('.js-text-input');
    getText = Number(text.value);
    let total = document.querySelector('.total');

    if (getText < 40) {
        getText += 10;
        total.innerHTML = `$ ${getText} + <span>Shipping fee</span>`;

    }
    else if (getText >= 40) {
        total.innerHTML = `$ ${getText} + <span>Free Shipping</span>`;
    }
}