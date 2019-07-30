let x = 20;
let y = 30;

// 1
console.log(x === y);// false

// 2
console.log(x !== y);// true

// 3
console.log(x > y);// false

// 4
console.log(x <= y);// true

// 5
console.log(x < y);// true

// 6
let z = 5;
console.log(z * x);// 100
console.log((z * y) > (z + y));// true

// 7
console.log(x - z);// 15
console.log((x - z) < (y / z));// false


// 8
z = 10;
x = 10;
y = 10;
console.log((z === x) && (z === y) && (x === y));// false

// 9
//console.log((x / z) === (y / z));// false

// 10
//console.log((z + x) > (y - z));// false
//console.log((z + x) >= (y - z));// true