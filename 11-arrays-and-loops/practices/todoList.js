const array1 = [];
function text1() {
    const Text1 = document.querySelector('.js-text-1');
    getText1 = Text1.value;

    array1.push(getText1)
    console.log(array1);

    Text1.value = ''; //reset the textbox after adding
}

//TO DO LIST 2
const array2 = ['js'];
render()
function render() {
const container = document.querySelector('.container');
let getHtml = '';

    for (let i = 0; i < array2.length; i++) {
        const getArray = array2[i];
        const html = `<p>${getArray}</p>`
        getHtml += html;
    }
    container.innerHTML = getHtml;
}

function text2() {
    const Text2 = document.querySelector('.js-text-2');
    getText2 = Text2.value;

    array2.push(getText2);
    render();
    Text2.value = '';
}