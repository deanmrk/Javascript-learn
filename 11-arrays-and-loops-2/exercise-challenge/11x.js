let myArray = JSON.parse(localStorage.getItem('myArray')) || [{name: 'wash', date: '2026-01-12'}];

renderData()

function renderData() {
    const container = document.querySelector('.container');
    let html = '';

    for (let i = 0; i < myArray.length; i++) {
        const value = myArray[i];
        const {name, date} = value;

        html += `<div>${name}</div>
                <div>${date}</div>
                <button class="js-delete"
                    onclick="myArray.splice(${i}, 1); renderData(); save();">
                    Delete
                </button>
                `;
    }
    container.innerHTML = html;
}

function addText() {
    const input = document.querySelector('.js-input');
    const date = document.querySelector('.js-date');

    let getInput = input.value;
    let getDate = date.value;

    if (!getInput || !getDate) {
        alert('Please fill all the blanks!')
    } else {
    myArray.push({name: getInput, date: getDate});
    save();
    renderData();
    }
    input.value = '';
    date.value = '';
};

function save() {
    localStorage.setItem('myArray', JSON.stringify(myArray));
};