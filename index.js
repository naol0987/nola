function addTask() {
    // Get the value of the input field
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Append the new task to the task list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field for the next task
        taskInput.value = '';
    }
}