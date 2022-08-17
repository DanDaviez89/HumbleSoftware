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
const table13 = document.querySelector("#table13");
const table14 = document.querySelector("#table14");
const table15 = document.querySelector("#table15");
const addTables = document.querySelector("#addTables");

table1.addEventListener("click", () => {
    localStorage.setItem('tableID', 'One');
});

table2.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Two');
});

table3.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Three');
});

table4.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Four');
});

table5.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Five');
});

table6.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Six');
});

table7.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Seven');
});

table8.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Eight');
});

table9.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Nine');
});

table10.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Ten');
});

table11.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Elven');
});

table12.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Twelve');
});

table13.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Thirteen');
});

table14.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Fourteen');
});

table15.addEventListener("click", () => {
    localStorage.setItem('tableID', 'Fifteen');
});

//Trying to pass in the start of the array to local storage
resetTables.addEventListener("click", () => { 
    localStorage.setItem("One","");
    localStorage.setItem("Two","");
    localStorage.setItem("Three","");
    localStorage.setItem("Four","");
    localStorage.setItem("Five","");
    localStorage.setItem("Six","");
    localStorage.setItem("Seven","");
    localStorage.setItem("Eight","");
    localStorage.setItem("Nine","");
    localStorage.setItem("Ten","");
    localStorage.setItem("Elven","");
    localStorage.setItem("Twelve","");
    localStorage.setItem("Thirteen","");
    localStorage.setItem("Fourteen","");
    localStorage.setItem("Fifteen","");
});
