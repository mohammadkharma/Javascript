console.log('-------------------- arrays methods --------------------');
//________________________________________________________________________//


// array methods:

// join() joins all the array element in a single string and separate them with a chosen character
let array = ['jordan', 'superman', 'batman'];
console.log(array); // [ 'jordan', 'superman', 'batman' ]
console.log(array.join(',')); // jordan,superman,batman
console.log(array.join(', ')); // jordan, superman, batman
console.log(array.join(' / ')); // jordan / superman / batman

//________________________________________________________________________//

// indexOf() find the index (position) of the chosen element
console.log(array.indexOf('batman')); // 2
console.log(array.indexOf('jordan')); // 0#

//________________________________________________________________________//

// concat() joins 2 arrays together
console.log(array.concat(['jacky', 'robin'])); // [ 'jordan', 'superman', 'batman', 'jacky', 'robin' ]
//________________________________________________________________________//

// push() pushes in a new element to the end of the _array
// push() returns the new length of the array
console.log(array.length); // 3
console.log(array.push('eliza')); // 4
// push() is a destructive method, it changes the original value of the array
console.log(array); // [ 'jordan', 'superman', 'batman', 'eliza' ]

//________________________________________________________________________//

// pop() takes out the last element from the end of the _array
// pop() returns the popped out element
console.log(array.pop('eliza')); // eliza
// pop() is a destructive method, it changes the original value of the array
console.log(array); // [ 'jordan', 'superman', 'batman' ]

//________________________________________________________________________//

// unshift() pushes in a new element to the beginning of the _array
// unshift() returns the new length of the array
console.log(array.length); // 2
console.log(array.unshift('jordan')); // 3
// unshift() is a destructive method, it changes the original value of the array
console.log(array); // [ 'jordan', 'superman', 'batman' ]

//________________________________________________________________________//

// shift() takes out the last element from the beginning of the _array
// shift() returns the taken out element
console.log(array.shift()); // jordan
// shift() is a destructive method, it changes the original value of the array
console.log(array); // [ 'superman', 'batman' ]

//________________________________________________________________________//

// includes() check if the array contains the chosen element
// includes() return a boolean (true / false)
console.log(array.includes('jordan')); // true
console.log(array.includes('mo')); // false

//________________________________________________________________________//

// forEach() loops over the elements of the array one by one
// forEach() parameters accept a callback function
let people = ['Jack', 'Simon', 'Micheal', 'Lorenz'];

// a callback without parameters executes the value according to the array length
people.forEach( () => console.log('hi')); // hi, hi, hi, hi

// the 1st parameter in the callback function refers to the elements (defined as string)
people.forEach( (name, index, arr) => console.log(name));
// Jack, Simon, Micheal, Lorenz

// the 2nd parameter in the callback function refers to the index of the element (defined as number)
people.forEach( (name, index, arr) => console.log(name, index));
// Jack 0, Simon 1, Micheal 2, Lorenz 3

// the 3rd parameter in the callback function return the complete array (defined as object)
people.forEach( (name, index, arr) => console.log(name, index, arr));
// Jack 0 (people), Simon 1 (people), Micheal 2 (people), Lorenz 3 (people)
