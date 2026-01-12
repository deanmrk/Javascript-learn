for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        continue;
    }
    if (i % 3 === 0) {
        console.log('Fizz')
        continue;
    }
    if (i % 5 === 0) {
        console.log('Buzz')
        continue;
    }
    
    console.log(i)
}

//11w
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === word) {
            return i;
        }

    }
    return -1; //return negative 1 if no value is find
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red')); //1

function unique(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const getValue = array[i];

        if (findIndex(result, getValue) === -1) {
            result.push(getValue)
        }
        
    }
    return result;
}
console.log(unique(['green', 'red', 'blue', 'red'])); //cant understand