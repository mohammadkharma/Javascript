// Map, Filter, Reduce & Sort 
// =========================== 


// 1. Increment by 1
function increment(arr) {
    let newArr = arr.map(num => {
        return num + 1;
    });
    console.log(newArr); // [ 4, 46, 7, 57, 8, 10 ]
}

increment([3, 45, 6, 56, 7, 9]);



// 2. Sum Up
function sum(arr) {
    let newArr = arr.reduce(function (a, b) {
        return a + b;
    });

    console.log(newArr);
}

sum([2, 4, 6, 8, 10]); // 30


// 3. instanceOf
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

function sumInstance(arr) {

    let newArr = arr.sort();
    let reducedArr = newArr.reduce(function (acc, curr) {

        if (typeof acc[curr] == 'undefined') {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});

    console.log(reducedArr);
}

sumInstance(data);
// { bike: 2, car: 5, pogostick: 1, truck: 3, van: 2, walk: 2 }


// 4. Inventors
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Map:
function mapped(arr) {
    arr.map(function (inventor) {
        let fullName = [inventor.first, inventor.last].join(" ");
        console.log(fullName);
    })
}

mapped(inventors);

// Reduce:
function reduced(arr) {
    let accumulator;

    arr.reduce(function (acc, inventor) {
        if (typeof acc[inventor] == 'undefined') {
            acc[inventor] = inventor.passed - inventor.year;
        } else {
            acc[inventor] += inventor.passed - inventor.year;
        }
        accumulator = acc[inventor];
        return acc;
    });

    console.log('The sum of the inventors ages is: ', accumulator);
}

reduced(inventors); // The sum of the inventors ages is:  785


// 5. Square Root
function getSquareRoot(arr) {
    let result = arr.map(Math.sqrt);
    console.log(result);
}

getSquareRoot([4, 9, 16, 25, 81]); // [ 2, 3, 4, 5, 9 ]


// 6. Instances of Letters
function letterInstance(str) {
    let arr = str.split('');
    let newArr = arr.sort();
    let reducedArr = newArr.reduce(function (acc, curr) {

        if (typeof acc[curr] == 'undefined') {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});

    console.log(reducedArr);
}

letterInstance("cancellation"); // { a: 2, c: 2, e: 1, i: 1, l: 2, n: 2, o: 1, t: 1 }


// 7. List of Movies
let friends = [{
    name: 'Maria',
    films: ['Avengers: Infinity War', 'Avatar'],
    age: 22
}, {
    name: 'John',
    films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
    age: 29
}, {
    name: 'Jean',
    films: ['Deadpool', 'Incredibles 2'],
    age: 20
}];

function getFilms(arr) {

    let result = arr.map(item => {
        return item.films;
    });

    console.log(result)
}

getFilms(friends);


// 8. Filter Evens
function filterEvens(arr) {
    let result = arr.filter(item => {
        return item % 2 == 0;
    });

    console.log(result);
}


filterEvens([1, 22, 13, 16, 12, 13, 21]); // [ 22, 16, 12 ]


// 9. Search 
function search(arr, str) {
    let result = arr.filter(item => {
        return item.includes(str);
    });

    console.log(result);
}

search(["Tomato", "Salt", "Potato", "Olives", "Lemon"], "to"); // [ 'Tomato', 'Potato' ]


// 10. Reformat an Array
let originalArray = [
    { key: 1, name: "John" },
    { key: 2, name: "Maria" },
    { key: 3, name: "Oliver" },
    { key: 4, name: "Jane" },
    { key: 5, name: "Jack" },
    { key: 6, name: "Albert" },
    { key: 7, name: "Harry" },
    { key: 8, name: "Ron" },
    { key: 9, name: "Kenneth" },
    { key: 10, name: "Kyle" }
];

function changeFormat(arr) {
    let newArr = [];
    arr.filter(item => {
        newArr.push(`{${item.key}: "${item.name}"}`);
    });

    console.log(newArr);
}

changeFormat(originalArray);


// 11. Sorting Numbers
function sorter(arr) {
    let result = arr.sort(function (a, b) {
        return a - b;
    });
    console.log(result);
}

sorter([7, 3, 9, 2, 5, 1, 6, 10, 4, 8]);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// 12. Sort Shapes
let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"]
];

function sortArray(arr) {
    let result = arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    console.log(result);
}

sortArray(shapes);