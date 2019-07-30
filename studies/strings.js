console.log('-------------------- strings concatenation --------------------');
//________________________________________________________________________//


// string concatenation:

// to concatenate is to add or merge string together
let firstName = "King";
let lastName = "Superman";

let fullName = 'Mr.' + ' ' + firstName + ' ' + lastName;
console.log(fullName); // Mr. King Superman


//________________________________________________________________________//
console.log('-------------------- strings methods --------------------');
//________________________________________________________________________//


// string methods:

// toUpperCase() / toLowerCase()
console.log(fullName.toUpperCase()); // MR. KING SUPERMAN
console.log(fullName.toLowerCase()); // mr. king superman

//________________________________________________________________________//

// indexOf() find the index (position) of the chosen element
// indexOf() pick up the first appearance of the chosen element and and return it's index
console.log(fullName.indexOf('p')); // 11
console.log(fullName.indexOf('n')); // 6

//________________________________________________________________________//

// lastIndexOf() find the index of the last appearance of the chosen element
console.log(fullName.lastIndexOf('n')); // 16
console.log(fullName.lastIndexOf('r')); // 13

//________________________________________________________________________//

// slice() cut a chosen part of the string, it pick it up and throw away the rest
// slice() accept 2 arguments, at which index to start and at which index to end
console.log(fullName.slice(0, 7)); // Mr. Kin
console.log(fullName.slice(6, 14)); // ng Super

//________________________________________________________________________//

// substr() is almost the same as slice(), they differ in the arguments
// substr() cut a chosen part of the string, it pick it up and throw away the rest
// substr() accept 2 arguments, at which index to start and how many indexes to go on
console.log(fullName.substr(4, 6)); // King S
console.log(fullName.substr(11, 4)); // perm

//________________________________________________________________________//

// replace() replace a chosen element with a new one
// replace() accept 2 arguments, which element to change and what to change with
console.log(fullName.replace('Mr.', 'Mrs.')); // Mrs. King Superman
// indexOf() pick up the first appearance of the chosen element and ignore the rest
console.log(fullName.replace('n', 'W')); // Mrs. KiWg Superman

//________________________________________________________________________//

// includes() check if the string contains the chosen value
// includes() return a boolean (true / false)
console.log(fullName.includes('Sup')); // true
console.log(fullName.includes('man')); // true
console.log(fullName.includes('@')); // false


//________________________________________________________________________//
console.log('-----strings comparison-----');
//________________________________________________________________________//


// strings comparison:

// later alphabetic letters are great than earlier alphabetic letters
console.log('a' < 'z'); // true

// lower case is great than upper case
console.log('a' > 'A'); // true

//________________________________________________________________________//




