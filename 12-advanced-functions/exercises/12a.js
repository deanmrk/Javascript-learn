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