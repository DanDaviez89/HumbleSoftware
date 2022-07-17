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

//Opens up the Menu system
document.getElementById('Add').addEventListener("click", function() {
	document.querySelector('#menuSystem').style.display = "flex";
});

document.querySelector('#menuClose').addEventListener("click", function() {
	document.querySelector('#menuSystem').style.display = "none";
});

//Food Section
document.getElementById('foodMenu').addEventListener("click", function() {
	document.querySelector('#foodSystem').style.display = "flex";
});

document.querySelector('#foodSystemClose').addEventListener("click", function() {
	document.querySelector('#foodSystem').style.display = "none";
});

//Cold Section
document.getElementById('coldMenu').addEventListener("click", function() {
	document.querySelector('#coldSystem').style.display = "flex";
});

document.querySelector('#coldClose').addEventListener("click", function() {
	document.querySelector('#coldSystem').style.display = "none";
});

//Sweet Section
document.getElementById('sweetMenu').addEventListener("click", function() {
	document.querySelector('#sweetSystem').style.display = "flex";
});

document.querySelector('#sweetClose').addEventListener("click", function() {
	document.querySelector('#sweetSystem').style.display = "none";
});

//Random Section
document.getElementById('randomMenu').addEventListener("click", function() {
	document.querySelector('#randomSystem').style.display = "flex";
});

document.querySelector('#randomClose').addEventListener("click", function() {
	document.querySelector('#randomSystem').style.display = "none";
});

//Hot Section
document.getElementById('hotMenu').addEventListener("click", function() {
	document.querySelector('#hotSystem').style.display = "flex";
});

document.querySelector('#hotClose').addEventListener("click", function() {
	document.querySelector('#hotSystem').style.display = "none";
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

    DisplayPrice();
    DisplayOrder();
}

function DisplayPrice() 
{
    var price = GetPrice();

    //TotalPrice
    const priceSelector = document.querySelector("#Total");

    priceSelector.textContent = "£" + price;
}

//The Menu
//Main Dishes
fullBreakfast.addEventListener("click", () => {
    AddToStorage("Full Breakfast",9);
});

veganBreakfast.addEventListener("click", () => {
    AddToStorage("Vegan Breakfast", 9);
});

welshBreakfast.addEventListener("click", () => {
    AddToStorage("Welsh Breakfast", 10);
});

avoToast.addEventListener("click", () => {
    AddToStorage("Avo on Toast", 7);
});

chickenClwb.addEventListener("click", () => {
    AddToStorage("Chicken Clwb", 9);
});

veganHash.addEventListener("click", () => {
    AddToStorage("Vegan Hash", 9);
});

eggsBenedict.addEventListener("click", () => {
    AddToStorage("Eggs Benedict", 9);
});

humbleWaffles.addEventListener("click", () => {
    AddToStorage("Humble Waffles", 9);
});

//Bagel
halloumiBagel.addEventListener("click", () => {
    AddToStorage("Halloumi Bagel", 8);
});

chickenBagel.addEventListener("click", () => {
    AddToStorage("Chicken Bagel", 8);
});

salmonBagel.addEventListener("click", () => {
    AddToStorage("Salmon Bagel", 8);
});

sausageBagel.addEventListener("click", () => {
    AddToStorage("Sausage Bagel", 8);
});

//Burgers
sloppH.addEventListener("click", () => {
    AddToStorage("Sloppy H", 10);
});

veggH.addEventListener("click", () => {
    AddToStorage("Vegg H", 10);
});

chickenH.addEventListener("click", () => {
    AddToStorage("Chicken H", 10);
});

veganH.addEventListener("click", () => {
    AddToStorage("Vegan H", 10);
});

//Welsh Rarebit
normalRare.addEventListener("click", () => {
    AddToStorage("Normal Rarebit", 6.50);
});

veganRare.addEventListener("click", () => {
    AddToStorage("Vegan Rarebit", 6.50);
});

normalRarePoach.addEventListener("click", () => {
    AddToStorage("Rarebit + Poach", 6.50);
});

//Pancakes
bnhPancake.addEventListener("click", () => {
    AddToStorage("Banana | Nutella | Hazelnut Pancake", 8);
});

sbyPancake.addEventListener("click", () => {
    AddToStorage("Strawberry | Blueberry | Yourgut Pancake", 8);
});

bsaPancake.addEventListener("click", () => {
    AddToStorage("Bacon | Spinach | Avo Pancake", 8);
});

//Waffles
bnhWaffles.addEventListener("click", () => {
    AddToStorage("Banana | Nutella | Hazelnut Waffles", 8);
});

sbyWaffles.addEventListener("click", () => {
    AddToStorage("Strawberry | Blueberry | Yourgut Waffles", 8);
});

bsaWaffles.addEventListener("click", () => {
    AddToStorage("Bacon | Spinach | Avo Waffles", 8);
});

//Something Simple
sourdough.addEventListener("click", () => {
    AddToStorage("sourdough", 2.50);
});

whiteToast.addEventListener("click", () => {
    AddToStorage("White Toast", 2.50);
});

brownToast.addEventListener("click", () => {
    AddToStorage("Brown Toast", 2.50);
});

teaCake.addEventListener("click", () => {
    AddToStorage("Tea Cake", 2.50);
});

baconRoll.addEventListener("click", () => {
    AddToStorage("Bacon Roll", 4);
});

sausageRoll.addEventListener("click", () => {
    AddToStorage("Sausage Roll", 4);
});

HacaiBowl.addEventListener("click", () => {
    AddToStorage("Hacai Bowl", 7);
});

wolfy.addEventListener("click", () => {
    AddToStorage("Wolfy", 3);
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
            const menuItemsHTML = document.createElement("a");
            menuItemsHTML.innerHTML = myJSONparsed[i].itemName + ": £" + myJSONparsed[i].price + "<br>";
            orderList.appendChild(menuItemsHTML);
        } 
    }
}

viewOrder.addEventListener("click", () => {
    DisplayOrder();
})