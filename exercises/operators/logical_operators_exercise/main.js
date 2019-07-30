let a = true;
let b = false;

// 1
console.log((a) && (b));// false

// 2
console.log((a) || (b));// true

// 3
console.log(!(a) && (b));// false

// 4
let x = 5;
let y = 10;
let z = 15;

// 5
console.log((x > z) && (x > y));// false

// 6
console.log(x != y);// true

// 7
console.log((z < y) || (x != y));// true

// 8
console.log((x === z) || (x != y));// true

// 9
console.log((x >= 10) && (y <= 10));// false

// 10
console.log(((x * z) < (100)) || ((x * y) > (100)));// true

