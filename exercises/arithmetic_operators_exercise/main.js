// EXERCISE ONE:


let x = 10;
let y = 20;

// 1
console.log(x + y); // 30

// 2
console.log(x - y); // -10
console.log(y - x); // 10

// 3
console.log(x * y); // 200

// 4
console.log(x / y); // 0.5

// 5
let z = 10;;
console.log(x * y); // 200
console.log(200 / z); // 20
let resultOne = ((x * y) / z);
console.log(resultOne); // 20

// 6
let a = 15;
let b = 9;
console.log(15 % 9); // 6

// 7
let c = 20;
let resultTwo = ((a + b) * c);
console.log(resultTwo); // 480

// 8
a++;
console.log(a); // 16

// 9
b--;
console.log(b); // 8

// 10
let d = b - a;
console.log(d + c); // 12

// 11
console.log(resultOne % resultTwo); // 20







// EXERCISE TWO:


// Percent:

let per = ((17 / 30) * 100);
per = parseInt(per);
console.log(`${per}%`);


// Average:

// 1
let hours = ((8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 14);
console.log(hours); // 4.17

// 2
let firstFive = (75 + 70 + 85 + 90 + 100);
console.log(firstFive); // 420
let totalAverage = 85;
let sixthTest = totalAverage - firstFive;
console.log(sixthTest === -335); // true
console.log(`Score in the sixth test: ${sixthTest}`); // Score in the sixth test: -335

// 3
let degAverage = 80;
let firstEight = 78;
let neededAverage = degAverage - firstEight;
console.log(neededAverage === 2); // true
console.log(`James needs a minimum of ${neededAverage}% to get an 80% average`); // James needs a minimum of 2% to get an 80% average


// Consumer Formula:

let firstBill = (22.35 + (22.35 / 10));
console.log(firstBill); // 24.585
let secondBill = (26.67 + (26.67 / 15)); 
console.log(secondBill); // 28.448
let thirdBill = (35.92 + (35.92 / 20));
console.log(thirdBill); // 37.716
console.log(firstBill + secondBill + thirdBill); // 90.749


// Geometry Formulas:

// 1
let squarePerimeter = 4 * 4.75;
console.log(squarePerimeter); // 19

// 2
let trianglePerimeter = 5 + 6 + 7;
console.log(trianglePerimeter); // 18

// 3
let squareArea = 5 * 5;
console.log(squareArea); // 25

// 4
let triangleSide1 = 5;
let triangleSide2 = 6;
let triangleBase = 7;
let triangleHeight = 1.7;
let triangleArea = (triangleHeight * triangleBase) / 2;
console.log(triangleArea); // 5.95

// 5
let volumeCube = 9 * 9 * 9;
console.log(volumeCube); // 729


// Basic Word Problems:

// 1
let audienceTheater = 6465 / 15;
console.log(audienceTheater); // 431

// 2
let weekDays = 7;
let yearDays = 365;
let incomePerWeek = 500;
let incomePerDay = incomePerWeek / weekDays;
console.log(parseInt(incomePerDay));// 71
let incomePerYear = incomePerDay * yearDays;
console.log(parseInt(incomePerYear)); // 26071