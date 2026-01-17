//12j
const multiply = (num1, num2) => {
    console.log(num1 * num2);
};
multiply(7,10);

//12k - ONE LINE method
const multiply2 = num1 => {return num1 * 2};
console.log(multiply2(10));

//12L
function countPositive(nums) {
    let positives = 0;
    nums.forEach( (num) => {
        if (num >= 0) {
            positives++;
        }
    });
    return positives;
}
console.log(countPositive([1, -3, 5, 6]));

//12m
function addNum(array, num) {
    return array.map( (value) => {
        return value + num //need return to return the value;
    });
}
console.log(addNum([1, 2, 3], 2));

//12n
function removeEgg(foods) {
    return foods.filter( (value) => {
       if (value === 'egg') {
            return false;
        } 
        else {
            return true;
        }
    })
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham', 'cheese'])); //filter the egg

//12O
function removeEggs2(foods) { //REMOVE THE FIRST 2 EGGS
    let count = 0;
    return foods.filter( (value) => {
        if (value === 'egg' && count < 2) {
            count++
            return false;
        }
        return true;
    })
}
console.log(removeEggs2(['egg', 'apple', 'egg', 'egg', 'ham', 'cheese']));

//12p
const button1 = document.querySelector('.btn1');
function change() {  
    setTimeout( () => button1.innerHTML = 'Finished', 1000)
};
//12q
button1.addEventListener('click', () => change());

//12r
//another file