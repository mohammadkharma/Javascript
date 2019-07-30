// DATA TYPES:

// *Type of data:
// this is how we check the type of a data
console.log(typeof NaN); // number
console.log(typeof Infinity); // number

// 1- Strings:
// *Index value: The string characters counter
// a- The string characters are counted starting from 0
let myName2 = "ibrahim"; // <<< I(0)B(1)R(2)A(3)H(4)I(5)M(6) 
console.log(myName2[2]); // <<< This is how we can select a specific character inside the string. Here we are selecting the R 
// b- We can select index value from 2 different variables
let myName3 = "Kareem";
console.log(myName2[2], myName3[4]);
// c- This is how we check the length of the string (starting from #1)
console.log(myName2.length); // 7

// 2- Numbers:
// a- Index value for numbers:
let currentYear1 = 2019; // <<< Numbers as a value should be without quotes
console.log(currentYear1[2]); // <<< undefined results
console.log(currentYear1.length); // <<< undefined results
// to select an index value or a length from a number assignment, we should put it in quotes to make it as a string
let currentYear2 = "2019"; // <<< Now the number is as a string and it can be counted
console.log(currentYear2[2]); // 1
console.log(currentYear2.length); // 4
// b- Zeros shortcuts:
let myZero1 = 123400000000; // <<< This is a normal value that can be defined
console.log(myZero1); // 123400000000
let myZero2 = 1234e8; // <<< This is the same value, but with the shortcut: e + (the numbers of zeros).
console.log(myZero2); // 123400000000
let myZero3 = 1234e-8; // <<< In this case, the shortcut is negative, which means that we start counting digits from the right to the left according to the shortcut number (-8) and fill empty digits with zeros.
console.log(myZero3); // 0.00001234
let myZero4 = 1234e-2; // <<< Another negative shortcut example. 
console.log(myZero4); // 12.34
// c- Infinity numbers (positive or negative):
let newNum1 = 20;
// any number (except 0) multiplied by infinity is equal to infinity:
console.log(newNum1 * Infinity); //  infinity
let newNum2 = 30; 
// any number divided by infinity is equal to zero:
console.log(newNum2 / Infinity); // 0
// d- NaN: stands for "Not a Number". Anything that it's a number but it is not a number, it's a NaN

// 3- BOOLEAN:
// Boolean is 2 choices option verified by "True" or "False"
// e.g. checkbox=true or checkbox=false
let isDay = true;
console.log(isDay); // true
console.log(typeof isDay); // boolean
// this is how we check the Boolean of a variable:
console.log(Boolean(isDay)); // true
// *There are 6 falsy values:
// false / 0(zero) / ""(empty strings) / null / undefined / NaN (not a number)
// Everything other than this 6 values is true

// 4- Undefined:
let myFavColor; // <<< Any variable with declaration but without an assignment.

// 5- Null:
// Null is an empty or non-existent value and it must be assigned and it's a type is an object but it's not an object itself due to JS mistake
let myFavColor1 = null;

// 6- Object:
// Objects are defined with curly braces {} and it can have objects inside objects
let myObject = {
    key1: "value", // <<< The keys should be defined with double points ":" and not with "="
    key2: 1234,
    key3: {
        key31: {
            newObject: "hello",
        }
    },
}; // <<< The main curly braces should be closed with a semicolon, but its children should be closed with a comme
console.log(myObject.key1); // value
// this is how we reach an object:
console.log(myObject.key3.key31.newObject); // hello
console.log(typeof myObject); // object