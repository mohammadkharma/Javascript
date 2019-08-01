// Symbol()
// --------

// symbols are always unique, even if they look identical they still has a unique IDs
const symbolA = Symbol();
console.log(typeof symbolA); // symbol
const symbolB = Symbol();
console.log(symbolA, symbolB); // Symbol() Symbol()

// symbols with same value
const symbolC = Symbol('a generic name');
const symbolD = Symbol('a generic name');
console.log(symbolC, symbolD); // Symbol(a generic name) Symbol(a generic name)
console.log(symbolC == symbolD); // false

// using symbols in objects
// objects doesn't accept duplicate keys
// this example shows that symbols are always identical
const person = {};
person.age = 30;
person.job = 'coach';
person[symbolC] = 'rio';
person[symbolD] = 'mike';
console.log(person); 
// { age: 30, job: 'coach', [Symbol(a generic name)]: 'rio', [Symbol(a generic name)]: 'mike' }

// -------------------------------------------------------------------------------------------- //