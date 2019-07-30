let varOne = 10;
let varTwo = 10;

// Conditional Statements are used to apply something under a condition.

// 1- if statement:
// it works only if the print result is true
// here the statement "(varOne >= varTwo)" is true, therefor the console will apply the condition
if (varOne >= varTwo) {
    console.log("Hey!"); // print result: Hey!
    (12 > 2) ? console.log("The condition is true") : console.log("The condition is false");// print result: The condition is true
}

// here the statement "(varOne < varTwo)" is false, therefor the console will not apply the condition
if (varOne < varTwo) {
    console.log("Hey!"); // nothing will appear in the console because the answer is false  
}

// we can built a variables and conditional statements inside another conditional statement
if (varOne >= varTwo) {
    let 
    varThree = "1";
    if (varThree == true) {
        console.log("Hey is a string"); // print result: Hey is a string
    }
}

// 2- else statement:
// it is used for all other else options
// here we are saying: if (a==b) is something ELSE than true, print "Booleans are equal to strings"
let a = false;
let b = 'false';
if (a == b) {
    console.log('Booleans are not equal to strings'); 
} else {
    console.log('Booleans are equal to strings'); // Booleans are equal to strings
}

// 3- if-else statement:
// "if" and "else" can be used together for a second (or third or etc..) specific option
let age = 25;
if (age <15) {
    console.log('you are not allowed to enter');
} else if ((age >= 15 ) && (age < 25)) {
    console.log(`you are allowed`);
} else {
    console.log(`maybe next time`); // maybe next time
}


let time = 10;
if (time < 10) {
    console.log('Good Morning');   
} 
else if ((time >= 10) && (time < 20)) {
    console.log('good day'); // good day   
} 
else {
    console.log('good evening');
}