//12a
const add = function () {
    console.log(2+3);
};
add();

//12b
const runTwice = function (fun) {
    console.log(fun);
};
runTwice('12b');
runTwice('12b');
//12c
function change() {
    const btn1 = document.querySelector('.btn1');
    
    setTimeout(function() {
        btn1.innerHTML = 'Finished!';
    }, 1000);
}
//12d
function change2() {
    const btn1 = document.querySelector('.btn1');
    btn1.innerHTML = 'loading....';
    setTimeout(function () {
        btn1.innerHTML = 'finished!';
    }, 1500);
}
//12e
function addCart() {
    const text = document.querySelector('.btn2-text');
    text.innerHTML = 'Added'

    setTimeout(function() {
        text.innerHTML = '';
    }, 1500); 

}
//12f
let timeId;
function change3() {
    const btn1 = document.querySelector('.btn1');
    btn1.innerHTML = 'loading....';

    clearTimeout(timeId);

    timeId = setTimeout(function () {
    btn1.innerHTML = 'finished!';
    toggled = true;
    }, 1500);
}
//12f
let addCartId;
function addCart2() {
    let text = document.querySelector('.btn2-text');
    text.innerHTML = 'Added';

    clearTimeout(addCartId)
    addCartId = setTimeout(function () {
        text.innerHTML = '';
    }, 1500);
}
//12g
/*
setInterval(function () {
    if (document.title === 'Lesson 12-Exercises') {
        document.title = '(2) Messages';
    }
    else {
        document.title = 'Lesson 12-Exercises';
    }
}, 2000);
*/

//12h
let messages = 2;

setInterval(function () {
    if (document.title === 'Lesson 12-Exercises') {
        document.title = `(${messages}) Messages`;
    }
    else {
        document.title = 'Lesson 12-Exercises';
    }
}, 1000);

function add1() {
    messages++;
}
function remove() {
    if (messages === 0) { //12i
        alert('No messages')
        return;
    } 
    else {
    messages--;
    }
}
//12j