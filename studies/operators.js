// OPERATORS

// LOGICAL OPERATORS:
// "&&": double "and" signs compares two statements
// the print results will be true only if the two statements are true
let firstVar = 10;
let secondVar = 20;
console.log(firstVar > secondVar);//false
console.log(firstVar <= secondVar);//true
console.log((firstVar > secondVar) && (firstVar <= secondVar));//false + true = false

let firstNumber = 8;
let secondNumber = 4;
console.log(typeof firstNumber == typeof secondNumber);//true
console.log(firstNumber >= secondNumber);//true
console.log((typeof firstNumber == typeof secondNumber) && (firstNumber >= secondNumber));//true + true = true

// "||" the pipe tool check if there's ANY true statement in the console.
// only if all the statements are false, the print results will be false
let myPipe1 = 10;
let myPipe2 = 20;
let myPipe3 = 30;
let myPipe4 = 40;
console.log(myPipe1 == myPipe2);// false
console.log(myPipe1 < myPipe2);// true
console.log((myPipe1 == myPipe2) || (myPipe1 < myPipe2));// false + true = true
console.log((myPipe1 == myPipe2) || (myPipe1 > myPipe2));// false + false = false


// COMPARISON OPERATORS:
let firstNumber = 8;
let secondNumber = "8";
// "==" two equal tools compares the value
console.log(firstNumber == secondNumber); // true
// "===" three equal tools compares the value + type
console.log(firstNumber === secondNumber); // false

let firstVar = 8;
let secondVar = "8";
console.log(firstVar == secondVar); // true
// "!" explanation mark is defined as "not" and takes a place of one equal tool
// "!=" compares the value
// "!==" compares the value + type
console.log(firstVar != secondVar); //false

let firstVar1 = 8;
let secondVar1 = 10;
// ">" compares the firstVar if it's greater than the secondVar
console.log(firstVar1 > secondVar1); // false
// ">=" compares the firstVar if it's greater or equal to the secondVar
console.log(firstVar1 >= secondVar1); // false
// "<=" compares the firstVar if it's smaller or equal to the secondVar
console.log(firstVar1 <= secondVar1); // true


// TERNARY OPERATORS:
// Ternary operator is used to display the answer the way we want
let firstVar1 = 10;
let secondVar2 = 20;
/*  in this statement we are asking the console to display the first sentence if the answer is true 
and the second one if the answer is false */
let ternaryOp = (firstVar1 < secondVar2) ? "The answer is true" : "The answer is false";
console.log(ternaryOp);// The answer is true

// Increment and Decrement

let x = 10;

// ++x
console.log(x); // 10
console.log(++x); // 11 (++x add 1 to x and print out after saving it)
console.log(x++); // 11 (x++ add 1 to x without printing at the moment but with saving it)
console.log(x); // 12 (now it gives the new save value)

// --x
console.log(x); // 12
console.log(--x); // 11
console.log(x--); // 11
console.log(x); // 10

// e.g. 2
let y = 1;
while (y < 5) {
    console.log(++y);
} // 2, 3, 4, 5