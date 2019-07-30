// JavaScript Test: Advanced Topics
// =================================


// 1. >10
function isLarger(arr) {
    let newArr = arr.filter(item => item > 10);
    console.log(newArr)
}

isLarger([0, 5, 10, 15, 20, 25]); // [ 15, 20, 25 ]


// -------------------------------------------------------------------------- //

// 2. Validation
function isValid(num) {
    let str = String(num);
    let regex = /^[\d]{3}[2468]$/;
    let test = regex.test(str);
    let arr = str.split('');
    let counter1 = 0;
    let counter2 = 0;

    arr.forEach(e => {
        let n = Number(e);
        counter1 += n;
    });
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            counter2++;
        }
    }

    if (test && counter1 >= 5 && counter2 < 3) {
        console.log(true);
    } else if (!test) {
        console.log('false, the code should be 4 digits integers and last number should be even');
    } else if (counter1 < 5) {
        console.log('false, the pin code should add up to at least 5');
    } else if (counter2 === 3) {
        console.log('false, the pin code should have at least two different digits represented');
    }
}

isValid(1112); // true
isValid(11132); // false, the code should be 4 digits integers and last number should be even
isValid(1102); // false, the pin code should add up to at least 5
isValid(4444); // false, the pin code should have at least two different digits represented


// -------------------------------------------------------------------------- //

// 3. Class Blueprint
class DCI {
    constructor(duration, teacher, type, students) {
        this.duration = duration;
        this.teacher = teacher;
        this.type = type;
        this.students = students;
    }
    classroom() {
        console.log(this.students * 22, 'm²');
    }
    details() {
        console.log(`This is a ${this.duration} long ${this.type} taught by ${this.teacher}.There are ${this.students} students taking the course`);
    }
}

let storm = new DCI('year', 'Mariam', 'web development', '16');

storm.details(); // This is a year long web development taught by Mariam.There are 16 students taking the course



// -------------------------------------------------------------------------- //

// 4. Events
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
];

let newArr = events.sort((a, b) => {
    return b.turnout - a.turnout;
});

console.log(newArr);



// -------------------------------------------------------------------------- //

// 5. Return Squared Odds
function squareEven(arr) {

    let arr1 = arr.map(e => {
        return e * e;
    });

    let arr2 = arr1.filter(e => {
        return e % 2 === 0;
    });
    console.log(arr2);
}

squareEven([2, 3, 4, 5]); // [ 4, 16 ]



// -------------------------------------------------------------------------- //

// 6. 10,000
class Player {
    constructor(name) {
        this.name = name;
        this.dice = [1, 2, 3, 4, 5, 6];
        this.score = 0;
    }
    fire() {
        let item = this.dice[Math.floor(Math.random() * this.dice.length)];
        let mapped = this.dice.map(num => {
            return num * item;
        });

        this.score += mapped.reduce((a, b) => a + b);


        if (this.name === 'playerX' && this.score >= 10000) {
            console.log(`playerX: ${this.score}, playerY: ${playerY.score} - playerX wins!`);
        } else if (this.name === 'playerY' && this.score >= 10000) {
            console.log(`playerY: ${this.score}, playerX: ${playerX.score} - playerY wins!"`);
        } else console.log(`${this.name} fired, his score is ${this.score}`);
    }
}

let playerX = new Player('playerX');
let playerY = new Player('playerY');

playerX.fire();
playerX.fire();

playerY.fire();
playerY.fire();



// -------------------------------------------------------------------------- //

// 7. World Cup 
let now = new Date();
let since = new Date("2014-07-13");
let difference = now.getTime() - since.getTime();
let resultInDays = Math.round(difference / 86400000);
console.log(resultInDays);



// -------------------------------------------------------------------------- //

// 8. Working Hours
const hourTracking = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];

let arr = [];
hourTracking.forEach(e => {
    arr.push(e.end - e.start);
});
let result = arr.reduce((a, b) => a + b);
console.log(result); // 36



// -------------------------------------------------------------------------- //

// 9. Callback 
// Part one
function mapping(arr, callback) {
    let mapped = arr.map(e => {
        return callback(e);
    });
    console.log(arr, mapped);
}

const powerOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));

// Part two
const squareRoot = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val));



// -------------------------------------------------------------------------- //

// 10. 2D Array
let board = [[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]];

function printValues(arr) {
    for(i = 0; i < arr.length; i++) {
        for(x = 0; x < arr[i].length; x++) {
            console.log(arr[i][x]);
        }
    }
}

printValues(board);