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



//.FILTER() 
const array1 = [1, -5, 3];
   /* const filterArray = array1.filter( (value, i) => {
        
        if (value >= 0) {
            return true;
        }
        else {
            return false;
        }
        
        return value >= 0; //works same way as the above code
    }); 
console.log(filterArray); //filter() does NOT modify the original array, so
//if u console.log(array1) directly, it will only display the original values.
    */
const array1Copy = array1.filter( value => {return value >= 0}); //shortest method when only using 1 variable and 1 line of code
console.log(array1Copy);


//.map() = ALTERNATIVE WAY JUST LIKE THE ACCUMULATOR PATTERN
const array2 = [1,1,3];
    /*
    const array2Map = array2.map( (value, i) => {
        //return 5; //display [5,5,5]
        return value + 2; //display [3,3,5]
    });
    
console.log(array2Map); //map() does NOT modify the original array, so
//if u console.log(array2) directly, it will only display the original values.
    */
const array2Copy = array2.map( value => {return value + 3}); //shortest method, if only using 1 variable and 1 line of code
console.log(array2Copy); // display [4,4,6]

//CLOSURE FEATURE
const closureBtn = document.querySelectorAll('.closureBtn');
closureBtn.forEach( (value, i) => {
    
    value.addEventListener('click', () => {
        console.log(i) //display the index of that button u clicked
    })
    
})
//console.log(i) - this will return undefined because the loop ended and i is no longer exist