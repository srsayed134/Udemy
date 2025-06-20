let computer = {cpu: 12};
let lenovo = {
    screen: "LCD",
    __proto__: computer
}
let tomHardware = {};

console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4};
let tesla = {driver: "AI"};
//Assign property in tesla
Object.setPrototypeOf(tesla, genericCar);

//Output
console.log(`tesla `, genericCar);
console.log(`tesla `, tesla);
console.log(`tesla `, Object.getPrototypeOf(tesla));
console.log(`tesla `, Object.getPrototypeOf(genericCar));

