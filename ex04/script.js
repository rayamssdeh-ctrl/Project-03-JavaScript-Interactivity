// Select DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const totalCountSpan = document.getElementById("total-count");

// State variable for total tasks
let totalTasks = 0;

function updateTaskCount() {
    totalCountSpan.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();
    
    // Validate empty input
    if (taskText === "") return;

    // Create dynamic li element
    const li = document.createElement("li");
    li.className = "task-item";

    // Task text span
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Actions container
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        totalTasks--;
        updateTaskCount();
    });

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(actionsDiv);

    // Append to task list
    taskList.appendChild(li);

    // Update count and clear input
    totalTasks++;
    updateTaskCount();
    taskInput.value = "";
}

// Event Listeners for button click and Enter key press (keydown)
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
