// JS_Test: using functions
//-------------------------


console.log('---------------------- 1 ----------------------');


// 1
let checkIf = city => {
    let firstThreeChars = city.substring(0, 3).toLowerCase();
    if ((firstThreeChars === "new") || (firstThreeChars === "los")) {
        console.log(city);
    } else {
        console.log("The city name does not begin with los or new");
    }
}

checkIf("New York");

checkIf("Miami");


console.log('---------------------- 2 ----------------------');


// 2
let sumCalc = arr => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

sumCalc([23, 2, 6]);


console.log('---------------------- 3 ----------------------');


// 3
let merger = (first, last) => {
    let full = `${last}, ${first}`;
    console.log(full);
    console.log(typeof full);
}

merger("Micheal", "Jordan")


console.log('---------------------- 4 ----------------------');


// 4
let checkNumber = (number) => {
    if (number % 100 === 0) {
        console.log("True");
    } else {
        console.log("False");
    }
}

checkNumber(1000);


console.log('---------------------- 5 ----------------------');


// 5
let verbToNoun = array => {
    let newArray = [];
    array.forEach(verb => {
        newArray.push(`${verb}ing`);
    });
    console.log(newArray);
}

verbToNoun(["bend", "sharpen", "mean"]);


console.log('---------------------- 6 ----------------------');


// 6
let evenOrOdd = number => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    };
}

evenOrOdd(23);


console.log('---------------------- 7 ----------------------');


// 7
let missingAngleType = (firstAngle, secondAngle) => {
    let triangleArea = 180;
    let missingAngle = triangleArea - firstAngle - secondAngle;

    if (missingAngle < 90) {
        console.log(`The missing angle is ${missingAngle} and acute`);
    } else if (missingAngle === 90) {
        console.log(`The missing angle is ${missingAngle} and right`);
    } else if (missingAngle > 90 && missingAngle < 180) {
        console.log(`The missing angle is ${missingAngle} and obtuse`);
    }
}

missingAngleType(43, 22);


console.log('---------------------- 8 ----------------------');


// 8
let toUpper = sentence => {
    let sentenceArray = sentence.split(" ");
    let resultArray = [];

    for (i = 0; i < sentenceArray.length; i++) {
        let firstLetter = sentenceArray[i][0].toUpperCase();
        let restOfLetters = sentenceArray[i].substring(1, sentenceArray[i].length);
        let fullWord = firstLetter + restOfLetters;
        resultArray.push(fullWord);
    }

    sentence = resultArray.join(" ");
    console.log(sentence);
}

toUpper("this can be however long we want it to be");


console.log('---------------------- 9 ----------------------');


// 9
let wordsCount = str => {
    let strArr = str.split(' ');
    let res = strArr.length;
    console.log(res);
}

wordsCount("Fruits Studies Health Sweets Politics");


console.log('---------------------- 10 ----------------------');


// 10
let multiplier = array => {
    let newArray = [];
    array.forEach(element => {
        newArray.push(element * array.length)
    })
    console.log(newArray);
}

multiplier([2, 3, 10, 100])