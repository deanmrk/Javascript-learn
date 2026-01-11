const myArray = [
    {name: 'Wash', date: '2025-09-01'},
    {name: 'Bath', date: '2025-09-10'}
];
renderData()
function renderData() {
    const container = document.querySelector('.container');
    let html = '';

    for (let i = 0; i < myArray.length; i++) {
        const getValObject = myArray[i];

        //const name = getValObject.name;
        //const date = getValObject.date;

        //can also use destructuring 
        //const { name } = getValObject; and
        //const { date } = getValObject; or this shortcut
        const {name, date} = getValObject;

        html += `
                <div>${name}</div>
                <div>${date}</div>
                <button class="js-delete"
                 onclick="myArray.splice(${i}, 1)
                    renderData(); ">Delete
                </button>
                `
    }
    container.innerHTML = html;
    return html;
}

function text() {
    const input = document.querySelector('.js-input');
    const date = document.querySelector('.js-date');
    
    getInput = input.value;
    getDate = date.value;

    if (!getInput || !getDate) {
        alert('Please fill all the blanks!')
    }
    else {
    myArray.push({name: getInput, date: getDate}); //can also use shorthand property if the name of two properties is same
    renderData()
    }
    input.value = '';
    date.value = '';
};

function enter(event) {
    if (event.key === 'Enter') {
        text()
    }
}