// Math Object & Date Object JavaScript
// -------------------------------------

// ## Using Math Object & Date Object in JavaScript! Print your answers to the console. 
// ------------------------------------------------------------------------------------


console.log('---------------------- Math Object ----------------------');

// ### Math Object	
// ---------------

console.log('---------------------- 1 ----------------------');

// #### 1. Random Number
// Create a function to return a random integer. 

let random = num => {
    let random = Math.random();
    console.log(Math.round(random * 100));
}

random(); 
random(); 




console.log('---------------------- 2 ----------------------');

// #### 2. Lowest Number
// Create a function that takes an array as an argument and returns the number with the lowest value. 

let findSmallest = arr => {
    console.log(Math.min(...arr));
};

findSmallest([-1, 23, 76, 100]); // -1




console.log('---------------------- 3 ----------------------');

// #### 3. The Power Of
// Create a function that takes two numbers as arguments. Return the value of the first number to the power of the second number. 

let powerOf = (num1, num2) => {
    console.log(Math.pow(num1, num2));
}

powerOf(2, 3) // 8
powerOf(3, 2) // 9




console.log('---------------------- 4 ----------------------');

// #### 4. Highest Number
// Create a function that takes an array as an argument and returns the highest number in that array. 

let findLargest = arr => {
    console.log(Math.max(...arr));
};

findLargest([-1, 23, 76, 100]); // 100




console.log('---------------------- 5 ----------------------');

// #### 5. Pi
// Create a function that given a number n, returns PI to n decimal places.
// Examples:
// * myPi(5) ➞ 3.14159 //5 decimal places
// * myPi(4) ➞ 3.1416 //4 decimal places
// * myPi(15) ➞ 3.141592653589793 // 15 decimal places

let piDecimals = n => {
    console.log(Math.PI.toFixed(n));
}

piDecimals(2); // 3.14
piDecimals(5); // 3.14159



console.log('---------------------- Bonus ----------------------');

// **Bonus** 
// #### Random Name 
// Create a function for our webdev class 13a that returns a random student's name. 
function pickRandom(){
    let arr = ['Mo', 'Hamada', 'Timo', 'Ramez', 'Alicio', 'Laurine', 'Yasmine'];
        let item = arr[Math.floor(Math.random() * arr.length)];
        console.log(item);
}

pickRandom();



console.log('---------------------- Date Object ----------------------');

// ### Date Object
// ---------------

console.log('---------------------- 1 ----------------------');

// #### 1. What day is it? 
// Create a function to to display the current date and time in the following format: Today is Wednesday. The current time is 1PM : 34 : 59. 
function theDate() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = date.getHours();

    if (hours > 12) {
        hours = `${date.getHours()}-PM`;
    } else {
        hours = `${date.getHours()}-AM`;
    }

    console.log(`Today is ${days[date.getDay()]}. The current time is ${hours} : ${date.getMinutes()} : ${date.getSeconds()}`)
}

theDate();


console.log('---------------------- 2 ----------------------');

// #### 2. Date Formats
// Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy.

let inFormat = () => {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    console.log(`${day}-${month}-${year}`);
    console.log(`${day}/${month}/${year}`);

}

inFormat();


console.log('---------------------- 3 ----------------------');

// #### 3. Is New Year's day a Sunday?
// Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050.
function isSunday(year) {

    if (year < 2014 || year > 2050) {
        console.log('Only between years 2014 and 2050!');
    } else {
        let date = new Date(`${year}-01-01`);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[date.getDay()];

        if (day == 'Sunday') {
            console.log(`True, the first day in ${year} will be Sunday`);
        } else {
            console.log(`False, the first in ${year} will be ${day}`);
        }
    }
}

isSunday(2020); // False, the first in 2020 will be Wednesday
isSunday(2040); // True, the first day in 2040 will be Sunday



console.log('---------------------- 4 ----------------------');

// #### 4. How many days till Christmas?
// Create a function to calculate the days till Christmas. 
function daysTillChristmas() {
    let now = new Date();
    let msecNow = Date.parse(now);
    let christmas = new Date(`${now.getFullYear()}-12-24`);
    let msecChristmas = Date.parse(christmas);
    let msecTillChristmas = msecChristmas - msecNow;
    let daysTillChristmas = msecTillChristmas / 86400000;
    let results = Math.round(daysTillChristmas);
    console.log(`There's still ${results} days till Christmas!`);
}

daysTillChristmas(); // There's still 155 days till Christmas!


console.log('---------------------- 5 ----------------------');

// #### 5. Days in a month
// Create a function to calculate the number of days in a specified month. 
// Examples and Expected Output: 
// * getDaysInMonth(1, 2012); --> 31
// * getDaysInMonth(2, 2012); --> 29
// * getDaysInMonth(9, 2012); --> 30
// * getDaysInMonth(12, 2012); --> 31
function getDayInMonth(month, year) {

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let myMonth = month - 1;

    switch (myMonth) {
        case 0:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
        case 1:
            console.log(`The month ${months[myMonth]} of ${year} has 28 days.`);
            break;
        case 2:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
        case 3:
            console.log(`The month ${months[myMonth]} of ${year} has 30 days.`);
            break;
        case 4:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
        case 5:
            console.log(`The month ${months[myMonth]} of ${year} has 30 days.`);
            break;
        case 6:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
        case 7:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
        case 8:
            console.log(`The month ${months[myMonth]} of ${year} has 30 days.`);
            break;
        case 9:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
        case 10:
            console.log(`The month ${months[myMonth]} of ${year} has 30 days.`);
            break;
        case 11:
            console.log(`The month ${months[myMonth]} of ${year} has 31 days.`);
            break;
    }
}

getDayInMonth(2, 2012); // The month February of 2012 has 28 days