// CONCATENATION:

// 1- Concatenation strings:
let concat1 = "Hello";
let concat2 = "World";
let concat3 = concat1 + concat2;
console.log(concat3); // <<< HelloWorld
let concat11 = "Hello";
let concat22 = "World";
let concat33 = concat11 + concat22;
console.log(concat11 + " " + concat22 + "!"); // <<< Hello World!

// 2- Concatenation numbers:
let number1 = 2000;
let number2 = 3000;
let number3 = number1 + number2;
console.log(number3); // 5000

// 3- Concatenation number + string:
let num = 2000;
let str = "3000";
let result = num + str;
console.log(result); // 20003000 
let str1 = "500";
let num1 = 200;
let num2 = 400;
let result1 = str1 + num1 + num2;
// the counter starts from the left, so in this case he started counting with a string, then he add the rest as a string.
console.log(result1); // 500200400
let str11 = 500;
let num11 = 200;
let num22 = "400";
let result11=str11 + num11 + num22;
// in this case the counter started counting with a number, then he add the first 2 numbers as a numbers and not strings(500+200=700) and then he add the strings. 
console.log(result11); // 700400