// WHILE:
let text = "";
let i = 0;

while (i <= 20){
    console.log(`this is number ${i}`);
    i++
}
console.log(text);




// DO WHILE:
let text2 = "";
let j = 0;

do {
text2 += `the number is ${j}\n`;
j++
}

while (j <= 10);
console.log(text2);

//----------------//

let oldCar = {
    make: "Toyota",
    model: "Tercel",
    year: "1995",
}

for (const key in oldCar){
    console.log(`${key} : ${oldCar[key]}`);   
}



let person = {
    fName: "john",
    lName: "doe",
    age: 28,
}
let texT = "";
let x;

for (x in person){
    texT += `${person[x]}`;
    console.log(`${person[x]}`);
     //John
     //Doe
     //28
}

console.log(texT);
//JohnDoe28a

// FOR EACH:
let arr = ["apple", "pear", "mango"]
arr.forEach(function(element) {
    console.log(element);
});
// apple 
// pear
// mango

let tasks = [
    [
        "clean",
        "floor"
    ],
    [
        "clean",
        "window"
    ],
    [
        "clean",
        "dining table"
    ],
    [
        "clean",
        "kitchen platform"
    ],
    [
        "cook",
        "the breakfast"
    ],
];

tasks.forEach(tasks => {
    switch (tasks[0]) {
        case "clean":
        console.log(`I am cleaning ${tasks[1]}`);

        break;

        case "cook":
        console.log(`I am cleaning ${tasks[1]}`);
        
        break;
        default:
        break;
        
    }
})

// I am cleaning floor
// I am cleaning window
// I am cleaning dining table
// I am cleaning kitchen platform
// I am cleaning the breakfast

// FOR OF:
const fruits = {
    apple: 30,
    banana: 20,
    orange: 16,
}

const entries = Object.entries(fruits)
console.log(entries);
// [ [ 'apple', 30 ], [ 'banana', 20 ], [ 'orange', 16 ] ]

const keys = Object.keys(fruits)
console.log(keys);
// [ 'apple', 'banana', 'orange' ]

const value = Object.values(fruits)
console.log(value);
// [ 30, 20, 16 ]

for (const[fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}`);
};
// There are 30 apple
// There are 20 banana
// There are 16 orange