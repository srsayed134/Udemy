// //console.log("One");
// //console.log("Two");

// const { log } = require("async")

// const { reject } = require("async");

// setTimeout(()=>{
//     //console.log("Hello");  
// }, 1000);
 
// //console.log("Three");
// //console.log("Four");

// //Callback function


// /*function sum (a, b){
//   console.log(a + b);
// }*/

// function calculate(a, b, sumCallBack){
//   sumCallBack(a, b);
// }

// calculate(1, 2, (a, b) => {
//   //console.log(a + b);
  
// })
// // Settimeout with callback
// const hello = () => {
//   //console.log("This is callback")
// }

// setTimeout(hello, 2000)
// // Newsting for loop
// for(let i = 0; i < 5; i++){
//   let str = "";
//   for(let j = 0; j < 5; j++){
//     str = str + j;
//   }
//   //console.log(i, str)
// }
 
// //getting data for delay exercise with callback hell

// /* function getData(dataID ,getNextData){
//   setTimeout(()=>{
//     console.log("Data :", dataID);
//     if(getNextData){
//       getNextData();
//     }
//   }, 3000)
// }

// getData(1, ()=>{
//   getData(2, () =>{
//     getData(3, () => {
//       getData(4)
//     });
//   })
// })
// */

// /*
// function getData(myData, nextData){
//     setTimeout(()=>{
//       console.log("Data :", myData);
//       if(nextData){
//         nextData();
//       }
//     }, 500)
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3)
//   })
// }) */

// //Promises

// // let promise = new Promise((resolve, reject)=>{
// //     console.log("I am a promise");
// //     reject("Some error occurd")
// // })


// function getData(dataId, getNextData){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("data", dataId);
//       resolve("Success")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 7000)
//   })
// } 

// const getPromise = () => {
//   return new Promise ((resolve, reject) =>{
//     console.log("I am a promise");
//     resolve("Success");
//     // reject("Rejected")
// });
// };

// let holdPromise = getPromise();

// holdPromise.then((result) => {
//   console.log("Promiss fullfiled", result);
// });

// holdPromise.catch((error)=>{
//   console.log("Promise rejected", error);
  
// })


//Promises chaining
function asyncFunc(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2(){
  return new Promise ((resolve, reject)=>{
     setTimeout(()=>{
      console.log("Some data2");
      resolve("success")
     }, 4000)
  })
}

console.log("fathching data1........");

let holdPromise = asyncFunc();
holdPromise.then((result)=>{
    
    //fatching data after asyncFun1
    console.log("fatching data2.........");
    let holdPromise2 = asyncFunc2();
    holdPromise2.then((result)=>{
    })
       
})

