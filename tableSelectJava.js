//This prints out what table the user is on
const title = document.querySelector("#title");
title.textContent = "Table " + localStorage.getItem("tableID");

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

//TableOrders Array
var tableOrders = "";

//Save over all the menu buttons
const orderList = document.querySelector("#orderList");
const burgers = document.querySelector("#burgers");
const Breakfasts = document.querySelector("#Breakfasts");
const num3 = document.querySelector("#three");
const num4 = document.querySelector("#four");

//Eventlis for all the buttons
burgers.addEventListener("click", () => {

    orderList.textContent += "Burger - 5 ";
    price = price + 5;
    priceSelector.textContent = "£" + price;
});

Breakfasts.addEventListener("click", () => {
    console.log("Hello2")
});

num3.addEventListener("click", () => {
    console.log("Hello3")
});

num4.addEventListener("click", () => {
    console.log("Hello4")
});
