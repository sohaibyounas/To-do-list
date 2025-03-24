// Add task
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === "") {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    storeTasks();
}

// click to add task
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeTasks();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeTasks()
    }

}, false);


// click to add task by press Enter Button
inputBox.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTask();
        storeTasks();
    }
});


// Store Tasks
function storeTasks() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Get Tasks
function getTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

getTasks()
