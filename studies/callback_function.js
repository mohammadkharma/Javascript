// CALLBACK FUNCTIONS:

function firstFunc() {
    console.log(1);
}

function secondFunc() {
    console.log(2);
}

firstFunc(); // 1
secondFunc(); // 2

function firstFunc1(params) {
    setTimeout( function () {
        console.log("firstFunc1:", 1);
    }, 500)
} // we set the timeout of execution to 500 m.s. (millisecond) 

function firstFunc2(params) {
    console.log("firstFunc2:",2);
}

firstFunc1();
firstFunc2();
// JS executes codes according to the timing of it and not the order
// firstFunc2: 2 (firstFunc2 executed before firstFunc1 )
// firstFunc1: 1

//------------------------------------------------------//

//  The call back:
function caller(func) {
    console.log("I accept a function and call it");
    func();
}

function callback() {
    console.log("I am a callback function");
}

caller(callback);
// I accept a function and call it
// I am a callback function 

// 4 ways to call back a function:
function funcToBeCalled(name) {
    console.log("I was called by:", name);
}

function funcWithCallBack(callback) {
    console.log("I am a funcWithCallBack ");
    callback("funcWithCallBack");
}

 // 1.
funcWithCallBack(funcToBeCalled);
// I am a funcWithCallBack 
// I was called by: funcWithCallBack

// 2.
setTimeout(funcToBeCalled, 1000);
// I was called by: undefined

// 3.
setTimeout(function() {
    console.log("I am set time out");
    funcToBeCalled("Set time out");
}, 2000)
// I was called by: Set time out

// 4.
function wrapSetTimeOut(callback) {
    console.log("I am a wrapSetTimeOut");
    setTimeout(() => {
        console.log("I am also set time out");
        callback("wrapSetTimeOut")
    }, 2000)
}
wrapSetTimeOut(funcToBeCalled);
// I am set time out
// I was called by: Set time out


