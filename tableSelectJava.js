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

    if (tempHolder !== ""){
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
 
//Hot Drink Section
//fetch the class arrays
const coffeeButtons = document.querySelectorAll('.coffee');
const syrupButtons = document.querySelectorAll('.syrup');
const milkButtons = document.querySelectorAll('.milk');
const iceButtons = document.querySelectorAll('.ice');
const decafButtons = document.querySelectorAll('.decaf');

//Coffee buttons
coffeeButtons.forEach(function(element) {
    //add event listener to every button
    element.addEventListener('click', function() {
        //Search for active and turn it to normal
        coffeeButtons.forEach(function(element) {
            if (element.className === 'c-btn coffee active') {
                //Change active to normal
                element.className = 'c-btn coffee';
            }
        });

        //Change current button click to active
        element.className = 'c-btn coffee active';
    });
});

//Milk Buttons
milkButtons.forEach(function(element) {
    //add event listener to every button
    element.addEventListener('click', function() {
        //Search for active and turn it to normal
        milkButtons.forEach(function(element) {
            if (element.className === 'c-btn milk active') {
                //Change active to normal
                element.className = 'c-btn milk';
            }
        });

        //Change current button click to active
        element.className = 'c-btn milk active';
    });
});

//Syrup Buttons
syrupButtons.forEach(function(element) {
    //add event listener to every button
    element.addEventListener('click', function() {
        var skip = 0; 
        
        if (element.className === 'c-btn syrup active') {
            //Change active to normal
            element.className = 'c-btn syrup';
            skip = 1;
        }

        //Search for active and turn it to normal
        syrupButtons.forEach(function(element) {
            if (element.className === 'c-btn syrup active') {
                //Change active to normal
                element.className = 'c-btn syrup';
            }
        });

        if(skip === 0)
        {
            //Change current button click to active
            element.className = 'c-btn syrup active';
        }

    });
});

//Ice Buttons
iceButtons.forEach(function(element) {
    //add event listener to every button
    element.addEventListener('click', function() {
        //Search for active and turn it to normal
        iceButtons.forEach(function(element) {
            if (element.className === 'c-btn ice active') {
                //Change active to normal
                element.className = 'c-btn ice';
            }
        });

        //Change current button click to active
        element.className = 'c-btn ice active';
    });
});

//Decaf Buttons
decafButtons.forEach(function(element) {
    //add event listener to every button
    element.addEventListener('click', function() {
        //Search for active and turn it to normal
        decafButtons.forEach(function(element) {
            if (element.className === 'c-btn decaf active') {
                //Change active to normal
                element.className = 'c-btn decaf';
            }
        });

        //Change current button click to active
        element.className = 'c-btn decaf active';
    });
});

//Take coffee and styrup and display "You have ordered a Coffee Styrup
const sumitButton = document.getElementById('Enter');

sumitButton.addEventListener('click', function() {
    var coffee;
    var milk;
    var syrup = "";
    var ice;
    var decaf;
    var price = 2;

    //Search through coffee buttons for active
    coffeeButtons.forEach(function(element) {
        if (element.className === 'c-btn coffee active') {
            coffee = element.value;
        }

        //Check which coffee was slected, add to price 
    });

    //Search through milk buttons for active
    milkButtons.forEach(function(element) {
        var skip = 0;
        
        if (element.className === 'c-btn milk active') {
            milk = element.value;

            if(element.value === 'Normal') {
                skip = 1;
            }

            if(skip === 0) {
                price = price + 0.40
            }
        }
    });

    //Search through syrup buttons for active
    syrupButtons.forEach(function(element) {
        var found = 0;

        if (element.className === 'c-btn syrup active') {
            syrup = element.value;
            found = 1;
        }
        
        if(found === 1) {
            price = price + 0.40;
        }
    });

    //Search through ice buttons for active
    iceButtons.forEach(function(element) {
        if (element.className === 'c-btn ice active') {
            ice = element.value;
        }
    });

    //Search through decaf buttons for active
    decafButtons.forEach(function(element) {
        if (element.className === 'c-btn decaf active') {
            decaf = element.value;
        }
    });

    //Create the string that will be saved
    var drink = coffee

    if(milk != "Normal"){
        drink += " " + milk;
    }

    if(syrup != "") {
        drink += " " + syrup;
    }

    if(decaf != "No Decaf") {
        drink += " " + decaf;
    }

    if(ice != "No Ice") {
        drink += " " + ice;
    }

    AddToStorage(drink, price);
});

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

//Pop Ups
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
            //Creating Need Elemenets
            const menuItemCon = document.createElement("div");
            const menuItemTextCon = document.createElement("div");
            const menuItemButtons = document.createElement("div");
            const menuItemName = document.createElement("a");
            const menuItemPrice = document.createElement("a");
            const editMenuItem = document.createElement("button");
            const deleteMenuItem = document.createElement("button");
    
            menuItemCon.className = "menuItemCon";
            menuItemTextCon.className = "menuItemTextCon";
            menuItemButtons.className = "menuItemButtons";
    
            menuItemName.className = "menuItemText";
            menuItemName.textContent += myJSONparsed[i].itemName;

            menuItemPrice.className = "menuItemText";
            menuItemPrice.textContent += "£" + myJSONparsed[i].price;
    
            editMenuItem.className = "menu-item-button";
            editMenuItem.textContent = "E";
    
            deleteMenuItem.className = "menu-item-button";
            deleteMenuItem.textContent = "X"
                
            orderList.appendChild(menuItemCon);   
        
            menuItemCon.appendChild(menuItemTextCon);
            menuItemCon.appendChild(menuItemButtons);

            menuItemTextCon.appendChild(menuItemName);
            menuItemTextCon.appendChild(menuItemPrice);
            menuItemButtons.appendChild(editMenuItem);
            menuItemButtons.appendChild(deleteMenuItem);

            //Need to delete from list aswell
            deleteMenuItem.addEventListener('click', function() {
                for (var i = 0; i < arrayLength; i++) 
                {
                    if(myJSONparsed[i].itemName === menuItemName.textContent) {
                        myJSONparsed[i];

                        myJSONparsed.splice(i, 1);

                        var stringfy = JSON.stringify(myJSONparsed);
                        localStorage.setItem(currentTable, stringfy);
                        break;
                    }
                }

                DisplayPrice();
                DisplayOrder();
            });
        } 
    }
}

