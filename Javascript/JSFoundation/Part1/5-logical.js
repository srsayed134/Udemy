// && -> and
// || -> or
// ! -> reverse

let isLogedin = true;
let isPaid = false;

console.log(isLogedin && isPaid);

let isEmailUser = true;
let isGoogleUSer = false;

console.log(isEmailUser || isGoogleUSer);

// assignment operators

let score = 10 + 11;
let num1 = 10;
num1 += 5;

console.log(num1);

//operator precedence

let score1 = 2 * 3 + 2 - 1;
console.log(score1); //7

let score2 = ((2 * (3 + 2)) - 1); //try to use bracket for better understanding
console.log(score2); //9
