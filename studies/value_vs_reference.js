// VALUE VS REFERENCE
// ------------------------------------------------//

// Some Data Types are Primitives like numbers
// Primitive Data Types have a `Clones` values in the background
// Clones are the values that doesn't change or get affected by another related variables
// Objects are Not-Primitive Data Types, they have a `References` value in the background
// References are the values that change or get affected by another related variables

let myVal = 10;

function add10 (val) {
    return val + 10;
}

console.log(add10(myVal)); // 20

// ------------------------------------------------//

// Numbers: are always passed by `value/clone`

let germany = 0;
let southKorea = germany;

germany += 1;
southKorea += 2;

console.log(germany, southKorea); // 1 2

// ------------------------------------------------//

// String: are always passed by `value/clone`

let cheer = "Ole";
let boo = cheer;

cheer = "Goal!!!!";
boo = "kwqjksad";

console.log(cheer, boo); // Goal!!!! kwqjksad

// ------------------------------------------------//

// Booleans: are always passed by `value/clone`

let win = true;
let lose = win;

win = !win;

console.log(win); // false
console.log(lose); // true

// ------------------------------------------------//

// Objects: are always References

let score2018 = [[0, 1], [2, 1]];
let score2022 = score2018;

// both arrays will be affected when they are references to each other
score2018.push([3, 1]);
score2020.push([10, 10]);
console.log(score2018); // [ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 10, 10 ] ]
console.log(score2022); // [ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 10, 10 ] ]

let player = {
    name: "Ronaldo",
    totalGoals: "650",
}

// e.g. 2
let playerClone = player;
playerClone.totalGoals = 6;
console.log(player); // { name: 'Ronaldo', totalGoals: 6 }
console.log(playerClone); // { name: 'Ronaldo', totalGoals: 6 }

// Objects have identities (they are never equal even if they have the same value and type)
let num1 = [1, 2, 3];
let num2 = [1, 2, 3];
console.log(num1 === num2); // false

// Primitives do not have identities
let primitive1 = 10;
let primitive2 = 10;
console.log(primitive1 === primitive2); // true
 
// ------------------------------------------------//

// Shallow Clones

const players = ["Ronaldo", "Messi", "Naymar"];

// 1. Clone an array with a `for loop`:
function cloneArrayFor (arr) {
    let newArr = [];

    for(i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

// 2. Clone an array with `for each`:
function cloneArrayForEach (arr) {
    let newArr = [];

    arr.forEach(item => newArr.push(item));

    return newArr;
}

// 3. Clone an array with `Array.slice`:
function cloneArraySlice (arr) {
    let newArr = arr.slice(0);

    return newArr;
}

// 4. Clone an array with `Array.from`:
function cloneArrayFrom (arr) {
    let newArr = Array.from(arr);

    return newArr;
}


// 5. Clone an array with `... spread operator`:
function cloneArraySpread (arr) {
    let newArr = [...arr];

    return newArr;
}

const players2 = cloneArraySpread(players);
players[0] = "Roben";
console.log(players); // [ 'Roben', 'Messi', 'Naymar' ]
console.log(players2); // [ 'Ronaldo', 'Messi', 'Naymar' ]

// ------------------------------------------------//

// Cloning Objects literals

const ball = {
    weight: "400gm",
    diameter: "15cm",
}

const ball2 = {
    ...ball
}

ball2.weight = "500gm";

console.log(ball); // { weight: '400gm', diameter: '15cm' }
console.log(ball2); // { weight: '500gm', diameter: '15cm' }