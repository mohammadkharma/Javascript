// Constructor & Prototype
// ======================= //


// 1. Hero
function Hero(name) {
    this.name = name;
}

let myHero = new Hero('Jordan');

// --------------------------------------------------------------- //

// 2. Playlist
function Song(tittle, artist) {
    this.tittle = tittle;
    this.artist = artist;

    this.play = function () {
        console.log(`Playing: ${this.tittle} by ${this.artist}`);
    }
}

let song1 = new Song('Not alone', 'Micheal Jackson');
let song2 = new Song('Changes', '2pac');

song1.play();
song2.play();

// --------------------------------------------------------------- //

// 3. Person
function Person(name, occupation) {
    this.name = name;
    this.occupation = occupation;
}

Person.prototype.WhoAreYou = function () {
    console.log(`My name is ${this.name}, and I am a ${this.occupation}`);
}

let person1 = new Person('Joe', 'Teacher');
let person2 = new Person('Mike', 'Coach');

person1.WhoAreYou();
person2.WhoAreYou();

// --------------------------------------------------------------- //

// 4
function arrayString(arr) {
    this.arr = arr;

    function toStr() {
        let arrStr = arr.join('');
        console.log(arrStr);
    }

    toStr();
}

let joined = new arrayString(['c', 'a', 't']);

// --------------------------------------------------------------- //

// 5.  Calendar App
function Day(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;

    let daysOfJune = [
        { month: 6, day: 1, year: 2016 },
        { month: 6, day: 2, year: 2016 },
        { month: 6, day: 3, year: 2016 },
        { month: 6, day: 4, year: 2016 },
        { month: 6, day: 5, year: 2016 },
        { month: 6, day: 6, year: 2016 },
        { month: 6, day: 7, year: 2016 },
        { month: 6, day: 8, year: 2016 },
        { month: 6, day: 9, year: 2016 },
        { month: 6, day: 10, year: 2016 },
        { month: 6, day: 11, year: 2016 },
        { month: 6, day: 12, year: 2016 },
        { month: 6, day: 13, year: 2016 },
        { month: 6, day: 14, year: 2016 },
        { month: 6, day: 15, year: 2016 },
        { month: 6, day: 16, year: 2016 },
        { month: 6, day: 17, year: 2016 },
        { month: 6, day: 18, year: 2016 },
        { month: 6, day: 19, year: 2016 },
        { month: 6, day: 20, year: 2016 },
        { month: 6, day: 21, year: 2016 },
        { month: 6, day: 22, year: 2016 },
        { month: 6, day: 23, year: 2016 },
        { month: 6, day: 24, year: 2016 },
        { month: 6, day: 25, year: 2016 },
        { month: 6, day: 26, year: 2016 },
        { month: 6, day: 27, year: 2016 },
        { month: 6, day: 28, year: 2016 },
        { month: 6, day: 29, year: 2016 },
        { month: 6, day: 30, year: 2016 },
    ];

    let daysOfJuly = [
        { month: 7, day: 1, year: 2016 },
        { month: 7, day: 2, year: 2016 },
        { month: 7, day: 3, year: 2016 },
        { month: 7, day: 4, year: 2016 },
        { month: 7, day: 5, year: 2016 },
        { month: 7, day: 6, year: 2016 },
        { month: 7, day: 7, year: 2016 },
        { month: 7, day: 8, year: 2016 },
        { month: 7, day: 9, year: 2016 },
        { month: 7, day: 10, year: 2016 },
        { month: 7, day: 11, year: 2016 },
        { month: 7, day: 12, year: 2016 },
        { month: 7, day: 13, year: 2016 },
        { month: 7, day: 14, year: 2016 },
        { month: 7, day: 15, year: 2016 },
        { month: 7, day: 16, year: 2016 },
        { month: 7, day: 17, year: 2016 },
        { month: 7, day: 18, year: 2016 },
        { month: 7, day: 19, year: 2016 },
        { month: 7, day: 20, year: 2016 },
        { month: 7, day: 21, year: 2016 },
        { month: 7, day: 22, year: 2016 },
        { month: 7, day: 23, year: 2016 },
        { month: 7, day: 24, year: 2016 },
        { month: 7, day: 25, year: 2016 },
        { month: 7, day: 26, year: 2016 },
        { month: 7, day: 27, year: 2016 },
        { month: 7, day: 28, year: 2016 },
        { month: 7, day: 29, year: 2016 },
        { month: 7, day: 30, year: 2016 },
        { month: 7, day: 30, year: 2016 },
    ];

    if (month === 6) {
        console.log(daysOfJune);
    } else if(month === 7) {
        console.log(daysOfJuly);
    } else {
        console.log('sorry, no day are stored for this month')
    }

}

function getDaysInMonth(year, month) {
    Day(year, month);
};

let daysInJune2016 = getDaysInMonth(2016, 6);

// --------------------------------------------------------------- //
