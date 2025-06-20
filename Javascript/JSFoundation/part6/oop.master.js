let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function (){
        return `${this.make} car got started in ${this.year}`;
    }
}
console.log(car.start());

//Constructor function

function person(name, age){
    this.name = name;
    this.age = age;
}
let rohid = new person("Rohid alom", 25);
let momin = new person("Mominul islam", 24);
let elias = new person("Elias hossain", 26);

console.log(rohid.name);
console.log(rohid.age);
console.log(elias.age);
console.log(momin.name)

//Prototypal chain
//EX-1
function animal(type){
    this.type = type;
}
animal.prototype.speak = function(){
    return `${this.type} makes a sound`;
}
let dog = new animal("Dog")
console.log(dog.speak());


//EX-2
Array.prototype.hitesh = function(){
    return `Custom method ${this}`
}
let myArray = [1, 2, 3];
let myNewArray = [1,2,3,4,5]

console.log(myArray.hitesh());
console.log(myNewArray.hitesh());

//EX-2.1
Array.prototype.sayed = function(){
    return `Sayed's weekend ${this}`
}
let weekend = ["FRI", "SAT"];

console.log(weekend.sayed());

//Class example

class vehicle{
    constructor(make, model){
        this.make = make;
        this.model =model;
    }
    //These are methods crate as many as i can
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
//It is inheritance example
class car1 extends vehicle{
    drive(){
        return `${this.make} : This is an inheritancw example`;
    }
}
let myCar = new car1("Toyota", "Crown");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new vehicle("Mazda", "Execla");
console.log(vehOne.start());
console.log(vehOne.make); //Mazda
console.log(vehOne.model); //Execla


//console.log(vehOne.drive()); // it will give error

// Encapsulation....................

//Creat function and method
class bankAccount {
    #balance = 0;
    
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}
//Crate an account
let account = new bankAccount();
//Get into balance though method 
console.log(account.getBalance()); //$ 0

// Abstraction.......................

class coffeMachine{
    start(){
        //Call DB
        //filter valus
        return `Starting the machine...`;
    }
    brewCoffee(){
        //Complex etc etc
        return `Brewing Coffee`;
    }
    //I can to start both simontanilously with one button
    pressStartButton(){
       let msgOne = this.start();
       let msgTwo = this.brewCoffee();
       return`${msgOne} + ${msgTwo};`
    }

}

let myMachine = new coffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Polymorphism

class bird{
    fly(){
        return `I am flying...`
    }
}
class penguin extends bird {
    fly(){
        return `Penguis can't fly`;
    }
}

let newBird = new bird();
let newPenguin = new penguin();

console.log(newBird.fly());
console.log(newPenguin.fly());

// Static method....................

class calculator{
    static add(a, b){
      return a+b;
    }
}

// let miniCals = new calculator(); 
// console.log(miniCals.add(2, 3)); //it will give erorr

console.log(calculator.add(2, 3)); // it will give you 5;

// Gettetrs and setters....................
/*
 class employee{
    constructor(name, salary){
        this.name = name;
        this._salary = salary;
    }
    get salary() {
        return `You are not allowed to see salary`
    }
    set salary(value){
        if (value < 0) {
            console.error("Invalid Salary")
        } else {
            this._salary = value;
        }
    }
 }
 let emp = new employee("Alice", 5000);
 console.log(emp.salary); // salary is a spechial method so no need to use salary()
 console.log(emp._salary); //5000
 */

 class employee1{
    #salary1;
    constructor(name1, salary1){
        if (salary1 < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name1 = name1;
        this.#salary1 = salary1;
    }
    get salary1() {
        return `You are not allowed to see salary1`
    }
    set salary1(value){
        if (value < 0) {
            console.error("Invalid Salary")
        } else {
            this._salary1 = value;
        }
    }
 }
 let emp1 = new employee1("Alice", 5000); 
 console.log((emp1._salary1)); //Error //without # it would be accessable
 emp1.salary1 = 60000; //Invalid Salary

 /*..................Getter and setter have to read individualy.............*/
 
 









