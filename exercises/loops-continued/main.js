// While Loops: Use do while loops to complete the tasks below
// ===========================================================

// 'While' loop:
// ------------

// 1. Run Along
let i = 0;
while (i < 15){
    console.log(i);
    i++;
}


// 2. City Names
let names = ['Berlin', 'Tokyo', 'Ibiza', 'Beirut'];
let text = "";
let e = 0;
while (e < names.length) {
    text += `${names[e]}, `;
    e++;
}

console.log(text); // Berlin, Tokyo, Ibiza, Beirut 


// 3. Odds and Evens
function evenOddTransform(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            arr[i] += 1;
        } else {
            arr[i] -= 1;
        }
        i++;
    }
    console.log(arr);
}

evenOddTransform([1, 2, 3, 4, 5]); // [ 0, 3, 2, 5, 4 ]


// --------------------------------------------------------------- //


// 'do while' loop:
// ----------------

// 1. sumOfNumbers
function sumOfNumbers(arr) {
    let sum = 0;
    let i = 0;

    do {
        sum += arr[i];
        i++;
    }
    while (i < arr.length);

    console.log(sum);
}

sumOfNumbers([1, 2, 3, 4, 5]) // 15


// 2. Add it up!
function first20() {
    let sum = 0;
    let i = 0;

    do {
        sum += i;
        i++;
    }
    while (i < 21);

    console.log(sum);
}

first20() // 210


// 3. Count Instances
function check(arr) {
    let i = 0;
    let inc = 0;
    let dec = 0;
    do {
        if (arr[i] === arr[i + 1] - 1) {
            inc += 1;
        } else if (arr[i] === arr[i + 1] + 1) {
            dec += 1;
        }
        i++;
    }
    while (i < arr.length - 1);

    if (inc == arr.length - 1) {
        console.log('increasing');
    } else if (dec == arr.length - 1) {
        console.log('decreasing');
    } else console.log('neither');
}

check([1, 2, 3, 4, 5]); // increasing
check([5, 4, 3, 2, 1]); // decreasing
check([1, 2, 1, 2, 3]); // neither
check([1, 1, 2, 1, 3]); // neither


// --------------------------------------------------------------- //


// 'forEach' loop:
// ----------------

// 1. Capitalize
function format(arr) {
    let newArr = [];
    arr.forEach(e => {
        newArr.push(e[0].toUpperCase() + e.slice(1));
    });

    console.log(newArr);
}


format(["matt", "sara", "lara"]); // [ 'Matt', 'Sara', 'Lara' ]


// 2. No Duplicates!
function setOfUnique(arr) {
    let newArr = [];
    let i = 0;
    do {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
        i++;
    }
    while (i < arr.length);

    console.log(newArr);
}

setOfUnique([1, 1, 2, 2, 2, 5, 5, 3, 3, 3]); // [ 1, 2, 5, 3 ]


// 3. Repeat it 
function repeatIt(str, num) {
    let arr = [];
    arr.length = num;
    let i = 0;
    while (i < arr.length) {
        arr[i] = str;
        i++;
    }
    console.log(arr);
}

repeatIt('YES', 3) // [ 'YES', 'YES', 'YES' ]


// --------------------------------------------------------------- //

// Bonuses:
// --------

// Find the Odd Ones Out
function findOdd(arr) {
    let counter;
    let newNum;

    if (arr.length == 1) {
        console.log(`"${arr[0]}" Occurred once.`)
    } else {

        for (let i = 0; i < arr.length; i++) {
            counter = 0;
            for (let x = 0; x < arr.length; x++) {
                if (arr[i] === arr[x]) {
                    counter++;
                    if (counter % 2 !== 0 && counter !== 1) {
                        newNum = arr[i];
                    }
                }
            }
        }

        console.log(`"${newNum}" Occurred an odd of ${counter} times`);
    } 
}

findOdd([-2, -2, 3, 3, -5, 7, -5, 7, 7]); // 7. Occurred an odd of 3 times
findOdd([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2]) // "2" Occurred an odd of 5 times 
findOdd([15]); // 15. Occurred once.


// Factors
function isFactorChain(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let a = Math.floor(arr[i + 1] / arr[i]);
        let b = arr[i + 1] / arr[i];
        if (a !== b) {
            counter += 1;
        }
    }

    if (counter === 0) console.log('true, the array is a factor chain');
    else console.log('false, the array is not a factor chain');
}

isFactorChain([1, 2, 4, 8, 16, 48]); // true, the array is a factor chain
isFactorChain([1, 1, 1, 1, 1, 1]); // true, the array is a factor chain
isFactorChain([2, 4, 6, 7, 12]); // false, the array is not a factor chain
isFactorChain([10, 1]); // false, the array is not a factor chain