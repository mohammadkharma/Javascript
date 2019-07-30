// MAP:

// e.g. 1
let array = [1, 2, 3, 4];
let squareArray = array.map(num => num ** 2);

console.log(squareArray);  //[ 1, 4, 9, 16 ]

// e.g. 2
let numbers = [4, 9, 16, 25];

function mapMethod() {
   return numbers.map(Math.sqrt);
}

console.log(mapMethod()); //[ 2, 3, 4, 5 ]
console.log(numbers);     //[ 4, 9, 16, 25 ]

// e.g. 3
let numArr = [1, 4, 9];
let doubles = numArr.map(function(num) {
   return num * 2;
});

console.log("doubles:", doubles);  //doubles: [ 2, 8, 18 ]
console.log("numArr:", numArr);    //numArr: [ 1, 4, 9 ]

// e.g. 4
// We use map to reformat object parameters in array
let newArray = [
    {
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    },
]

let reformattedArray = newArray.map(param => {
    let newObject = {};
    newObject["key" + param.key] = param.value;
    return newObject;
})

console.log(reformattedArray); // [ { key1: 10 }, { key2: 20 }, { key3: 30 } ]
console.log(newArray);
// [ { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 } ]

//-------------------------------------------------//

// FILTER:

// e.g. 1
let arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter(num => num % 2 === 0);

console.log(evenArr); // [ 2, 4 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// e.g. 2
let age = [32,44, 53, 12, 34];

function checkAdults(age) {
    return age >= 18;
}

console.log(age.filter(checkAdults)); // [ 32, 44, 53, 34 ]

// e.g. 3
let words = ["spray", "limit", "elite", "destruction", "present"];
const result = words.filter(word => word.length > 6);

console.log(result); // [ 'destruction', 'present' ]

//-------------------------------------------------//

// REDUCE:

// e.g. 1
let arr1 = [10, 20, 30, 40];
const sumReducerFunction = (accumulator, currentValue) => accumulator + currentValue; 
const sum = arr1.reduce(sumReducerFunction);

console.log(sum); // 100

// e.g. 2
let arr2 = [1, 2, 3, 4];
let result1 = arr2.reduce((sum, current) => sum + current, 10);

console.log(result1); // 20

// e. g. 3
const reducer = function(accumulator, currentValue, currentIndex, array) {
    console.log("acc", accumulator, "currVal", currentValue, "currentIndex", currentIndex, "array", array);
    return accumulator + currentValue;
}

arr2.reduce(reducer);
// acc 1 currVal 2 currentIndex 1 array [ 1, 2, 3, 4 ]
// acc 3 currVal 3 currentIndex 2 array [ 1, 2, 3, 4 ]
// acc 6 currVal 4 currentIndex 3 array [ 1, 2, 3, 4 ]

//-------------------------------------------------//

// SORT:

// e. g. 1
let months = ["March", "January", "april", "Dec", "April"];

months.sort();
console.log(months); // [ 'April', 'Dec', 'January', 'March', "april" ]

// e. g. 2
let arr3 = [1, 100000, 30, 21, 4];

arr3.sort();
console.log(arr3); // [ 1, 100000, 21, 30, 4 ]

// e.g. 3
let nums = [4, 2.5, -5, 3, 1];
nums.sort((a, b) => a - b);

console.log(nums); // [ -5, 1, 2.5, 3, 4 ]

nums.sort((a, b) => b - a);
console.log(nums); // [ 4, 3, 2.5, 1, -5 ]


// e.g, 4
let items = [
    { name : "Edward", age: 21},
    { name: "Sharpe", age: 37},
    { name: "And", age: 45},
    { name: "The", age: -12},
    { name: "Magnetic", age: 13},
    { name: "Zeros", age: 37},
 ]

 //sort by Value
 items.sort(function(a, b){
    return a.age - b.age;
 });

 console.log(items);
 // [ { name: 'The', age: -12 },
 //   { name: 'Magnetic', age: 13 },
 //   { name: 'Edward', age: 21 },
 //   { name: 'Sharpe', age: 37 },
 //   { name: 'Zeros', age: 37 },
 //   { name: 'And', age: 45 } ]
 
 //sort by name
 items.sort(function(a, b){
    let nameA = a.name.toLocaleUpperCase();  // ignore Upp and Low Case
    let nameB = b.name.toLocaleUpperCase();
 
    if(nameA < nameB) {
        return -1;
    }
    if(nameA > nameB) {
        return 1;
    }
 
    return 0
 });
 
 console.log(items);
 // [ { name: 'And', age: 45 },
 //   { name: 'Edward', age: 21 },
 //   { name: 'Magnetic', age: 13 },
 //   { name: 'Sharpe', age: 37 },
 //   { name: 'The', age: -12 },
 //   { name: 'Zeros', age: 37 } ]

 //-------------------------------------------------//

//  isArray
// it's used on check if the data type is an array
console.log(Array.isArray([])); // true