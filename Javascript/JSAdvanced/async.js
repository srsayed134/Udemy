console.log("One");
console.log("Two");

setTimeout(()=>{
    console.log("Hello");  
}, 1000);
 
console.log("Three");
console.log("Four");

//Callback function


function calculator(a, b, sumCallBack){
    sumCallBack(a, b);
}
calculator(1, 2, (a, b)=>{
  console.log(a + b);
  
});