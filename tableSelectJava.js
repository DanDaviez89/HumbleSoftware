//This prints out what table the user is on
const title = document.querySelector("#title");
title.textContent = localStorage.getItem("tableID");
DisplayPrice();
DisplayOrder();

//Opens up the menu system
document.getElementById('Add').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
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

    //TotalPrice
    const priceSelector = document.querySelector("#Total");

    priceSelector.textContent = "£" + price;
}

//Eventlis for all the buttons
burgers.addEventListener("click", () => {
    AddToStorage("Burger",10);
    DisplayPrice();
});

Breakfasts.addEventListener("click", () => {
    AddToStorage("Breakfasts",11);
    DisplayPrice();
});


//Allows to view the storage
function DisplayOrder()  {
    //Fetch the orderlist element
    const orderList = document.querySelector("#lsContent");

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
            orderList.textContent = orderList.textContent + " " + myJSONparsed[i].itemName;
        } 
    }
}

viewOrder.addEventListener("click", () => {
    DisplayOrder();
})