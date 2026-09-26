
let nameInput = document.getElementById("customerName");
let orderSelect = document.getElementById("order");
let button = document.getElementById("submitBtn");
let result = document.getElementById("result");



let inputs = document.getElementsByTagName("input");



let box = document.getElementsByClassName("box");



let title = document.querySelector("h1");


// onclick
function showOrder() {

    let name = nameInput.value;
    let order = orderSelect.value;

    result.innerHTML = "Hello " + name + "! Your order is " + order + ".";
}


function changeColor() {
    button.style.backgroundColor = "orange";
}



function returnColor() {
    button.style.backgroundColor = "green";
}