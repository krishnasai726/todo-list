document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addBtn = document.getElementById('add-btn');
    const searchInput = document.getElementById('search');

    // Add a new task
    addBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    // Remove a task
    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const tasks = taskList.getElementsByTagName('li');
        Array.from(tasks).forEach(task => {
            const taskText = task.firstChild.textContent.toLowerCase();
            if (taskText.indexOf(searchText) !== -1) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    });

    // Function to add a new task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
