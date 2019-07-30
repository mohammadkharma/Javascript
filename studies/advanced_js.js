// REST PARAMETERS:

function sUUm(a, b) {
    return a + b;
}
console.log( sUUm (10, 10, 30, 37, 3, 5, 7, 23, 60));; // 110

function sUUmAll(...args) {
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

console.log(sUUmAll(1, 10)); // 11
console.log(sUUmAll(1, 10, 10)); // 21
console.log(sUUmAll(1, 10, 10, 10)); // 31

// ----------------------------------------------------- //

function showName(firstName,lastName, ...titles) {
    console.log(`${firstName} ${lastName}`); // Julious Caesar
    console.log(titles); // [ 'Consul', 'Imperator' ]
}

showName ("Julious", "Caesar");
showName ("Julious", "Caesar", "Consul", "Imperator")

// ----------------------------------------------------- //

//  ARGUMENT VARIABLE:
function shoWName () {
     console.log("Argument variable:", arguments.length);
     console.log(arguments[0]); // Hello
}

shoWName (); // Arguments Variables: 0
shoWName ("Hello", "World"); // Arguments Variables: 2

// ----------------------------------------------------- //

// SPREAD OPERATOR:

let myARR = [3, 4, 56, 74, 34, 75];
console.log( Math.max(myARR)); // NaN
console.log( Math.max(myARR[0], myARR[1], myARR[2], myARR[3], myARR[4], myARR[5])); // 75
console.log( Math.max(3, 4, 56, 74, 34, 75)); // 75
console.log( Math.max(...myARR)); // 75

// ----------------------------------------------------- //

let myARR1 = [3, 4, -56, 74, 34, 1132];
console.log( Math.max(...myARR, ...myARR1)); // 1132
console.log( Math.max(...myARR,23482734 , ...myARR1, 876)); // 23482734

// ----------------------------------------------------- //

let myARR2 = [2, 3, 4]
let myARR3 = [2, 3, 4, 5]
let mergedARR = [0, ...myARR2, ...myARR2];
console.log(mergedARR); // [ 0, 2, 3, 4, 2, 3, 4 ]

// ----------------------------------------------------- //

let spreadStr = "Hello";
console.log(...spreadStr); // H e l l o

// ----------------------------------------------------- //

function iAmAFunction(param1, param2, ...restParam) {
    console.log([...arguments]); // [ "Please", "Help", "Me", "I", "Am", "All", "Alone" ]
    console.log(restParam); // [ "Me", "I", "Am", "All", "Alone" ]
}
iAmAFunction("Please", "Help", "Me", "I", "Am", "All", "Alone");