viewOrder.addEventListener("click", () => {
    DisplayOrder();
})


//The Menu Event Listeners
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
    AddToStorage("Rarebit", 6.50);
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

//Cold Section
//Bar
milkshake.addEventListener("click", () => {
    AddToStorage("Milkshake", 2);
});

smoothie.addEventListener("click", () => {
    AddToStorage("Smoothie", 3.50);
});

icedTea.addEventListener("click", () => {
    AddToStorage("Iced Tea", 3);
});

coldMilk.addEventListener("click", () => {
    AddToStorage("Cold Milk", 1.50);
});

//Fridge
frobisher.addEventListener("click", () => {
    AddToStorage("Frobisher", 2);
});

sanpellearino.addEventListener("click", () => {
    AddToStorage("Sanpellearino", 2);
});

fetimas.addEventListener("click", () => {
    AddToStorage("Fetimas", 2.50);
});

lemonaid.addEventListener("click", () => {
    AddToStorage("Lemonaid", 2.50);
});

sparklingWater.addEventListener("click", () => {
    AddToStorage("Sparkling Water", 1.50);
});

stillWater.addEventListener("click", () => {
    AddToStorage("Still Water", 1.50);
});

icedFlatWhite.addEventListener("click", () => {
    AddToStorage("Iced Flat White", 2.40);
});

//Sweets
Brownie.addEventListener("click", () => {
    AddToStorage("Brownie", 2.50);
});

Donut.addEventListener("click", () => {
    AddToStorage("Donut", 3);
});

rockyRoad.addEventListener("click", () => {
    AddToStorage("Rocky Road", 2.50);
});

//Randoms
coffeBagBig.addEventListener("click", () => {
    AddToStorage("1kg Coffee Bag", 18);
});

coffeBagSmall.addEventListener("click", () => {
    AddToStorage("227g Coffee Bag", 8);
});