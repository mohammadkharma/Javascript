// CONDITIONALS:

// Exercise One:

// 1
let a = 57;
let b = 75;

if (a > 54 && a < 100) {
    console.log("True");
} else if (b >= 55 && b <= 99)  {
    console.log("True");
}; // True

// 2
let c = 23;

if (a > 54 && a < 100)  {
    console.log("True");
} else if (b > 54 && b < 100) {
console.log("True");
} else if (c > 54 && c < 100)  {
console.log("True");
}; // True

// 3
if ((a > b) && (a > c)) {
    console.log(`a is the greates: ${a}`);
} else if ((c > a) && (c > b)) {
    console.log(`c is the greates: ${c}`);
} else if ((b > a) && (b > c)) {
    console.log(`b is the greates: ${b}`);
}; // b is the greatest: 75

// after changing the values:
a = 70;
b = 50;
c = 111;

if ((a > b) && (a > c)) {
    console.log(`a is the greates: ${a}`);
} else if ((c > a) && (c > b)) {
    console.log(`c is the greates: ${c}`);
} else if ((b > a) && (b > c)) {
    console.log(`b is the greates: ${b}`);
}; // c is the greatest: 111

// 4
let str = "Pyramids";
if ((str[0] == "P") && (str[1] == "y")) {
    console.log(str);
}; // Pyramids

// 5
let sum = 40 + 20;
if ((sum > 50) && (sum < 80)) {
    console.log("65");
}; // 65

// 6
let newNum1 = 15;
let newNum2 = 23;

if (newNum1 + newNum2 == 8) {
    console.log("True");
} else if (newNum2 - newNum1 == 8) {
    console.log("True");
}; // True

// 7
if (newNum1 == 15) {
    console.log("True");
} else if (newNum2 == 15) {
    console.log("True");
} else if (newNum1 + newNum2 == 15) {
    console.log("True");
}; // True

// 8
let newNum3 = 14;

if (newNum2 == (7 * 2) || (11 * 2)) {
    console.log("True");
} else if (newNum3 == (7 * 2) || (11 * 2)) {
    console.log("True");
}; // True

// 9
let newNum4 = 2;
let newNum5 = 2;
let sum1 = newNum4 + newNum5;

if (newNum4 == newNum5) {
    console.log(sum1 * 3);
}; // 12

// 10
let newNum6 = 19;
let newNum7 = 21;

if (newNum7 > newNum6) {
    console.log((newNum6 - newNum7) * 2);
}; // -4



// Exercise Two:

// 1
let firstName = "Mo";
let age = 31;

if (age < 13) {
    console.log(`${firstName} is a boy`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a yong man`);
} else {
    console.log(`${firstName} is a man`);
}; // Mo is a man

// 2
let firstName2 = "Maria";
let job = "Teacher";

if (job === "Teacher") {
    console.log(`${firstName2} is a ${job}`);
} else if (job === "Designer") {
    console.log(`${firstName2} is a Designer`);
} else if (job === "Programmer") {
    console.log(`${firstName2} is a Programmer`);
} else if (job === "Doctor") {
    console.log(`${firstName2} is a Doctor`);
} else {
    console.log(`${firstName2} is another job`);
}; // Maria is a Teacher

// 3
let newNum8 = 18;

if (newNum8 % 3 === 0) {
    console.log("Fizz");
} else if (newNum8 % 5 === 0) {
    console.log("Buzz");
} else if ((newNum8 % 3 === 0) && (newNum8 % 5 === 0)) {
    console.log("FizzBuzz");
} else {
    console.log(newNum8);
}; // Fizz

// 4
let temperature = 12;
let weather = "Cloudy";

if ((temperature > 15) && (weather === 'Sunny')) {
    console.log(`It is ${temperature} degrees outside and ${weather}`)
} else if ((temperature < 15) && (weather === 'Cloudy')) {
    console.log(`It is ${temperature} degrees outside and ${weather}`)
} else  {
    console.log(`Sorry no weather news for today`);
}; // It is 12 degrees outside and Cloudy

// 5
let studentMarks = 90 + 64 + 75 + 83 + 80 + 55;
let marksAverage = studentMarks / 6;

if (marksAverage > 90) {
    console.log("A+");
} else if ((marksAverage > 80) && (marksAverage <= 90)) {
    console.log("A");
} else if ((marksAverage > 70) && (marksAverage <= 80)) {
    console.log("B+");
} else if ((marksAverage > 60) && (marksAverage <= 70)) {
    console.log("B");
} else if ((marksAverage > 50) && (marksAverage <= 60)) {
    console.log("C+");
} else if ((marksAverage > 40) && (marksAverage <= 50)) {
    console.log("C");
} else if ((marksAverage > 30) && (marksAverage <= 40)) {
    console.log("D");
} else if (marksAverage <= 30) {
    console.log("F");
}; // B+
