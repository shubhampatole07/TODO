const taskInput = document.getElementById("taskInput");

const addTaskButton = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

const clearTasksButton = document.getElementById("clearTasks");


// Add Task
addTaskButton.addEventListener("click", addTask);


function addTask() {

    const taskText = taskInput.value.trim();

    // Check empty input
    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create list item
    const listItem = document.createElement("li");

    listItem.className = "task-item";


    // Create task text
    const task = document.createElement("span");

    task.className = "task-text";

    task.textContent = taskText;


    // Complete task
    task.addEventListener("click", function () {

        task.classList.toggle("completed");

    });


    // Create Delete button
    const deleteButton = document.createElement("button");

    deleteButton.className = "delete-btn";

    deleteButton.textContent = "Delete";


    // Delete task
    deleteButton.addEventListener("click", function () {

        listItem.remove();

    });


    // Add task text to list item
    listItem.appendChild(task);

    // Add delete button to list item
    listItem.appendChild(deleteButton);


    // Add list item to task list
    taskList.appendChild(listItem);


    // Clear input box
    taskInput.value = "";

}


// Clear All Tasks
clearTasksButton.addEventListener("click", function () {

    taskList.innerHTML = "";

});