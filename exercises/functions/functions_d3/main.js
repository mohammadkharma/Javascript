// 1. Add up
function amplify(num) {

    let count = 0;
    let arr = [];
    arr[num - 1] = num;

    for (i = 0; i < arr.length; i++) {
        arr[i] = num;
        count += arr[i];
        num = num - 1;
    }

    arr.reverse();
    console.log(count)
}

amplify(12); // 78


// ----------------------------------------------------------------------------------------- //


// 2. Less than or Equal to Zero?
function lessOrEqual(num) {

    if (num <= 0) console.log(true);
    else console.log(false);
}

lessOrEqual(4); // false
lessOrEqual(0); // true
lessOrEqual(-2); // true


// ----------------------------------------------------------------------------------------- //


// 3. Missing Number
function missingNums(arr) {

    let sortedArr = arr.sort(function (a, b) { return a - b });

    let newArr = [];
    let newIndex;

    sortedArr.filter((item, index) => {

        newIndex = index + 1;

        if (item !== newIndex) {
            newArr.push(newIndex);
        }

    })

    console.log(newArr[0]);
}

missingNums([1, 10, 2, 3, 4, 6, 7, 8, 9]); // 5
missingNums([9, 5, 1, 10, 2, 3, 4, 6, 7]); // 8


// ----------------------------------------------------------------------------------------- //


// 4. isPrime?
function isPrime(num) {
    if (num % 2 == 0 && num != 2 || num % 3 == 0 && num != 3) {
        console.log(false);
    } else {
        console.log(true);
    }
}

isPrime(29); // true
isPrime(8); // false


// ----------------------------------------------------------------------------------------- //


// 5. snake_case -> camelCase
function toCamelCase(str) {

    let arrStr = str.split('');

    arrStr.filter((item, index) => {
        if (item === '_') {
            arrStr.splice(index, 1)
            arrStr[index] = arrStr[index].toUpperCase();
        }
    });

    let result = arrStr.join('');
    console.log(result);
}

toCamelCase("hello_world_we_love_java"); // helloWorldWeLoveJava


// ----------------------------------------------------------------------------------------- //


// 6. One is not like the others...
function findUniqueNum(arr) {

    arr.sort();

    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            console.log(`The unique number is: ${arr[i]}`);
        }
    }
}

findUniqueNum([1, 1, 2, 3, 3, 4, 4]); //The unique number is: 2


// ----------------------------------------------------------------------------------------- //


// 7. Where's Waldo? 
function isWaldoHere(str) {

    if (str.includes('Waldo')) {
        console.log(true);
    } else {
        console.log(false);
    }

}

isWaldoHere("is there wal here ?"); // false
isWaldoHere("Oh Waldo! Here you are!"); // true


// ----------------------------------------------------------------------------------------- //


// 8. Validate
function validator(email) {
    let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    console.log('hi', regex.test(email));
}

validator('mohammad.kh.8688gmail.com') // true


// ----------------------------------------------------------------------------------------- //


// 9. Pig Latin Translation 
function pigLatin(str) {

    let arr = str.split(' ');
    let newArr = [];
    arr.forEach(e => {

        if (e[0] === 'a' ||
            e[0] === 'e' ||
            e[0] === 'i' ||
            e[0] === 'o' ||
            e[0] === 'u') {
            let str = 'way';
            let newE = e.concat(str);
            e = newE;
            newArr.push(e);
        } else {
            let arrWord = e.split('');
            let firstLetter = arrWord[0].toLowerCase();
            arrWord.shift(firstLetter);
            arrWord.push(`${firstLetter}ay`);
            let strWord = arrWord.join('');
            newArr.push(strWord);
        }
    });

    let newStr = newArr.join(' ');
    let lastStr = newStr.replace(newStr[0], newStr[0].toLocaleUpperCase());

    console.log(lastStr);
}

pigLatin("cats are great pets"); // Atscay areway reatgay etspay
pigLatin("I am proud of us"); // Iay amway roudpay ofway usway

// ----------------------------------------------------------------------------------------- //


// 10. X To The Power of X
function calculateExponent(base, exponent) {

    let result = Math.pow(base, exponent);
    console.log(result);

}

calculateExponent(5, 5); // 3125
calculateExponent(2, 6); // 64
calculateExponent(10, 10); // 10000000000


// ----------------------------------------------------------------------------------------- //
