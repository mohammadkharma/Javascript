// SPREAD:
//---------

// (...spread) on arrays:

// (...spread) spread out the items of the array into individual components
const sports = ["soccer", "tennis", "basketball"];
console.log(...sports) // soccer swimming basketball

// we can concat arrays using spread
const sports2 = ["baseball", "football", ...sports];
console.log(sports2); // [ 'baseball', 'football', 'soccer', 'tennis', 'basketball' ]

// (...spread) on objects:

const personA = { name: "rio", age: "29", job: "teacher" };

// declaring a new variable and setting it equal to another object, creates a pointer to
// the object but not a copy from it (since objects are reference), for example:
const personB = personA;

// using spread make a complete new copy of the object
const personC = {...personA};
console.log(personC);// { name: 'rio', age: '29', job: 'teacher' }

// ----------------------------------------------------------------------- //

// REST
//-----

// (...rest) is the opposite of (...spread) and it#s used only for parameters
// (...rest) gather all the parameters and put them in one array
// in the example bellow, the param (---nums) is same as (num1, num2, num3, num4, etc)
function myFunction(...nums) {
    console.log('nums', nums); // nums [ 1, 2, 4, 5, 6, 7 ]
    // using map on the returned array
    const mapped = nums.map(num => num*2);
    console.log('mapped', mapped) // mapped [ 2, 4, 8, 10, 12, 14 ]
}   

myFunction(1, 2, 4, 5, 6, 7);

// ----------------------------------------------------------------------- //
