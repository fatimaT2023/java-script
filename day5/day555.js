
let inputText = document.getElementById("inputtext");
let addButton = document.getElementById("addbtn");
let listTask = document.getElementById("listtask");

let arr = JSON.parse(localStorage.getItem("task")) ;


function showTasks() {

    listTask.innerHTML = " ";

    for (let i = 0; i < arr.length; i++) {

        listTask.innerHTML +=
            "<p>" +
            arr[i] +
            " <button onclick='0000(" + i + ")'>Delete</button>" +
            "</p>";
    }
}

addButton.onclick = function () {

    let task = inputText.value;

    if (task == "") {
        alert("Please enter a task");
     
    }

    arr.push(task);

    localStorage.setItem("task", JSON.stringify(arr));

    showTasks();

    inputText.value = "";
};

function deleteTask(index) {

    arr.splice(index,1);


    localStorage.setItem("task", JSON.stringify(arr));

    showTasks();

}

showTasks();