// Number

let balance = 120;
let anotherBalance = new Number(120);
console.log(typeof anotherBalance);//Object

console.log(typeof balance); //Number


//boolean

let isActive = true;
let isReallyActive = new Boolean(true); // Not recommended

// null and undefined

let firstName
console.log(firstName); //undefined

let firstName1 = null;
console.log(firstName1); //null

//String

let myString = "hello";
let myString1 = 'Hola';
let userName = "hitesh";
let oldGreet = myString + " " + "hitesh";
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;
console.log(greetMessage);

let demo1 = `Value is ${2 * 2}`;
console.log(demo1);

//Symbol
//Symbol is unique so it can not be same
let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");

console.log(sm1 == sm2); //false
console.log(sm1); //Symbol()





