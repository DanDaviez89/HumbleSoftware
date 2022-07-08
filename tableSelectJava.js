//This prints out what table the user is on
const title = document.querySelector("#title");
title.textContent = localStorage.getItem("tableID");

//Opens upp the menu system
document.getElementById('Add').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

//TotalPrice
const priceSelector = document.querySelector("#Total");
var price = 0;

//Save over all the menu buttons
const orderList = document.querySelector("#orderList");
const burgers = document.querySelector("#burgers");
const Breakfasts = document.querySelector("#Breakfasts");
const num3 = document.querySelector("#three");
const num4 = document.querySelector("#four");
const viewOrder = document.querySelector('#viewOrder');

//Adds a menu item to local storage
function AddToStorage(menuItemName, price) {    
    //Fetching the current table
    var currentTable = localStorage.getItem('tableID');
    var tempHolder = localStorage.getItem(currentTable);

    var menuItem = {"itemName":menuItemName, "price":price};

    //Need a way of getting a list like this into JSON form, but somehow 
    //do it through buttons,
    var menuItems = [menuItem, menuItem, menuItem, menuItem];
    
    var arrayLength = menuItems.length;    
    
    for (var i = 0; i < arrayLength; i++) 
    {
        console.log(menuItems[i]);
    } 

    var stringfy = JSON.stringify(menuItems);

    localStorage.setItem(currentTable, stringfy);
}

//Allows to view the storage
function DisplayOrder()  {
    //Fetch the orderlist element
    const orderList = document.querySelector("#lsContent");

    //Fetch the table number
    var currentTable = localStorage.getItem('tableID');
    
    //Fetch the JSON list
    var tempHolder = localStorage.getItem(currentTable);
    
    //Parse the JSON list
    var myJSONparsed = JSON.parse(tempHolder);

    //Loop through array
    var arrayLength = myJSONparsed.length;    
    
    for (var i = 0; i < arrayLength; i++) 
    {
        orderList.textContent = orderList.textContent + " " + myJSONparsed[i].itemName;
    } 
}

//Eventlis for all the buttons
burgers.addEventListener("click", () => {
    AddToStorage("Burger",10);
    //viewStorage();

    //Change Price
    price = price + 10;
    priceSelector.textContent = "£" + price;
});

Breakfasts.addEventListener("click", () => {
    AddToStorage("Breakfasts",11);
    //viewStorage();

    //Change Price
    price = price + 11;
    priceSelector.textContent = "£" + price;
});

num3.addEventListener("click", () => {
    console.log("Hello3")
});

num4.addEventListener("click", () => {
    console.log("Hello4")
});

viewOrder.addEventListener("click", () => {
    DisplayOrder();
})