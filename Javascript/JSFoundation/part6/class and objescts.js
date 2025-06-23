//Objects can be created many ways 
//In objects there you can create properties and methods

const student = {
    fullName : "Rakibul Islam",
    marks : 75,
    printMarks: function(){
        console.log(`Marks = ${this.marks}`); //this.amrks means student.marks in student object
  
    },
};

//Make a tax method for employee
const employee = {
    calcTax1(){
        console.log("tax rate is 10%")
    }, //i can create without function
    calcTax2 : function(){
        console.log("tax rate is 10%");
    } // i can create with function
}

//create empoyee list
const karanArjun = {
    salary: 50000,
};
const sadif = {
    salary: 50000,
};
const yakkob = {
    salary: 50000,
};
//if i create a spechial calcTax1 for korim same name on this and employee function JS will prefer korim's calcTax1()
const korim = {
    salary: 50000,
    calcTax1(){
        console.log("tax rate is 20%")
    } //result will be tax rate is 20%
};

//make empoyee to tax function
karanArjun.__proto__ = employee;
sadif.__proto__ = employee;
yakkob.__proto__ = employee;
korim.__proto__ = employee;
