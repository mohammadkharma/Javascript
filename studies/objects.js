console.log('-------------------- objects --------------------');
//________________________________________________________________________//


// objects contains properties with keys and value
let someone = {
    // key: value,
    name: 'John',
    age: 30,
    hobbies: ['swimming, tennis']
}
console.log(someone); // { name: 'John', age: 30, hobbies: [ 'swimming, tennis' ] }

//________________________________________________________________________//

// to access one of the properties in the objects we use 2 methods:
// 1: dot notation (mostly used)
console.log(someone.name); // John

// 2: square brackets notation ([])
// the key should be in string quotations
console.log(someone['name']); // John
// benefits: it accept a global variable while the dot notation doesn't
let howOld = 'age';
console.log(someone[howOld]); // 30

//________________________________________________________________________//

// to update a property:
// with dot notation:
someone.name = 'Alice';
console.log(someone.name); // Alice

// with square brackets notation:
someone['hobbies'] = ['dancing', 'ski'];
console.log(someone.hobbies); // [ 'dancing', 'ski' ]


//________________________________________________________________________//
console.log('-------------------- creating objects methods --------------------');
//________________________________________________________________________//


// creating a method inside the object and calling it:
let someone1 = {
    // *1
    login: function () {
        console.log('the user is logged in');
    },
    // *2
    logout () {
        console.log('the user is logged out');
    }
}
// *1 first syntax of an added method:
someone1.login(); // the user is logged in

// *2 second syntax of an added method (removing ': function')    
someone1.logout(); // the user is logged out


//________________________________________________________________________//
console.log('-------------------- this --------------------');
//________________________________________________________________________//


// 'this' is an object keyword
console.log(this); // {}

// it is used inside the object added methods to return the elements of it
let someone2 = {
    name: 'Mason',
    age: 45,
    kids: ['snoopy', 'limo', 'maya'],
    get () {
        // *1
        console.log(this);
        // *2
        console.log(this.kids);
        // *3
        this.kids.forEach(kid => {
            console.log(kid);
        });
    }
}

someone2.get();
// *1 'returning all the properties:
// name: 'Mason',
// age: 45,
// kids: [ 'snoopy', 'limo' ],
// get: [Function: get] }

// *2 how to access a specific key:
// [ 'snoopy', 'limo', 'maya' ]

// *3 using a method on 'this':
// snoopy, limo, maya

// TIP: using 'this' in the added object methods as arrow functions is not reliable, it refers to the global window 


//________________________________________________________________________//
console.log('-------------------- math objects --------------------');
//________________________________________________________________________//


// round() round the number to the nearest integer
console.log(Math.round(7.7)); // 8
console.log(Math.round(7.2)); // 7

//-----------------------------//

// floor() reduce the number to the last integer before the decimal
console.log(Math.floor(2.8)); // 2
console.log(Math.floor(1.13)); // 1

//-----------------------------//

// ceil() increase the number to the next integer after the decimal (opposite of floor())
console.log(Math.ceil(2.8)); // 3
console.log(Math.ceil(1.13)); // 2

//-----------------------------//

// trunc() takes away the decimal
console.log(Math.trunc(16.287)); // 16

//-----------------------------//

// random() return a new random decimal number between zero and one every time it's called consoled (refreshed)
console.log(Math.random()); // (some decimal number between zero and one)

// getting an integer using round():
let random = Math.random()
console.log(Math.round(random)); // (integer between zero and one)
console.log(Math.round(random * 100)); // (integer between one and 100)






