//11a
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums)
//11b
function getLastValue(array) { //GET LAST VALUE
    const lastValue = array.length - 1;
    return array[lastValue];
}
console.log(getLastValue(['hi', 'hello', ' good'])); //good
//11c
function arraySwap(array) {
    const lastIndex = array.length -1;

    const firstVal = array[0];
    const lastValue = array[lastIndex];

    array[0] = lastValue;
    array[lastIndex] = firstVal;

    return array;
}
console.log(arraySwap([1, 2, 3]));
//11d
for (let i = 0; i <= 10; i+=2) { //count 0-10 but 2,4,6...
    console.log(i)
}
//11e
for (let i = 5; i > 0; i--) {
    console.log(i) //5-1
}
//11f
let i = 0;
while (i < 10) {
    i += 2;
    console.log(i)
}
//11g
const myArray = [1, 2, 3];
let total = [];
for (let i = 0; i < myArray.length; i++) {
    total.push(myArray[i] + 1)
}
console.log(total); // double the array value to 1
//11h
function addOne(array) {
    let total = [];
    for (let i = 0; i <array.length; i++) {
        total.push(array[i] + 1)
    }
    return total;
}
console.log(addOne([1,2,3]));
//11i
function addNum(array, num) {
    let total = [];
    for (let i = 0; i < array.length; i++) {
        total.push(array[i] + num);
    }
return total;
}
console.log(addNum([1,2,3], 2));
//11j
function addArray(array1, array2) {
    let total = [];
    for (let i = 0; i < array1.length; i++) {
        total.push(array1[i] + array2[i])
    }
    return total;
}
console.log(addArray([1,1,2], [1,1,3]));
//11k
function countPositive(nums) {
    let positive = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positive += 1;
        }
    }
    return positive;
}
console.log(countPositive([1, -3, 5]));
//11l
function minMax(nums) {
    let totals = {
        min: nums[0],
        max: nums[0]
    };
    
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];

        if (totals.min === null || value < totals.min) {
            totals.min = value;
        }

        if (totals.max === null || value > totals.max) {
            totals.max = value;
        }
    }
    return totals;
}
console.log(minMax([1, -3, 5]))
console.log(minMax([2, 3]))
//11n 
function countWords(words) {
    let appeared = {};
        for (let i = 0; i < words.length; i++) {
            let fruits = words[i];

            if (!appeared[fruits]) {
                appeared[fruits] = 1;
            }
            else {
                appeared[fruits]++;
            }
        }  
    return appeared;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple']))

//PART 2
//11o
const arrayO = ['search', 'hello', 'search', ' world', 'good', 'search'];
let index = 0;
for (let i = 0; i < arrayO.length; i++) {
    const value = arrayO[i];

    if (value === 'search') {
        index++;
    } 
   
}
 console.log(index); //3
 //11p
 let index2 = 0;
 for (let i = 0; i < arrayO.length; i++) {
    const value = arrayO[i];

    if (value === 'search') {
        index2++;
        break;
    }
 }
 console.log(index2);
 //11q
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === word) {
            return i;
        }

    }
    return -1; //return negative 1 if no value is find
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red')); //1
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));
//11r
function removeEgg(foods) {
    const goods = []; 
    for (let i = 0; i < foods.length; i++) {
        const getFood = foods[i];

        if (getFood === 'egg') {
            continue;
        }
        goods.push(getFood)
    }
    return goods;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); //filter eggs
//11s
function removeEgg2(foods) {
    let result = [];
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        const getFood = foods[i];

        if (getFood === 'egg' && count < 2) {
            count++
            continue;
        }
        result.push(getFood);
    }
    return result;
}
console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));

//11t
function removeEgg3(foods) {
    const reverseFood = foods.reverse(); //reverse the order of values
    let result = [];
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        if (reverseFood[i] === 'egg' && count < 2) {
            count++
            continue;
        }
        result.push(reverseFood[i]); 
    }
    return result.reverse(); //return to original order after reversing
}
console.log(removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']));
//11u
