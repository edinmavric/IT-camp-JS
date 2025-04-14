const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.querySelector('button');

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    const removeBtn = document.createElement('span');
    removeBtn.textContent = '✖';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', event => {
        event.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
};

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        addTask();
    }
});
