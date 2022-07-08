const table1 = document.querySelector("#table1");
const table2 = document.querySelector("#table2");
const table3 = document.querySelector("#table3");
const table4 = document.querySelector("#table4");
const table5 = document.querySelector("#table5");
const table6 = document.querySelector("#table6");
const table7 = document.querySelector("#table7");
const table8 = document.querySelector("#table8");
const table9 = document.querySelector("#table9");
const table10 = document.querySelector("#table10");
const table11 = document.querySelector("#table11");
const table12 = document.querySelector("#table12");
const addTables = document.querySelector("#addTables");

table1.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableOne');
});

table2.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableTwo');
});

table3.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableThree');
});

table4.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableFour');
});

table5.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableFive');
});

table6.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableSix');
});

table7.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableSeven');
});

table8.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableEight');
});

table9.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableNine');
});

table10.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableTen');
});

table11.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableEl');
});

table12.addEventListener("click", () => {
    localStorage.setItem('tableID', 'tableTw');
});

const str = '"data": [ ]';

addTables.addEventListener("click", () => { 
    localStorage.setItem("tableOne",str);
    localStorage.setItem("tableTwo",str);
    localStorage.setItem("tableThree",str);
    localStorage.setItem("tableFour",str);
    localStorage.setItem("tableFive",str);
    localStorage.setItem("tableSix",str);
    localStorage.setItem("tableSeven",str);
    localStorage.setItem("tableEight",str);
    localStorage.setItem("tableNine",str);
    localStorage.setItem("tableTen",str);
    localStorage.setItem("tableEl",str);
    localStorage.setItem("tableTw",str);
});
