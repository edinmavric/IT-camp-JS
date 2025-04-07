console.log(document);
console.dir(document);

// Nacini za uzimanje elemenata

// 1.
const heading = document.getElementById('heading');
console.log(heading.textContent);

// 2.
const allHeadings = document.getElementsByClassName('heading')[1];

// 3.
const pTags = document.getElementsByTagName('p')[2];

// 4.
const nekiQuery = document.querySelector('#heading');

// 5.
const sviQuery = document.querySelectorAll('a');
console.log(sviQuery);

// Menjanje sadrzaja elemenata
// =>
// textContent
// innerHtml -> <a><a>

heading.textContent = 'Izmenjeni heading';
allHeadings.innerHTML = '<b> Bolded Heading </b>';

// Menjanje stilova

heading.style.color = 'blue';
allHeadings.style.fontSize = '30px';
heading.style.padding = '10px 20px 30px 40px';

// Dodavanje elemenata

const newDiv = document.createElement('div');
// newDiv.textContent = 'I am created in JS file!';
document.body.append(newDiv);
const newP = document.createElement('p');
newP.textContent = 'I am created in JS file!';
newDiv.appendChild(newP);

// Uklanjamo elemente

newDiv.remove();

// Slusanje Dogadjaja

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('Kliknut sam!');
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightblue'
            ? 'lightgreen'
            : 'lightblue';
});

const buttonList = document.getElementById('add-list-item-btn');
const unorderedList = document.getElementById('unordered-list');
buttonList.addEventListener('click', function () {
    const listItem = document.createElement('li');
    listItem.textContent = 'List Item';
    unorderedList.appendChild(listItem);
});

const counterBtn = document.getElementById('counter-btn');
const counterTracker = document.getElementById('counter');
let counter = 0;
counterBtn.addEventListener('click', () => {
    counter++;
    counterTracker.textContent = `Broj klikova: ${counter}`;
});
