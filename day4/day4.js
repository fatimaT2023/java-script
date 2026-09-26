
function checkForm() {

    let username = document.getElementById("username").value;
    let usernameRegex = /^\S+$/;

    if (!usernameRegex.test(username)) {
        alert("Invalid username");
        return;
    }

    let password = document.getElementById("password").value;
    let passwordRegex = /^(?=.*[0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
        alert("Invalid password");
        return;
    }

    let phone = document.getElementById("phone").value;
    let phoneRegex = /^07[0-9]{8}$/;

    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number");
        return;
    }

    let order = document.getElementById("order").value;

    document.getElementById("welcome").innerHTML =
        "Welcome, " + username;

    localStorage.setItem("order", order);

    document.getElementById("savedOrder").innerHTML =
        "Saved Order: " + localStorage.getItem("order");

    sessionStorage.setItem("username", username);

    document.getElementById("savedUsername").innerHTML =
        "Saved Username: " + sessionStorage.getItem("username");
}
