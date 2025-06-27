//console.log("One");
//console.log("Two");

setTimeout(()=>{
    //console.log("Hello");  
}, 1000);
 
//console.log("Three");
//console.log("Four");

//Callback function


/*function sum (a, b){
  console.log(a + b);
}*/

function calculate(a, b, sumCallBack){
  sumCallBack(a, b);
}

calculate(1, 2, (a, b) => {
  //console.log(a + b);
  
})
// Settimeout with callback
const hello = () => {
  //console.log("This is callback")
}

setTimeout(hello, 2000)
// Newsting for loop
for(let i = 0; i < 5; i++){
  let str = "";
  for(let j = 0; j < 5; j++){
    str = str + j;
  }
  //console.log(i, str)
}
 
//getting data for delay exercise with callback hell

/* function getData(dataID ,getNextData){
  setTimeout(()=>{
    console.log("Data :", dataID);
    if(getNextData){
      getNextData();
    }
  }, 3000)
}

getData(1, ()=>{
  getData(2, () =>{
    getData(3, () => {
      getData(4)
    });
  })
})
*/

/*
function getData(myData, nextData){
    setTimeout(()=>{
      console.log("Data :", myData);
      if(nextData){
        nextData();
      }
    }, 500)
}

getData(1, () => {
  getData(2, () => {
    getData(3)
  })
}) */