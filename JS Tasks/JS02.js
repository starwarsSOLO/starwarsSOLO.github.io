const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});