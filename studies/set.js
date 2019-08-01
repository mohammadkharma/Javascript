// SET
//----

// sets are functions that accept an array as param only with unique elements and not a duplicate ones
// sets return an object from the array elements 
const setA = new Set();
console.log(setA); // Set {}

const setB = new Set([1, 2, 3, 4, 5]);
console.log(setB); // Set {1, 2, 3, 4, 5}

// to return an array instead of object using spread
const setC = [...new Set([1, 2, 3, 4, 5])];
console.log(setC); // [1, 2, 3, 4, 5]

// -------------------------------------------------------------- //

// sets has their own methods to add or delete element, or clear the set

const setD = new Set();
console.log(setD); // Set {}

// .add(): to add a new element
setD.add(2);
console.log(setD); // Set { 2 }
setD.add(3).add(5).add(1);
console.log(setD); // Set { 2, 3, 5, 1 }

// .delete(): to delete an element
setD.delete(2);
console.log(setD); // Set { 3, 5, 1 }

// .size: a property to check the length
console.log(setD.size); // 3

// .forEach(): sets are irritable
setD.forEach(e => console.log(e)); // 3, 5, 1

// .clear(): to clear the set
setD.clear();
console.log(setD); // Set {}

// -------------------------------------------------------------- //
