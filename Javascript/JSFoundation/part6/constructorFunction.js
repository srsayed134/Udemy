function person(name, age){
    this.name = name;
    this.age = age;
}

function car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new car("Toyota", "Camry");
console.log(myCar); // car {make: "Toyota", model: "Camry"}

let myNewCar = new car("Tata", "Safari");
console.log(myNewCar); // car {make: "Tata", model:"Safari"}

function tea(type) {
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    }
}
let lemonTea = new tea("lemon tea");
console.log(lemonTea.describe());

function animal(species){
    this.species = species;
}

animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new animal("Dog");
console.log(dog.sound());

let cat = new animal("cat");
console.log(cat.sound());

let monkey = new animal("monkey");
console.log(monkey.sound());

