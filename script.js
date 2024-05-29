document.getElementById("addTask").addEventListener("click", addTask);

function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input.trim() !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("div");
        taskItem.className = "task";

        var taskText = document.createElement("span");
        taskText.textContent = input;

        var buttonContainer = document.createElement("div");

        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.className = "complete-button";
        completeButton.addEventListener("click", function() {
            taskText.classList.toggle("task-complete");
            if (taskText.classList.contains("task-complete")) {
                taskList.appendChild(taskItem);
            } else {
                taskList.insertBefore(taskItem, taskList.firstChild);
            }
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);
        taskItem.appendChild(taskText);
        taskItem.appendChild(buttonContainer);
        taskList.insertBefore(taskItem, taskList.firstChild);

        document.getElementById("taskInput").value = "";
    } else {
        alert("Please enter a valid task.");
    }
}
