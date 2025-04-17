"use strict";
var greet1 = function () {
    console.log('hello, world');
};
greet1();
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
// let greet: Function;
// example 1 functional signature
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet('ninja', 'hello');
// example 2  signature
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
calc(10, 5, 'add');
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
logDetails({ name: 'ninja', age: 30 });
var x = 10;
var y = 'hello';
