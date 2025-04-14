// Selektovanje elemenata
const listItems = document.querySelectorAll('#my-list li');
const markAllBtn = document.getElementById('mark-all');
const deleteLastBtn = document.getElementById('delete-last');

// Dodaj dugme "Resetuj"
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Resetuj';
document.body.appendChild(resetBtn);

// Dodaj brojač završenih zadataka
const counter = document.createElement('p');
document.body.appendChild(counter);

// Funkcija za ažuriranje brojača
function updateCounter() {
    const doneCount = document.querySelectorAll('#my-list li.done').length;
    counter.textContent = `Završeno zadataka: ${doneCount}`;
}

// Dodavanje klika na svaki <li>
function attachClickListeners() {
    const tasks = document.querySelectorAll('#my-list li');
    tasks.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('done');
            updateCounter();
        });
    });
}

attachClickListeners();
updateCounter();

// Klik na "Označi sve kao završene"
markAllBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('#my-list li');
    tasks.forEach(item => item.classList.add('done'));
    updateCounter();
});

// Klik na "Obriši poslednji"
deleteLastBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('#my-list li');
    const last = tasks[tasks.length - 1];
    if (last) {
        last.remove();
        updateCounter();
    }
});

// Klik na "Resetuj"
resetBtn.addEventListener('click', () => {
    const ul = document.getElementById('my-list');
    ul.innerHTML = `
    <li>Zadatak 1</li>
    <li>Zadatak 2</li>
    <li>Zadatak 3</li>
  `;
    attachClickListeners();
    updateCounter();
});
