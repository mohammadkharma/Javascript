// KEYWORDS & CONSOLE

// KEYWORDS:
// 1- VAR:
// Here we can overwrite (reassign) the assignment of the identifier by retyping it with or without the "var" keyword and with new value
var old_name = "sam";
var old_name = "samer";
console.log(old_name); // print results: samer

// 2- LET:
// Here we can overwrite (reassign) the assignment of the identifier by retyping it WITHOUT the "LET" keyword and with new value
let my_country1 = "lebanon";
my_country1 = "germany";
console.log(my_country1); // print results: germany
/* let my_country2="tokyo";
let my_country2="swis";
console.log(my_country2);  */// <<< It's not possible to redeclare a variable identifier again with key word "let". This help us to not lose an old defined variable by reassigning it,  the console will show error

// 3- CONST:
const my_country3 = "india"; // <<< Const variables can't be declared or reassigned. It's used for stable values. 
console.log(my_country3);


// CONSOLE:
// 1- console.log(); is to check if there's errors without the web but with node
console.log("Hello World!");
// a- Identifiers in console with quotes are defined as a string
var my_age = "thirty";
console.log("my_age"); // <<< Node results will be: my_age
// b- Identifiers in console without quotes are defined as it's assignment 
var my_age = "thirty";
console.log(my_age); // <<< Node results will be: thirty

// 2- variables identifiers are 2 cases:
// a- camel case: e.g. myName 
var myName = "Mo";
console.log("myName");
// b- snake case: e.g. my_name
var my_name = "Mo";
console.log("my_name");

// 3- Combing 2 identifiers and more: can combine texts and names in one console, with a comme between them
var myHobby = "basketball";
var my_height = "190cm";
console.log("someText", myHobby, my_height); // print results: someText basketball 190cm
