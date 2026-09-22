// Part 1
let customerName = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let gender = prompt("Enter your gender (male or female):");

if (gender === "male") {
    alert("Welcome Mr. " + customerName);
} else if (gender === "female") {
    alert("Welcome Ms. " + customerName);
} else {
    alert("Welcome " + customerName);
}

// Part 2
if (age < 16) {
    alert("You are not eligible to place an order");
} else {

    // Part 3
    let order = prompt("Please choose your order: Burger, Shawarma, Zinger");
    let orderStatus = "";

    if (order === "Burger" || order === "Shawarma" || order === "Zinger") {
        alert("Your order is being prepared");
    } else {
        alert("Invalid order. Please try again");
    }

    // Part 4
    let validOrder = (order === "Burger" || order === "Shawarma" || order === "Zinger");

    if (age >= 18 && validOrder) {
        orderStatus = "Order confirmed";
    } else if (age < 18 || !validOrder) {
        orderStatus = "Order requires verification";
    }
    alert(orderStatus);

    // Extra Challenge
    let isAvailable;
    if (validOrder) {
        isAvailable = true;
    } else {
        isAvailable = false;
    }

    if (isAvailable) {
        alert("Your order can be prepared");
    } else {
        alert("Your order cannot be prepared");
    }

    // Part 5
    console.log("Name: " + customerName);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Order: " + order);
    console.log("Status: " + orderStatus);

    document.write("<h2>Order Summary</h2>");
    document.write("Customer Name: " + customerName + "<br>");
    document.write("Age: " + age + "<br>");
    document.write("Gender: " + gender + "<br>");
    document.write("Order: " + order + "<br>");
    document.write("Order Status: " + orderStatus + "<br>");
}