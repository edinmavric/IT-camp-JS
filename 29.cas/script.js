// DOM elementi
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
const colorPicker = document.getElementById('colorPicker');
const changeColorBtn = document.getElementById('changeColorBtn');
const hideBtn = document.getElementById('hideBtn');
const hideSection = document.getElementById('hide-section');

let darkMode = false;

// Promena teme
toggleThemeBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? '#1f2937' : '';
    document.body.style.color = darkMode ? '#f9fafb' : '';
});

// Dodavanje nove stavke
itemForm.addEventListener('submit', e => {
    e.preventDefault();

    const newItemText = itemInput.value.trim();
    if (newItemText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
      ${newItemText}
      <button class="deleteBtn">Obriši</button>
    `;

        itemList.appendChild(li);

        // Dodaj event listener za dugme za brisanje
        li.querySelector('.deleteBtn').addEventListener('click', () => {
            li.remove();
        });

        itemInput.value = '';
    }
});

// Promena boje sekcije
changeColorBtn.addEventListener('click', () => {
    const color = colorPicker.value;
    document.getElementById('color-section').style.backgroundColor = color;
});

// Sakrivanje/Pokazivanje sekcije
let hidden = false;
hideBtn.addEventListener('click', () => {
    hidden = !hidden;
    hideSection.style.display = hidden ? 'none' : 'block';
});

// Hover efekat za stavke
itemList.addEventListener('mouseover', e => {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = '#c7d2fe';
    }
});

itemList.addEventListener('mouseout', e => {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = '#eef2ff';
    }
});
