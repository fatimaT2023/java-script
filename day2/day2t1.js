
let menu = [
    {
        name: "burgre",
        price: 2.5,
        category: "fast food",
        available: true 
    },
    {
        name: "ziger", 
        price: 3.5,
        category: "fast food",
        available: false
    },
    {
        name: "shawrma",
        price: 1.5, 
        category: "fast food",
        available: true
    },
    {
        name: "salad",
        price: 4,
        category: "healthy food", 
        available: false
    },
    {
        name: "avocado",
        price: 6, 
        category: "healthy food",
        available: true
    }
]; 


function showMenu() {

    for (let i = 0; i < menu.length; i++) {

        console.log(
            menu[i].name + " - $" + menu[i].price
        );
    }  
}


showMenu();

// 3 for        +   for in
let ask = prompt("Please enter your order from the menu:");
//  return a only string 
let selected = null;
// means we not slected a food yet 

while (selected === null) {
    // cause wo dont know how many times a user will write wrong 

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].available === false) {
            continue;
        }

        if (menu[i].name === ask) {

            selected = menu[i];

            break;
        }
    }

    if (selected === null) {

        ask = prompt(
            "Food is not available. Please choose another food:"
        );
    }
}


console.log("Selected Food:");



// properties 
for (let property in selected) {

    console.log(property + ": " + selected[property]);
}


let quantity = Number(prompt("Enter quantity:"));

let totalPrice = selected.price * quantity;


document.write("<h2>Your Order</h2>");
document.write("<p>Food: " + selected.name + "</p>");
document.write("<p>Price: $" + selected.price + "</p>");
document.write("<p>Quantity: " + quantity + "</p>");
document.write("<p>Total Price: $" + totalPrice + "</p>");

