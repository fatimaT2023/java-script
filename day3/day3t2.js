let text = document.querySelector("div");
let font = document.querySelector("select");
let options = document.getElementsByTagName("input");

font.onchange = function () {
    text.style.fontFamily = font.value;
};

options[0].onclick = function () {
    text.style.fontStyle = "italic";
};

options[1].onclick = function () {
    text.style.fontWeight = "bold";
};

options[2].onclick = function () {
    text.style.textDecoration = "underline";
};