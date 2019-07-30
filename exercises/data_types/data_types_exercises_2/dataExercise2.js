// 1
let length = 16.78; // number
let lastName = "Johnson"; // string
let car = ""; // string
let isOpen = true; // Boolean
console.log(length);
console.log(typeof length);
console.log(lastName);
console.log(typeof lastName);
console.log(car);
console.log(typeof car);
console.log(isOpen);
console.log(typeof isOpen);

// 2
let ageMark="30";
let ageJohn=40;
console.log(typeof ageMark); // string
console.log(typeof ageJohn); // number

// 3
let isJohnOlder=true;
console.log("John is older than Mark:" + " " + isJohnOlder);

// 4
let x
console.log(x); // undefined

// 5
let x1="hello";
console.log(x1); // hello

// 6
console.log(x1[4]); // O

// 7
console.log(x1.length); // 5
console.log(typeof x1.length); // number

// 8
let a=1;
let b=1;
let c=3;
console.log(a == b); // true
console.log(typeof (a == b)); // boolean
console.log(a == c); // false
console.log(typeof (a == c)); // boolean
console.log(c == b); // false
console.log(typeof (c == b)); // boolean

// 9
// type of infinity is number
console.log(typeof Infinity); // number

// 10
// with string value
let myDec="value";
console.log(isNaN(myDec)); // true
console.log("variable is NOT a number:" + " " + isNaN(myDec)); // variable is NOT a number: true
// with a number value
let myDec1=20;
console.log(isNaN(myDec1)); // false
console.log("variable is NOT a number:" + " " + isNaN(myDec1)); // variable is NOT a number: false

// 11
console.log(typeof (isNaN(myDec))); // boolean
console.log(typeof (isNaN(myDec1))); // boolean