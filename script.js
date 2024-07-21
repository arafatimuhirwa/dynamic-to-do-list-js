document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Step 2: Add task function with Local Storage update
    function addTask(taskText, save = true) {
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
            // Remove from tasks array and update Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        });

        // Append remove button to li
        taskItem.appendChild(removeButton);

        // Append li to ul
        taskList.appendChild(taskItem);

        // Save to Local Storage unless specified not to (for loading tasks)
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Step 3: Attach event listener to Add Task button
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input field
        } else {
            alert('Please enter a task.');
        }
    });

    // Step 4: Attach event listener to Enter key in task input
    const taskInput = document.getElementById('task-input');
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = ''; // Clear input field
            } else {
                alert('Please enter a task.');
            }
        }
    });

    // Step 5: Invoke loadTasks on page load
    loadTasks();
});
