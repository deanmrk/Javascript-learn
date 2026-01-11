//shortcut assigning variables or getting variables
const [num1, num2, num3] = [3,6,9];
console.log(num2);

//BREAK 
for (let i = 1; i <= 5; i++) {
    console.log(i) //display the output
    if (i === 3) { //if reach 3, stop the loop
        break;
    }
}

//continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; //skip the number 3
    }
    console.log(i)
    if (i === 4) {
        break;
    }
}

//divisible
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) { //skip 3,6,9
        continue;
    }
    console.log(i)
}

//using while loop
let x = 1;

while (x <= 10) {
    if (x % 3 === 0) {
         x++;
        continue;
    }
    x++;
    console.log(x)
}

//Loops for functions
function func(array) {
    let doubled = [];
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
       /* if (value === 1) {
            continue; skip the value 1
        } */ 
        doubled.push(value * 2);
    }
    console.log(doubled);
}
func([1,1,2]); //reusable for loop using parameter