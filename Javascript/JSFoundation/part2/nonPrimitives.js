// Object

const userName = {
    firstName: "hitesh",
    isLogedIn: true,
    age: 25,
}
userName.firstName = "Chai";
userName.lastName = "Code";

console.log(typeof userName);
console.log(userName.firstName);
console.log(userName.lastName);
console.log(userName);
console.log(userName["age"]);

let today = new Date();
console.log(today.getMilliseconds());

// Array

let heros = ["SpiderMan", "SuperMan", true, 52]

console.log(heros[0]);

// Implicite type conversion

console.log(1 + "1"); // 11
let isValue = true; //bcs Js fell true is 1 
console.log(isValue + 1); // 2

let value = "5";
console.log(Number(value)); //5
console.log(typeof Number(value)); //number // here i specify my result
console.log(Number(undefined)); //NaN
let value1 = "1abc";
console.log(typeof Number(value1)); //number
console.log(Number(null)); //0







