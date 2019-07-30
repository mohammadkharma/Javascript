// Arrays are a type of Object data
// "[]" square brackets are used to declare an array
let fruits = [];
console.log(typeof fruits); // object

// all kind of elements can be nested inside an array
fruits = ["Apple", "Orange", 123, true, false, -7898768, undefined, null];
console.log(fruits); // [ "Apple", "Orange", 123, true, false, -7898768, undefined, null ]
console.log(fruits[0]); // Apple 
console.log(fruits.length); // 8
// TIP: we can call an element from the end of an array and counting backward:
console.log(fruits[fruits.length -1]); // null
console.log(fruits[fruits.length -3]); // -7898768

// we can convert the assignment of an array to a string
let arrayToString = (fruits.toString());
// here the "undefined" & "null" elements won't be read because they are not a string
console.log(arrayToString); // Apple,Orange,123,true,false,-7898768,,
console.log(typeof arrayToString); // string
// after converting to string, the index will be counted as letters
console.log(arrayToString[4]); // e

// we can sort the elements of an array
// it sort the number from smallest to greatest and words alphabetically
let arrayNumber = [1, 2, 354, true, 6645, false, "washing", 8.6, null, 9.0, -3873462]
console.log(arrayNumber.sort()); // [ -3873462, 1, 2, 354, 6645, 8.6, 9, false, null, true, 'washing' ]

// to reverse the elements:
console.log(arrayNumber.reverse()); // [ 'washing', true, null, false, 9, 8.6, 6645, 354, 2, 1, -3873462 ]

// to push an extra element inside an array:
fruits.push("Grapes");
console.log(fruits); // [ 'Apple', 'Orange', 123, true, false, -7898768, undefined, null, 'Grapes' ]

// to pull the last element out from an array:
fruits.pop();
console.log(fruits); // [ 'Apple', 'Orange', 123, true, false, -7898768, undefined, null ]

// to join (separate) the elements with a specific thing in the print:
let newArray = fruits.join("/");
console.log(newArray); // Apple/Orange/123/true/false/-7898768//
newArray = fruits.join("~");
console.log(newArray); // Apple-Orange-123-true-false--7898768--

// to replace an element with another one we use the index
console.log(fruits[0]); // Apple
fruits[0] = "Cherry";
console.log(fruits); // [ 'Cherry', 'Orange', 123, true, false, -7898768, undefined, null ]
console.log(fruits[0]); // Cherry
console.log(fruits[2]); // 123
fruits[2] = 456;
console.log(fruits[2]); // 456

/* if we set a new item and skipped the last element of the array, 
the skipped number will be displayed as an "empty item". we should AVOID this.   */
fruits[11] = "Banana";
console.log(fruits); // [ 'Cherry', 'Orange', 456, true, false, -7898768, undefined, null, <1 empty item>, <2 empty item>, <3 empty item>, 'Banana' ]


