
// 1
let arr1 = [2, 16, 4, 88, 51];

let newArr1 = arr1.filter(num => {
    if (num > 10) {
        return num;
    }
});

console.log(newArr1);


// 2
let pinCodeFun = (num) => {
    let isNumber = Boolean(num);
    let pinCodeStr = String(num);
    let pinCodeArr = pinCodeStr.split('');


    let counter = 0;
    for (i = 0; i < pinCodeArr.length; i++) {
        counter += Number(pinCodeArr[i]);
    }

    let newArr = [];
    pinCodeArr.forEach(elem => {
        if (elem === pinCodeArr[0]) {
            newArr.push(elem)
        }
    });

    if (isNumber && pinCodeArr.length === 4 && pinCodeArr[3] % 2 === 0 && counter >= 5 && newArr.length <= 3) {
        console.log(true);
    }
}

pinCodeFun(1882);


// 4
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
];

events.sort(function (a, b) {
    return a.turnout - b.turnout;
});

events.sort(function (a, b) {
    let weekdayA = a.turnout;
    let weekdayB = b.turnout;

    if (weekdayA > weekdayB) {
        return -1;

    } else if (weekdayA < weekdayB) {
        return 1;
    } else {
        return 0;
    }
});
console.log(events);


// 5
function newNum(arr) {
    let sqrtNum = arr.map(Math.sqrt);
    let sqrtFiltered = sqrtNum.filter(num => {
        if (num % 2 !== 0) {
            sqrtFiltered.push(num);
        }
    });
    console.log(sqrtFiltered);

}
newNum([2, 4, 7, 9, 3, 21, 50, 12]);



// 8
const timeHour = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];
let hoursDay = timeHour.map(hours => { return hours.end - hours.start });
let hoursTotal = hoursDay.reduce((a, b) => { return a + b }, 0);
console.log(hoursTotal);


// 9 part 1
function mapping(array, fn) {
    array.forEach(element => {
        fn(element);
    });
}
const powerOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));
console.log(val);


// 10
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]]


for (var i = 0; i < board.length; i++) {
    var innerLength = board[i].length;
    for (var j = 0; j < innerLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + board[i][j]);
    }
};


// ##### Good luck! :)
