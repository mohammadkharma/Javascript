// default binding:

function foo1() {
    console.log(this.a1);
}
a1 = 10;
foo1(); // 10

// --------------------------------------------------------

// implicit binding:

function foo2() {
    console.log(this.a2);
}
let obj2 = {
    a2: 2,
}
let a2 = 24;
foo2.call(obj2) // 2



function foo3() {
    console.log(this.a3);
}
function doFoo() {
    foo3();
}
let obj3 = {
    a3: 2,
    foo3: foo3,
}
a3 ='OOPS, global!';
doFoo(obj3.foo3); // OOPS, global!



function foo7() {
    console.log(this.x);
}
let obj7 = {
    x: 100,
    foo7: foo7,
}
let obj8 = {
    x: 1,
    obj7: obj7,
}
obj8.obj7.foo7() // 100

// --------------------------------------------------------

// explicit binding:

function foo4() {
    console.log(this.a4);
}
let obj4 = {
    a4: 20,
}
foo4.call(obj4) // 20



function foo5() {
    console.log(this.a5);    
}
let obj5 = {
    a5: 2,
}
let bar5 = function () {
    foo5.call(obj5);
}
bar5() // 20

// --------------------------------------------------------

// new binding:
function foo6(a) {
    this.a = a;
}
let bar6 = new foo6(2); // constructing a new object from foo6
console.log(bar6); // foo6 { a: 2 }
console.log(bar6.a); // 2



function bar7() {};
let instanceOfBar7 = new bar7();
console.log(instanceOfBar7); // bar7 {}



function car(maxSpeed) {
    this.maxSpeed = maxSpeed;
}
let fastCar = new car(200);
let slowCar = new car(80);
console.log(fastCar.maxSpeed); // 200
console.log(slowCar.maxSpeed); // 80


