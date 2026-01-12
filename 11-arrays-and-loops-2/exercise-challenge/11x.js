const myArray = [{name: 'wash', date: '2026-01-12'}];

renderData()

function renderData() {
    
    const container = document.querySelector('.container');
    let html = '';

    for (let i = 0; i < myArray.length; i++) {
        const value = myArray[i];
        const {name, date} = value;

        html += `<div>${name}</div>
                <div>${date}</div>
                <button 
                    onclick="myArray.splice(${i}, 1); renderData(); ">
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

    myArray.push({name: getInput, date: getDate});
    renderData();

    input.value = '';
    date.value = '';
}