let num1 = 5;
let num2 = 8;

if (num1 > num2) {
    console.log("Num1 is bigger than num2");
} else {
    console.log("Num1 is smaller thank num2");
}

// Chack string is equal to string

let userName = "Chai";
let anotherUserName = "Chai";

if (userName != anotherUserName) {
    console.log("Pick another username");
} else {
    console.log("It is not equal");
}
// Checking if a variable is a number or not

let score = 44;
if (typeof score === "number"){
    console.log("This is a number");
} else {
    console.log("Not a number");
}
// Checking if a boolean is a true or false

let isTeaReady = false;
if(isTeaReady){
    console.log("Tea is ready");
} else {
    console.log("Tea is not ready");
}
//Chacking if an array is empty or not

let items = [];

console.log(items.length);

if (items.length === 0){
   console.log("Array is empty");
} else {
    console.log("Array is not empty");
    
}
