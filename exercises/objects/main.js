// 1
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
};
console.log(Object.keys(student));

// 2
let user = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    country: "france",
};
console.log(user.firstName + " " + user.lastName + " " + "is"
    + " " + "a" + " " + user.age + " years old" + " " + user.job + " " + "living in" + " " + user.country);

// 3
delete user.country;
console.log(user);

// 4
console.log(Object.keys(user).length);

// 5
const library = [
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        readingStatus: true
    },
    {
        author: 'Homer',
        title: 'The Odyssey',
        readingStatus: true
    },
    {
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        readingStatus: false
    }];

for (let j = 0; j < library.length; j++) {
    if (library[j].readingStatus === true) {
        console.log(`Already read ${library[j].title} by ${library[j].author}`);
    }else {
        console.log(`you still need ${library[j].title} by ${library[j].author}`);
    };
};


// Exercise Two:

// 1
let range = {
    min: 0,
    max: 10
};
let num = 15

if ((num >= range.min) && (num<= range.max)) {
    console.log('true');   
} else {
    console.log('false');  
};

 // 2
let newObj = { a: 1,
               b: 2, 
               c: 3 }
let newValue = Object.keys(newObj);
let obj = Object.values(newObj);
console.log(newValue);
console.log(obj);

// 3
console.log(`-------------------3----------------`);

const player = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
] ;
var i=0,sum=0;
for(i=0;i<Object.keys(player).length;i++){
   sum=sum+player[i].score ;
};
console.log(`The player's maximum score:${sum}`)

// 4
console.log(`-------------------4-------------`);
let  myOb = {
   a: 1,
   };
   var myOb1 = {};
   if(Object.keys(myOb1).length == 0) {
       console.log("true"); }
       else {
           console.log("false");
       };