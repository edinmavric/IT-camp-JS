// Change text on button click
const changeTextBtn = document.getElementById('changeTextBtn');
const targetText = document.getElementById('textTarget');

changeTextBtn.addEventListener('click', () => {
    targetText.textContent = 'You clicked the button!';
});

// Toggle dark mode
const toggleModeBtn = document.getElementById('toggleMode');

toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Swap image
const swapImageBtn = document.getElementById('swapImageBtn');
const image = document.getElementById('myImage');
let toggled = false;

swapImageBtn.addEventListener('click', () => {
    toggled = !toggled;
    image.src = toggled
        ? 'https://placehold.co/150/0000FF/FFFFFF'
        : 'https://placehold.co/150';
});

// Character counter
const userInput = document.getElementById('userInput');
const charCount = document.getElementById('charCount');

userInput.addEventListener('input', event => {
    charCount.textContent = event.target.value.length;
});

const toDoInput = document.getElementById('to-do-input');
const toDoList = document.getElementById('to-do-list');

toDoInput.addEventListener('keypress', event => {
    if (event.key.toLowerCase() === 'enter') {
        const li = document.createElement('li');
        li.textContent = event.target.value;
        if (event.target.value.trim() !== '') {
            toDoList.appendChild(li);
        }
        event.target.value = '';
    }
});
