const myArray = [10, 20,30];
console.log(myArray)
console.log(myArray[1]) //index (20)

const mixed = [10, 'dean', false, {name: 'miks'}, [2, 3]];
console.log(mixed.length) //tell how many value in the array
console.log(mixed[3].name) //get the specific value

myArray.push(40) //add value to the end
console.log(myArray);

myArray.splice(1, 1); //index want to remove, how many will remove
console.log(myArray);

let i = 1;

while (i <= 5) {
    console.log(i)
    i++;
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//Non standard loop
let randomNum = 0;

while (randomNum < 0.5) {
    randomNum = Math.random(); //doesnt need a increment step
}

console.log(randomNum);

//LOOPING THTROUGH AN ARRAY
const arrayName = ['dean', 'mark', 'santos'];

for (let i = 0; i < arrayName.length; i++) {
    const value = arrayName[i]; //access the value inside array
    console.log(value)
}

//ACCUMULATOR PATTERN
//CALCULATE THE INSIDE OF AN ARRAY
const nums = [1,1,3];
let total = 0; //create the variable

for (let i = 0; i < nums.length; i++) {
    const value = nums[i]; //create a variable to store the values in array
    total += value; //add the values and the total variable
}
console.log(total); //answer is 5

//DOUBLE THE VALUE OF nums Array
const numsDoubled = []; //create a separate empty array
for (let i = 0; i < nums.length; i++) {
    const doubledVal = nums[i]; //get the nums array value
    numsDoubled.push(doubledVal * 2); //multiply by 2
}
console.log(numsDoubled); //answer is [2, 2, 6]