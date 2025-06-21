//Example-1

document
.getElementById("changeTextButton")
.addEventListener("click", function(){ //1
    let changeParagraph = document.getElementById("myParagraph")
    changeParagraph.textContent = "This is changed paragraph"
})


//1 -- if you use  { () => } this arrow funtion "this" will a global but use of funtion(){} "this" will refer current 
    // console.log(this);
//Example-2

document
.getElementById("highlightFirstCity")
.addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight") //add class of highlight on firstchil of citiesList
})

//Example-3

document
.getElementById("changeOrder")
.addEventListener("click", function(){
    let Coffeetype = document.getElementById("coffeeType");
    Coffeetype.textContent = "EsPresso"
    Coffeetype.style.backgroundColor = "green"
    Coffeetype.style.padding = "5px"
})
//Example-4

document
.getElementById("addNewItem")
.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Potato";

    let shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newItem);
    //or
    // document.getElementById("shoppingList").appendChild(newItem)
})

//Example-5

document
.getElementById("removeLastTask")
.addEventListener("click", function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove()
})

//Example-6

document
.getElementById("clickMeButton")
.addEventListener("dblclick", function(){
    alert("chai code")
})

//Example-7

document
.getElementById("teaList")
.addEventListener("click", function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert(`You selected the: `+ event.target.textContent)
    }
    
})


























// document
// .getElementById("addNewItem") //Grab id
// .addEventListener("click", function(){
//     let newItem = document.createElement("li"); //create a item
//     newItem.textContent = "Eggs"; //name the item

//     let shoppingList = document.getElementById("shoppingList"); //Grab id where list will change
//     shoppingList.appendChild(newItem); //Change the list

// })
