
// practice 3 
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(4, 5)
//console.log(totalCost);

// practice 4

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFuntion){
   return teaFuntion("earl grey")
}

let order = processTeaOrder(makeTea);
console.log(order);

