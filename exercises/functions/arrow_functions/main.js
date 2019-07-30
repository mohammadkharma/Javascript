// ARROW FUNCTION:


// 1. Multiply
let multiplier = (num1, num2) => num1 * num2;
let result = multiplier(2, 4);
console.log(result); // 8

// ------------------------------------------------- //

// 2. Double The Odds
let arr1 = [3, 5, 67, 12, 34, 4, 9, 30];
let newArr = [];
arr1.filter(num => {
    if (num % 2 !== 0) {
        newArr.push(num * 2);
    }
});
console.log(newArr); // [ 6, 10, 134, 18 ]

// ------------------------------------------------- //

// 3. Loopyloop
let arr2 = [20, 30, 40, 50, 60];
let newArr2 = [];
arr2.forEach(n => {
    newArr2.push(n - 10);
});
console.log(newArr2); // [ 10, 20, 30, 40, 50 ]

// // ------------------------------------------------- //

// 4. Cars
let car = {
    model: 'Smart',
    manufacturer: 'Mercedes',
    year: 2011,
    color: 'Black',
}

let printer = () => {
    let keys = Object.values(car);
    console.log(keys);
}
printer(); // [ 'Smart', 'Mercedes', 2011, 'Black' ]

// // ------------------------------------------------- //

// 5. Filter
let arr3 = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let newArr3 = [];
arr3.filter(num => {
    if (num > 70) {
        newArr3.push(num);
    }
});
console.log(newArr3); // [ 234, 74, 76, 92 ]

// ------------------------------------------------- //

// // 6. Geometrizer

// Circumfrence
function calcCircumfrence(radius) {
    let result = 2 * Math.PI * radius;
    console.log(`The circumference is: ${result} `);
}

calcCircumfrence(4);

// Area
function calcArea(radius) {
    let result = Math.PI * radius * radius;
    console.log(`The area is: ${result}`);
}

calcArea(4);

// ------------------------------------------------- //

// 7. The Inventors
const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
},
{
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
},
{
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
},
{
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
},
{
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
},
{
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
},
{
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
},
{
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
},
{
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
},
{
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
},
{
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
},
{
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}
];

let filter = inventors.filter((obj) => obj.year > 1500 && obj.year < 1600);
console.log(filter);

let sort = inventors.sort((a, b) => a.year - b.year);
console.log(sort);

let inventorsNames = [];
inventors.filter((obj) => {
    inventorsNames.push(obj.first + ' ' + obj.last);
})
console.log(inventorsNames);

// // ------------------------------------------------- //

// // 8. Look at all the people
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];

let sorted = people.sort();
console.log(sorted);
