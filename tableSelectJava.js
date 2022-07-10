//This prints out what table the user is on
const title = document.querySelector("#title");
title.textContent = localStorage.getItem("tableID");
DisplayPrice();
DisplayOrder();

//This function gets the total price 
function GetPrice() 
{
    //Fetching the current table
    var currentTable = localStorage.getItem('tableID');
    //fetching local storage
    var tempHolder = localStorage.getItem(currentTable);

    var price = 0;

    if (tempHolder != ""){
        //Parsing Local Storage
        var parsed = JSON.parse(tempHolder);

        //Works out price
        var arrayLength = parsed.length;

        for (var i = 0; i < arrayLength; i++) 
        {
            var tempPrice = parsed[i].price;
            price = price + tempPrice;
        } 
    }

    return price;
}

//Discount Section
//Opens up the Discount pagge
document.getElementById('Discount').addEventListener("click", function() {
	document.querySelector('#discountPage').style.display = "flex";
});

document.querySelector('#discountClose').addEventListener("click", function() {
	document.querySelector('#discountPage').style.display = "none";
});

//Save over all the menu buttons
const zero = document.querySelector("#zero");
const ten = document.querySelector("#ten");
const twenty = document.querySelector("#twenty");
const tfive = document.querySelector('#tfive');
const fifty = document.querySelector('#fifty');

//Discount buttons
zero.addEventListener("click", function() {
    var price = GetPrice();
    price = price;

    //TotalPrice
    const priceSelector = document.querySelector("#Total");
    priceSelector.textContent = "£" + price;
});

ten.addEventListener("click", function() {
    var price = GetPrice();
    var discountPrice = price / 100 * 10;
    var price = price - discountPrice;

    //TotalPrice
    const priceSelector = document.querySelector("#Total");
    priceSelector.textContent = "Discount Applied: £" + price;
});

twenty.addEventListener("click", function() {
    var price = GetPrice();
    var discountPrice = price / 100 * 20;
    var price = price - discountPrice;

    //TotalPrice
    const priceSelector = document.querySelector("#Total");
    priceSelector.textContent = "Discount Applied: £" + price;
});

tfive.addEventListener("click", function() {
    var price = GetPrice();
    var discountPrice = price / 100 * 25;
    var price = price - discountPrice;

    //TotalPrice
    const priceSelector = document.querySelector("#Total");
    priceSelector.textContent = "Discount Applied: £" + price;
});

fifty.addEventListener("click", function() {
    var price = GetPrice();
    price = price / 2;

    //TotalPrice
    const priceSelector = document.querySelector("#Total");
    priceSelector.textContent = "Discount Applied: £" + price;
});

//Menu Section
//Opens up the Menu system
document.getElementById('Add').addEventListener("click", function() {
	document.querySelector('#menuSystem').style.display = "flex";
});

document.querySelector('#menuClose').addEventListener("click", function() {
	document.querySelector('#menuSystem').style.display = "none";
});

//Save over all the menu buttons
const orderList = document.querySelector("#orderList");
const burgers = document.querySelector("#burgers");
const Breakfasts = document.querySelector("#Breakfasts");
const viewOrder = document.querySelector('#viewOrder');

//Adds a menu item to local storage
function AddToStorage(menuItemName, price) {    
    //Fetching the current table
    var currentTable = localStorage.getItem('tableID');

    //fetching local storage
    var tempHolder = localStorage.getItem(currentTable);

    var menuItem = {"itemName":menuItemName, "price":price};

    //If local storage is empty
    if (tempHolder === ""){
        var menuItems = [menuItem];
        var stringfy = JSON.stringify(menuItems);
        localStorage.setItem(currentTable, stringfy);
    }

    //If the local storage is not
    if (tempHolder != ""){
        var parsed = JSON.parse(tempHolder);
        parsed.push(menuItem);
    
        var stringfy = JSON.stringify(parsed);
        localStorage.setItem(currentTable, stringfy);
    }
}

function DisplayPrice() 
{
    var price = GetPrice();

    //TotalPrice
    const priceSelector = document.querySelector("#Total");

    priceSelector.textContent = "£" + price;
}

//Eventlis for all the buttons
burgers.addEventListener("click", () => {
    AddToStorage("Burger",10);
    DisplayPrice();
    DisplayOrder();
});

Breakfasts.addEventListener("click", () => {
    AddToStorage("Breakfasts",11);
    DisplayPrice();
    DisplayOrder();
});


//Allows to view the storage
function DisplayOrder()  {
    //Fetch the orderlist element and reset content
    const orderList = document.querySelector("#lsContent");
    orderList.textContent = "";

    //Fetch the table number
    var currentTable = localStorage.getItem('tableID');
    
    //Fetch the JSON list
    var tempHolder = localStorage.getItem(currentTable);

    if (tempHolder != ""){
        //Parse the JSON list
        var myJSONparsed = JSON.parse(tempHolder);

        //Loop through array
        var arrayLength = myJSONparsed.length;    
    
        for (var i = 0; i < arrayLength; i++) 
        {
            orderList.innerHTML = orderList.textContent + " " + myJSONparsed[i].itemName + ": £" + myJSONparsed[i].price;
        } 
    }
}

viewOrder.addEventListener("click", () => {
    DisplayOrder();
})