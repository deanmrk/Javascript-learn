//10c
/*
let test = document.querySelector('.jsBtn');
console.log(test.classList.contains('jsBtn'));
*/

//10d
function tenD() {
    let gamingD = document.querySelector('.btnGamingD');

    if (!gamingD.classList.contains('toggled')) {
        gamingD.classList.add('toggled')
    }
    else {
        gamingD.classList.remove('toggled')
    }
}

//10E
/*
function gaming(select) {
    let gaming = document.querySelector('.btnGaming');
    let music = document.querySelector('.btnMusic');
    let tech = document.querySelector('.btnTech');

    let button = document.querySelector(select);

    if (select === 'Gaming') {
        if (!gaming.classList.contains('isToggled')) {
            gaming.classList.add('isToggled');
        }
        else {
            gaming.classList.remove('isToggled');
        }
    }
    else if (select === 'Music') {
        if (!music.classList.contains('isToggled')) {
            music.classList.add('isToggled');
        }
        else {
            music.classList.remove('isToggled');
        }
    }
    else if (select === 'Tech') {
        if (!tech.classList.contains('isToggled')) {
            tech.classList.add('isToggled');
        }
        else {
            tech.classList.remove('isToggled');
        }
    }

}
*/
function gaming(select) {
    const button = document.querySelector(select);

    if (!button.classList.contains('isToggled')) {
        previousButton()
        button.classList.add('isToggled');
    }
    else {
        button.classList.remove('isToggled');
    }
}

function previousButton() {
    const previousBtn = document.querySelector('.isToggled');
    if (previousBtn) {
        previousBtn.classList.remove('isToggled');
    }
}

//10 H
function calculate() {
    const inputText = document.querySelector('.js-input');
    getText = Number(inputText.value);
    const total = document.querySelector('.total');

    //check if the input value is less that 0
    if (getText < 0 || getText === 0) {
        total.innerHTML = `<span>Error: Cannot be less that $0</span>`
    }

    if (getText >= 1 && getText < 40) {
        getText += 10;
        total.innerHTML = `$ ${getText} + Shipping fee`
    }
    else if (getText >= 40) {
        total.innerHTML = `$ ${getText} + Free Shipping`
    }
}
function enter(event) {
    if (event.key === 'Enter') {
        calculate()
    }
}