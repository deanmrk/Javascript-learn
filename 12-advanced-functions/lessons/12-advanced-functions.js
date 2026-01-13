//FUNCTIONS ARE VALUES
const function1 = function greet() { //can save a function inside a variable
    console.log('hi');
}
function1();

//ANONYMOUS FUNCTION, removed the 'greet'
const func1 = function() {
    console.log('function 3');
}
func1();

//function in object
const object = {
    name: 'Dean',
    greet: function () { //anonymous function
        console.log('function inside an object');
    }
}
object.greet();

//PASSING A VALUE INTO A FUNCTION
function display(param) {
    console.log(param); //call the parameter
};
display('called the parameter')

function run(param) {
    param() //called the function inside parameter (param)
};
run(function() {
    console.log('function to function in parameter')
})

//SET TIME OUT - a timer
/*
setTimeout(function () {
    console.log('time in!');
    console.log('time out!');
}, 1500); //same time to pop up
*/
//ASYNCHRONOUS CODE
console.log('next line') //test whos first to display in the console

//SET INTERVAL - it will run endless (its also asynchronous)
/*
setInterval(function () {
    console.log('interval');
}, 2000)
*/

//forEach method = loop through each array, and parameter is the index

const array1 = [
    'make dinner',
    'make foods',
    'make dinner',
    'make breakfast',
]

array1.forEach(function (value, i) {
    if (value === 'make foods') {
        return; //same as continue, coz continue not work in this fnction
    }
    console.log(value);
});
