// part1
let name =prompt("Enter your name:");
let age =number(prompt("enter your age :"));
let gender =prompt("Enter your gender:");

if (gender==="male"){
    alert ("Welcom MR."+name);
}else if (gender==="female"){
    alert("welcom Ms ."+name);
}
else {
    alert ("Welcom"+name);
}
// part2

if (age < 16){
    alert("You are not eligible to place an order");
} else{
   
}


// part3

let order =prompt("plz choose your order:Burger,Shawarma,Zinger");
let order_status=" ";
if( order===Burger||
order===Shawarma||
order===Zinger){
    alert ("Your order is being prepared")
}else{
    alert ("Invalid order. Please try again");
}

// part4
let validOrder =(order==="Burger" || order==="Shawarma" 
    || order==="Zinger");

    if (age>=18 && validOrder){
        order_status="confirmed";
    }else if (age <18 || !validOrder){
        order_status="requires verification";
    }


// chalenge

let isAvailabel ;
if (validOrder){
    isAvailabel=true;
}else{
    isAvailabel=false;
}

if (isAvailabel){
    alert("Your order is being prepared");
}else{
    alert ("Invalid order. Please try again");
}


// part5

console.log("Nmae:"+name);
console.log("Age:"+age);
console.log("Gender:"+gender);
console.log("Order:"+order);
console.log("Status:"+order_status);

document.write("<h2>order summery</h2>");
document.write("Customer Nmae :"+name+"<br>");
document.write("Age:"+age+"<br>");
document.write("Gender:"+gender+"<br>");
document.write("Order:"+order+"<br>");
document.write("order statuse"+order_status+"<br>");

