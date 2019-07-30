// LOOPS

// 1. Addition
for (i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Bottles
for (i = 0; i < 5; i++) {
    if (i == 0) {
        console.log(`There's no bottles on the wall.`);
    } else if (i == 1) {
        console.log(`There's ${i} bottle on the wall.`);
    } else {
        console.log(`There's ${i} bottles on the wall`);
    };
}

// 3. The odd/even reporter
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    };
}

// 4. Multiplication Tables
for (i = 0; i <= 10; i++) {
    let result = i * 9;
    console.log(`${i} * 9 = ${result}`);
}

// 5. Grades
let marks = [90, 60, 77, 81, 65];
let sum = 0;
for (i = 0; i < marks.length; i++)
    sum += marks[i];
    let average = sum / marks.length;

    console.log(average); // 74.6

    if (average < 60) console.log(`The Grade is F`);
    else if (average < 70) console.log(`The Grade is D`);
    else if (average < 80) console.log(`The Grade is C`);
    else if (average < 90) console.log(`The Grade is B`);
    else if (average < 100) console.log(`The Grade is A`);

// 6 Fizz Buzz
for (i = 1; i < 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    };
}

// 7. Sum of Multiples
let total = 0;
for (i = 0; i <= 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        total = total + i;
         };
}
console.log(total); // 234168

// 8
let arrNames = ["Sam", "Ev", "Mo", "Bagwan"];
for (i = 0; i < arrNames.length; i++) {
    let name = arrNames[i];
    console.log(`Hello ${name}`);
};

// 9
for (i = 100; i <= 1000; i += 100) {
    console.log(i);
};

for (i = 1; i <= 128; i *= 2) {
    console.log(i);
};

for (i = 0; i <= 10; i += 2) {
    console.log(i);
};

for (i = 3; i <= 15; i += 3) {
    console.log(i);
};

for (i = 9; i >= 0; i--) {
    console.log(i);
};

// 10
let word = 'sweet';
let isPalindrome = word.split('').reverse().join('');
console.log(isPalindrome); // teews
if (word === isPalindrome) console.log('It is Palindrome');
else console.log('It is not Palindrome'); // It is not Palindrome

let word1 = 'tarrattarrat';
let isPalindrome1 = word1.split('').reverse().join('');
console.log(isPalindrome1); // tarrattarrat
if (word1 === isPalindrome1) console.log('It is Palindrome');
else console.log('It is not Palindrome'); // It is Palindrome



