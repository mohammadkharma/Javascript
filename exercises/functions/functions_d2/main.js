// 1. XO
function XO(str) {

    let arr = str.split('');
    let x = [];
    let y = [];
    arr.forEach(e => {
        if (e == 'x' || e == 'X') {
            x.push(e);
        } else if (e == 'o' || e == 'O') {
            y.push(e);
        }
    });

    console.log(x.length == y.length);
}

XO('xoXO zpzp xO'); // true


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 2. Pie
function equalSlices(totalSlices, recipients, slicesEach) {
    console.log(totalSlices / recipients == slicesEach, 'The fairly split is : ' + totalSlices / recipients + ' for each');
};

equalSlices(12, 5, 3) // false 'The fairly split is : 2.4 for each'


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 3. Cubed
function sumOfCubes(arr) {

    let cube = 0;
    let result = 0;

    arr.forEach(e => {

        cube = e * e * e;
        result += cube;
    })

    console.log(result);
}

sumOfCubes([1, 5, 9]); // 855
sumOfCubes([6, 3, 5]); // 368


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 4. Amplify the Multiples of 4
function amplify(num) {

    let arr = [];
    arr[num - 1] = num;

    for (i = 0; i < arr.length; i++) {
        if (i % 4 == 0) {
            arr[i] = num * 10;
        } else {
            arr[i] = num;
        }
        num = num - 1;
    }

    arr.reverse();
    console.log(arr)
}

amplify(12); // [ 1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120 ]


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 5. Months
function monthName(num) {
    let months = ['', 'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(months[num - 1]);
}

monthName(10); // October


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 6. Even Number Generator
function evenNumbers(num) {

    let newArr = [];
    let arr = [];
    arr[num - 1] = num;

    for (i = 1; i < arr.length + 1; i++) {
        if (i % 2 == 0) {
            newArr.push(i);
        }
        num = num - 1;
    }

    console.log(newArr)
}

evenNumbers(13); // [ 2, 4, 6, 8, 10, 12 ]


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 7. Dictionary
function dictionary(letters, arr) {


    let filtered = arr.filter((item) => item.includes(letters));

    console.log(filtered);

}

dictionary('tri', ["Matrix", "triplet", "tries", "trip", "piano", "tree"]);
// [ 'Matrix', 'triplet', 'tries', 'trip' ]


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 8. is a four letter word
function isFourLetters(arr) {

    let filtered = arr.filter(item => item.length == 4);

    console.log(filtered);
}

isFourLetters(["Lemon", "Jazz", "Ball", "Movie"]); // [ 'Jazz', 'Ball' ]


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 9. Is it Symmetrical? 
function isSymmetrical(num) {

    let strNum = String(num)
        .split('')
        .reverse()
        .join('');

    if (Number(strNum) === num) console.log(true);
    else console.log(false);
}

isSymmetrical(4321); // false
isSymmetrical(4224); // true


// ------------------------------------------------------------------------------------------------------------------------------------ //


// 10. c4n y0u r34d th15?
function hackerSpeak(str) {

    let arr = str.split('');

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 'a') {
            arr[i] = '4';
        } else if (arr[i] == 'e') {
            arr[i] = '3';
        } else if (arr[i] == 'i') {
            arr[i] = '1';
        } else if (arr[i] == 'o') {
            arr[i] = '0';
        } else if (arr[i] == 's') {
            arr[i] = '5';
        }
    }

    let newStr = arr.join('');
    console.log(newStr);
}

hackerSpeak("javascript is cool"); // j4v45cr1pt 15 c00l


// ------------------------------------------------------------------------------------------------------------------------------------ //
