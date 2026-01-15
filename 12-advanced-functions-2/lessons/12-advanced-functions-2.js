//ARROW FUNCTION
const arrowFunc = () => {
    console.log('Arrow Function');
}
arrowFunc();
//With parameter
const func = (param) => {
    console.log(param);
}
func('Hi');
//Other method of arrow function
const secMethod = param => { //if u only use 1 param, u can use parameters without brackets
    console.log(param);
}
secMethod('without brackets arrow function')
//test
const enter = event => {
    if (event.key === 'Enter') {
        alert('Test');
    }
}
//One line function - if the code can only be one line, u can use this method
const oneLine = () => console.log('One line'); //u can remove the curly brackets too
oneLine();

//Practice - use arrow functions
const myArray = [
    'Make dinner',
    'Make sandwich',
    'Make website'
];

myArray.forEach(prac = (value) => {
    console.log(value);
})

//Object has built in feature for Functions - use this 
const object = {
    method: () => {
        console.log('Method 1'); //method 1
    },
    method2() { //SHORTHAND METHOD
        console.log('Method 2 - Preferred this'); //method 2
    }
}
object.method2(); //test

//ADD EVENT LISTENER
const btnEventListener = document.querySelector('.btnEventListener');

const eventListener = () => {
    alert('Test 2 add event listener button');
}

btnEventListener.addEventListener('click', eventListener); //removed, using removeEventListener()

btnEventListener.addEventListener('click', () => { //arow function
    alert('not removed event listener')
});

//REMOVE EVENT LISTENER
btnEventListener.removeEventListener('click', eventListener) //call it without brackets to work
