// JS Test:
//---------


console.log('---------------------- 1 ----------------------');


// 1
let cities = ['Los Angeles', 'Chicago', 'Miami', 'New York', 'Michigan',];

for (i = 0; i < cities.length; i++) {
    if (cities[i][0] + cities[i][1] + cities[i][2] === 'Los' ||
        cities[i][0] + cities[i][1] + cities[i][2] === 'New') {
        console.log(cities[i]);
    } else {
        console.log('The city name does not begin with Los or New');
    }
}


console.log('---------------------- 2 ----------------------');


// 2
let arrOfNumbers = [23, 2, 6];
let sum = 0;

for (i = 0; i < arrOfNumbers.length; i++) {
    sum += arrOfNumbers[i];
}

console.log(sum);


console.log('---------------------- 3 ----------------------');


// 3
let firstName = 'Micheal';
let lastName = 'Jordan';

let fullName = `${lastName}, ${firstName}`;

console.log(fullName);


console.log('---------------------- 4 ----------------------');


// 4
let arrOfNumbers2 = [23, 100, 99, 1000];

for (i = 0; i < arrOfNumbers2.length; i++) {
    console.log(arrOfNumbers2[i] % 100 === 0);
}


console.log('---------------------- 5 ----------------------');


// 5
let verb = ["bend", "sharpen", "mean"];
let noun = [];

for (i = 0; i < verb.length; i++) {
    noun.push(verb[i] + "ing");
}

console.log(noun);


console.log('---------------------- 6 ----------------------');


// 6
let number = 20;
if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}


console.log('---------------------- 7 ----------------------');


// 7
let firstAngle = 42;
let secondAngle = 19;
let triangleArea = 180;
let missingAngle = triangleArea - firstAngle - secondAngle;

if (missingAngle < 90) {
    console.log(`The missing angle is ${missingAngle} and acute`);
} else if (missingAngle === 90) {
    console.log(`The missing angle is ${missingAngle} and right`);
} else if (missingAngle > 90 && missingAngle < 180) {
    console.log(`The missing angle is ${missingAngle} and obtuse`);
}


console.log('---------------------- 8 ----------------------');


// 8
let sentence = "life is beautiful";
let sentenceArray = sentence.split(' ');
let resultArry = [];

for (i = 0; i < sentenceArray.length; i++) {
    let firstLetter = sentenceArray[i][0].toUpperCase();
    let restOfLetters = sentenceArray[i].slice(1, sentenceArray[i].length);
    let fullWord = firstLetter + restOfLetters;
    resultArry.push(fullWord);
}

let newSentence = resultArry.join(' ');

console.log(newSentence);


console.log('---------------------- 9 ----------------------');


// 9
let words = "Fruits Studies Health Sweets Politics";
let wordsArray = words.split(' ');
let result = wordsArray.length;

console.log(result);


console.log('---------------------- 10 ----------------------');


// 10
let arr1 = [2, 5, 3, 7];
let arr2 = [];

for (i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * arr1.length)
}

console.log(arr2);
