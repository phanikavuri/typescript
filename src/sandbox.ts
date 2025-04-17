let greet1: Function = () => {
  console.log('hello, world');
}

greet1();
// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result);

// let greet: Function;

// example 1 functional signature
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

greet('ninja', 'hello');
// example 2  signature
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

calc(10, 5, 'add');

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetails({name: 'ninja', age: 30});
// Aliases
type StringorNuber = string | number;
let x:StringorNuber = 10;
let y:StringorNuber = 'hello';
