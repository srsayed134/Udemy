class Person {
    constructor(name){
        console.log("enter parent class constructor");
        this.species = "Homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("Eating...");
        
    }
    sleep(){
        console.log("Sleeping...");
    }
}

class Programmer extends Person{
    Work(){
        console.log("Working on code...");
    }
} //in this case Programmer is a child class of Person and Person is a parent class of Programmer

class Doctor extends Person{
    Treat(){
        console.log("Treating patients...");
    }
}

let Sayed = new Programmer; //there have access to all the methods of Person class and Programmer class
let Ahmed = new Doctor;

//If child and parent class have same method then child class method will
//override the parent class method


//Example of inheritance with super constructor
class Engineer extends Person{
    constructor(branch){
        console.log("enter child(Engi) class constructor");
        super(); //super() calls the constructor of the parent class (Person)
        this.branch = branch;
        console.log("exit child(Engi) class constructor");
    }
    Work(){
        console.log("Working on engineering projects...");
    }
}

let engObj = new Engineer("Computer Science");

class Teacher extends Person{
    constructor(name){
        super(name); //to invoke parent class constr. and name should be there for "Rafique"
    }
    Work(){
        super.eat() //first eating //if you try to use parent methods you need to use super like super.eat()
        console.log("Teaching student...");
    }
}

let teachObj = new Teacher("Rafique");