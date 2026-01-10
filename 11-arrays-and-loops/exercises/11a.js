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