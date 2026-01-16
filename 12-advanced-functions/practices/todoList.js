const myArray = [
    {name: 'Wash', date: '2025-09-01'},
    {name: 'Bath', date: '2025-09-10'}
];

const container = document.querySelector('.container');

renderData()
function renderData() {
    let html = '';

    myArray.forEach( (getValObject) => { //change the function method to ARROW FUNCTIN
        const { name, date } = getValObject;

        html += `
                <div>${name}</div>
                <div>${date}</div>
                <button class="js-delete deleteBtn">Delete</button>
                `;
    });
    container.innerHTML = html;

    const deleteBtn = document.querySelectorAll('.deleteBtn'); //if many buttons is needed, u need querySelectorAll
    deleteBtn.forEach( (value, i) => { //2 parameters, value = buttons / i = index
        value.addEventListener('click', () => { //buttons.addEventListener
            myArray.splice(i, 1);
            renderData();
        })
    })
}

function text() {
    const input = document.querySelector('.js-input');
    const date = document.querySelector('.js-date');
    
    const getInput = input.value;
    const getDate = date.value;

    if (!getInput || !getDate) {
        alert('Please fill all the blanks!');
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
        text();
    }
}

//CHANGE THE CLICK METHOD OF onlick="" to addEventListener
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
    text();
});
