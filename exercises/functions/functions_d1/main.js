// FUNCTIONS D1:

// Task 1 is in js_test folder

// Task 2:

// 1. Reverse
function reverser(number) {
    let str = String(number);
    let arr = str.split('');
    let rev = arr.reverse();
    let fin = rev.join('');
    console.log(fin);
};
reverser(12345);

// 2. Alphabetical Order:
function sorter(string) {
    let arr = string.split('');
    let sor = arr.sort();
    let fin = sor.join('');
    console.log(fin);
};
sorter("GADBHFCE");

// 3. The Greater Numbers:
function findGreatest(arr, num) {
    arr.forEach(e => {
        if (e > num) {
            console.log(e);
        }
    });
}

findGreatest([3, 4, 5], 4);

// 4
function dogAge(number) {
    let age = number * 7;
    console.log(`Your doggo is ${age} years old in human years!`);
}
dogAge(6);

// 5
const maxAge = 80;
function allNeeded(age, amount) {
    let restOfAge = maxAge - age;
    restOfAge *= 365;
    let res = restOfAge * amount
    console.log(`You will need ${Math.floor(res)} bars of chocolate (${amount} a day) to last you till the age of ${maxAge}. `);
};
allNeeded(55.8, 2.4);

// 6
function findLongest(string) {
    let arr = string.split(' ');
    let counter = 0;
    let theWord;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > counter) {
            counter = arr[i].length;
            theWord = arr[i];
        }
    }
    console.log(theWord);
};
findLongest("this is a web development course");

// 7
function vowelsCounter(string) {
    let counter = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] == 'i' ||
            string[x] == 'o' ||
            string[x] == 'a' ||
            string[x] == 'u' ||
            string[x] == 'e') {
            counter += 1;
        }
    }
    console.log(counter);
}
vowelsCounter("this is a web development course");

// 8
function theTypeOf(data) {
    console.log(`type of argument is ${typeof data}`);
};
theTypeOf(2);
theTypeOf("hello");

// 9
function findHowMuch(string, letter) {
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            counter += 1;
        }
    }
    console.log(counter);
}
findHowMuch("hello world, i love javascript", "o");

// 10
