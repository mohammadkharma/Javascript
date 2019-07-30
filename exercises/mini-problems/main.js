// Mini Problems
// =============


// 1. Hitting the Jackpot 
function testJackpot(arr) {

    let counter = 0;

    arr.forEach(e => {
        if (arr.indexOf(e) === arr.lastIndexOf(e)) {
            counter += 1;
        }
    });

    if (counter > 0) console.log(false)
    else console.log(true);
}

testJackpot(["B", "B", "B", "B"]); // true
testJackpot(["B", "b", "B", "B"]); // false
testJackpot([1, 1, 1, 0]); // false


//------------------------------------------------------------------------------ //


// 2. Sudoku
function isMiniSudoku(arr) {

    let newArr = [];
    arr.forEach(e => {
        e.forEach(i => {
            newArr.push(i);
        });
    });

    let counter = 0;

    newArr.forEach((e, index) => {
        if (newArr.indexOf(e) !== newArr.lastIndexOf(e) && index == newArr.indexOf(e)) {
            counter += 1;
            console.log(`false, the number ${e} is repeated`);
        } else if (e < 1 || e > 9) {
            counter += 1;
            console.log(`The number ${e} is out of range`);
        }
    });
    if (counter == 0) console.log(true);
}

isMiniSudoku([[1, 3, 2], [7, 9, 8], [4, 5, 6]]); // true
isMiniSudoku([[1, 1, 2], [7, 9, 8], [4, 5, 6]]); // false, the number 1 is repeated


//------------------------------------------------------------------------------ //


// 3. Uno
function canPlay(arr, str) {
    let arrStr = str.split(' ');
    let color = arrStr[0];
    let number = arrStr[1];
    let counter = 0;
    arr.forEach(e => {
        if (e.includes(color) || e.includes(number)) {
            counter += 1;
        }
    });

    if (counter == 0) console.log(false);
    else (console.log(true));
}

canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1"); // true
canPlay(["yellow 3", "yellow 7"], "blue 7"); // true
canPlay(["yellow 3", "yellow 7"], "red 8") // false


//------------------------------------------------------------------------------ //


// 4. Checkerboard
function isCheckerboard(arr) {
    let counter = 0;
    
    arr.forEach(e => {
        for(i = 0; i < e.length; i++) {
            if(e[i] == e[i + 1]) {
                counter += 1;
            }
        }
    });

    if(counter > 0) console.log(false);
    else console.log(true)
}

isCheckerboard([
    [1, 1],
    [0, 1]
  ]); // false

  isCheckerboard([
    [0, 1],
    [1, 0]
  ]); // true


//------------------------------------------------------------------------------ //


// 5. Highest Pair
function highestPair(arr) {
    let newArr = [];
    arr.forEach(e => {
        if(arr.indexOf(e) !== arr.lastIndexOf(e)) {
            newArr.push(e);
        }
    });
    newArr.sort((a, b) => {
        return b - a;
    });

    if(newArr.length) console.log(`true, ${newArr[0]}`);
    else (console.log(false));
}

highestPair(["A", "A", "Q", "Q", "6" ]) // true, A
highestPair(["J", "6", "3", "10", "8"]) // false
highestPair(["K", "7", "3", "9", "3"]) // true, 3
highestPair(["K", "9", "10", "J", "Q"]) // false
highestPair(["3", "5", "5", "5", "5"]) // true, 5