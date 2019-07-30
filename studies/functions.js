console.log('-------------------- hoisting --------------------');
//________________________________________________________________________//


// function deceleration: to declare a functions on it's own
// when a function is declared, it can be called anywhere in the code, even before the deceleration 

greet() // hello

function greet() {
    console.log('Hello');
}

greet(); // hello

// function expression: to give a function as a value to a variable
// expressions can be called only after the defining
const speak = function () {
    console.log('Good day!');
}

speak();

// TIP: expressions are better to use than the declarations that may lead to a miss match between the functions


//________________________________________________________________________//
console.log('-------------------- parameters --------------------');
//________________________________________________________________________//


// parameters are a values that are used inside the function block
// parameters are given to be called with the function
let guessWho = function (name) {
    console.log('he is: ', name);
}
guessWho('Sam'); // he is:  Sam

//-----------------------------//

// parameters can be any word and as many
let checkDate = function (day, moth, year) {
    console.log(`day: ${day} / moth: ${moth} / year: ${year}`);
}
checkDate(01, 'january', 2020) // day: 1 / moth: january / year: 2020

//-----------------------------//

// a parameter that has been not given when the function is called returns 'undefined' 
let theAge = function (number) {
    console.log(`the age is: ${number}`);
}
theAge() // the age is: undefined
theAge(30) // the age is: 30

//-----------------------------//

// parameters can be defined inside the brackets
// the value will output only if it's not given when calling the function
let theHobby = function (string = 'No Hobby') {
    console.log(`the hobby is: ${string}`);
}
theHobby(); // the hobby is: No Hobby
theHobby('basketball') // the hobby is: basketball


//________________________________________________________________________//
console.log('-------------------- return --------------------');
//________________________________________________________________________//


// a value that been assigned locally doesn't get stored outside the block
let calcArea = function (radius) {
    let area = 3.5 * radius ** 2;
    console.log(area);
}
calcArea(5); // 87.5
// console.log(area); // error 

//-----------------------------//

// 'return' is used when the value should be stored as global
let calcArea1 = function (radius) {
    let area = 3.5 * radius ** 2;
    return area;
}
calcArea1(5); // (nothing is printed out)
// to solve this: create a global variable and assign the function to it
let area1 = calcArea1(5);
console.log(area1); // 87.5

//-----------------------------//

// return can be used directly with storing it in a local variable the value
let calcArea2 = function (radius) {
    return 3.5 * radius ** 2;
}
let area2 = calcArea2(5);
console.log(area2); // 87.5

//________________________________________________________________________//

