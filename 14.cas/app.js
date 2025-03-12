function isBalanced(arr) {
    let pozitivnaSuma = 0;
    let negativnaSuma = 0;

    for (let i of arr) {
        if (i > 0) {
            pozitivnaSuma += i;
        } else if (i < 0) {
            negativnaSuma += i;
        }
    }

    return pozitivnaSuma === Math.abs(negativnaSuma);
}

// console.log(isBalanced([-1, 1, -2, 2, -3, 3])); // true
// console.log(isBalanced([-1, -2, -3, 1, 2])); // false
// console.log(isBalanced([4, -4, 6, -6, 0])); // true
// console.log(isBalanced([1, 2, 0, -3, -1])); // false

const sumDigits = num => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
};

// console.log(sumDigits(123)); // 6
// console.log(sumDigits(9876)); // 30

const countWords = str => {
    return str.split(' ').length;
};

// console.log(countWords('Ovo je primer recenice')); // 4

const allEven = arr => {
    for (let i of arr) if (i % 2 !== 0) return false;

    return true;
};

// console.log(allEven([2, 4, 6, 8])); // true
// console.log(allEven([1, 2, 4, 6])); // false

const countCharacter = (str, char) => {
    let count = 0;
    for (let i of str) if (i === char) count++;

    return count;
};

// console.log(countCharacter('programiranje', 'r')); // 3
// console.log(countCharacter('javascript', 'a')); // 2

const haveSameElements = (arr1, arr2) => {
    return arr1.sort().join('') === arr2.sort().join('');
};

// console.log(haveSameElements([1, 2, 3], [3, 2, 1])); // true
// console.log(haveSameElements([1, 2, 2], [2, 1, 1])); // false
// console.log(haveSameElements([5, 7, 9], [9, 5, 7])); // true

// sort() -> sortira array u rastucem redosledu, i "u mestu"

let nizBrojeva = [300, 45, 110, 1000];
nizBrojeva.sort((a, b) => a - b); // Sortira po rastucem redosledu
nizBrojeva.sort((a, b) => b - a); // Sortira po opadajucem redosledu

// za sortiranje brojeva uzimamo dva parametra (a, b) i onda minusom podesavamo da li ce biti rastuce ili opadajuce sortiranje
// console.log(nizBrojeva);

let nizStringova = ['b', 'c', 'a'];
nizStringova.sort(); // Normalan abecedni redosled

nizStringova.sort((a, b) => b.localeCompare(a)); // Obrnuti redosled sortiranja stringova

console.log(nizStringova);

// Funkcija koja prima niz brojeva u parametru i sortira ga i vraca najveci broj iz niza

const najveciBroj = nizBrojeva => {
    nizBrojeva.sort((a, b) => b - a);

    return nizBrojeva[0];
};

// console.log(najveciBroj([110, 201, 423, 130, 50]));
// console.log(najveciBroj([10, 50, 500, 1000, 100]));

// Funkcija koja prima niz stringova u parametru sortira ga u obrnutom redosledu
// i vraca taj niz i najduzu rec iz niza

const najduzaRec = nizStringova => {
    nizStringova.sort((a, b) => b.localeCompare(a)).join(' ');

    let najduzaRecIzNiza = '';

    for (let i = 0; i < nizStringova.length; i++) {
        if (nizStringova[i].length > najduzaRecIzNiza.length) {
            najduzaRecIzNiza = nizStringova[i];
        }
    }

    return `Iz obrnuto sortiranog niza: ${nizStringova}, najduza rec je ${najduzaRecIzNiza}`;
};

console.log(najduzaRec(['apple', 'banana', 'cherry', 'date', 'elderberry']));
console.log(najduzaRec(['dog', 'cat', 'bird', 'fish', 'frog', 'tiger']));
