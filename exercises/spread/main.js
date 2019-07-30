// Spread Operator
// ---------------


console.log('--------------------- 1 ---------------------');

// #### 1. Combining Arrays 
// A* Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// B* Once again create two arrays. Add the items of one array to the beginning of the second array. 
// C* Create another array. Include another array as one of the elements.

// A
let euroCountries = ['Germany', 'France', 'Spain'];
let asianCountries = ['China', 'Thailand', 'Malaysia'];

euroCountries.push(...asianCountries);
console.log(euroCountries);

// B
let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

secondArr.unshift(...firstArr);
console.log(secondArr);

// C
let array1 = ["Basketball", null, 24, NaN];
let array2 = ['I am array2']

array1.push([...array2]);
console.log(array1);




console.log('--------------------- 2 ---------------------');

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 

let scores = [12, 45, 23, 65];
let scoresCopy = [...scores];

console.log(scoresCopy);




console.log('--------------------- 3 ---------------------');

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

let findLargest = arr => {
    console.log(Math.max(...arr));
};

findLargest([-1, 23, 76, 100]);




console.log('--------------------- 4 ---------------------');

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

let findSmallest = arr => {
    console.log(Math.min(...arr));
};

findSmallest([-1, 23, 76, 100]);




console.log('--------------------- 5 ---------------------');

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * Clone the person object.
// * Merge these two objects into one object: "employee". Use the spread operator to do so. Then change the values of the properties in the employee object.

const person = { name: "John" }
const job = { role: "Teacher" }

let employee = { ...person, ...job };
console.log(employee);

employee.name = 'Micheal';
employee.role = 'Bodyguard';

console.log(employee);




console.log('--------------------- 6 ---------------------');

// #### 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

let isWhole = (...num) => {

    let arr = [];
    arr.push(...num);

    let sum = 0;


    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let res = sum / arr.length;
    let str = String(res);

    if (str.includes('.')) console.log(false);
    else console.log(true);

}

isWhole(1, 2, 3, 4);




console.log('--------------------- 7 ---------------------');

// #### 7. Minimum Removals for Even Output 
// Create a function that takes 4 integers as an argument and returns the minimum number of removals to make the sum of all the elements even. 
// * Examples: 
// * minRemovals(1, 2, 3, 4) ➞ 0 removals
// * minRemovals(5, 7, 9, 11) ➞ 0 removals 
// * minRemovals(5, 7, 9, 12) ➞ 1 removal 

let checkRemovals = (...num) => {

    let arr = [];
    arr.push(...num);

    let newArr = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    if (newArr.length !== 1) console.log(`${newArr.length} removals`);
    else console.log(`${newArr.length} removal`);

}

checkRemovals(1, 4, 5, 7, 9);


console.log('--------------------- 8 ---------------------');

// #### 8. Quadratic Equation 
// Create a function to find only the positive determinant value of x in any quadratic equation ax^2 + bx + c. The function will take three arguments:

// * a as the coefficient of x^2 (x to the power of 2)
// * b as the coefficient of x
// * c as the constant term

// Once you have solved this problem, pass in an array as an argument which contains three elements - check if this method still outputs the correct result! 




console.log('--------------------- 9 ---------------------');

// #### 9. Spread Date
// Create an array which contains a year, a month and a date. Use spread to access the date of this array.

