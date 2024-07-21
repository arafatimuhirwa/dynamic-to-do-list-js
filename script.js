document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        let taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create new li element
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event to remove button
            removeButton.addEventListener('click', function() {
                taskItem.remove();
            });

            // Append remove button to li
            taskItem.appendChild(removeButton);

            // Append li to ul
            taskList.appendChild(taskItem);

            // Clear task input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Step 3: Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 4: Invoke addTask on DOMContentLoaded
    addTask();
});
