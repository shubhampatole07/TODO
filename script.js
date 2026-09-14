// Get tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Get HTML elements
const taskInput = document.getElementById("taskInput");

const addTaskButton = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

const clearTasksButton = document.getElementById("clearTasks");



// Create and display task
function createTask(taskData) {

    // Create list item
    const listItem = document.createElement("li");

    listItem.className = "task-item";


    // Create checkbox
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.className = "task-checkbox";


    // Set checkbox according to saved status
    checkbox.checked = taskData.completed;


    // Create task text
    const task = document.createElement("span");

    task.className = "task-text";

    task.textContent = taskData.text;


    // Show completed task
    if (taskData.completed) {

        task.classList.add("completed");

    }


    // Mark task complete
    checkbox.addEventListener("change", function () {

        taskData.completed = checkbox.checked;

        task.classList.toggle("completed", checkbox.checked);


        // Save updated task
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });



    // Create Delete button
    const deleteButton = document.createElement("button");

    deleteButton.className = "delete-btn";

    deleteButton.textContent = "Delete";


    // Delete task
    deleteButton.addEventListener("click", function () {

        // Remove from screen
        listItem.remove();


        // Remove from tasks array
        const index = tasks.indexOf(taskData);

        if (index !== -1) {

            tasks.splice(index, 1);

        }


        // Update Local Storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });



    // Add checkbox
    listItem.appendChild(checkbox);


    // Add task text
    listItem.appendChild(task);


    // Add delete button
    listItem.appendChild(deleteButton);


    // Add complete task to list
    taskList.appendChild(listItem);

}



// Add Task
addTaskButton.addEventListener("click", addTask);


function addTask() {

    const taskText = taskInput.value.trim();


    // Check empty input
    if (taskText === "") {

        alert("Please enter a task.");

        return;

    }


    // Create task object
    const taskData = {

        text: taskText,

        completed: false

    };


    // Add task to array
    tasks.push(taskData);


    // Save task in Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));


    // Display task
    createTask(taskData);


    // Clear input
    taskInput.value = "";

}



// Clear All Tasks
clearTasksButton.addEventListener("click", function () {

    // Remove tasks from screen
    taskList.innerHTML = "";


    // Empty tasks array
    tasks = [];


    // Remove from Local Storage
    localStorage.removeItem("tasks");

});



// Load saved tasks when page opens
tasks.forEach(function(taskData) {

    createTask(taskData);

});