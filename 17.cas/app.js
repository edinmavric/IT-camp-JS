// 1. some()

const numbers = [1, 3, 5, 7, 8];
const evenNumbers = numbers.some(num => num % 2 === 0);
// console.log(evenNumbers);

const people = [
    { name: 'Ana', age: 20 },
    { name: 'Marko', age: 17 },
    { name: 'Jovan', age: 25 },
];

const isMinor = people.some(user => user.age < 18);
// console.log(isMinor);

// Provera korisnika sa emailom
// Neka je dat niz korisnika sa svojstvima name i email. Proveriti da li bar jedan korisnik nema unet email.

const usersEmails = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Bob', email: '' },
];

const someNoEmail = usersEmails.some(user => user.email.length === 0);
// console.log(someNoEmail);

// Provera prisustva negativnih brojeva
// Napisati funkciju koja proverava da li se u datom nizu brojeva nalazi bar jedan negativan broj.

const numbersArray = [-1, 0, 1, 2, 3];
const hasNegative = numbersArray.some(num => num < 0);
// console.log(hasNegative);

// 2. every()

const everyNumbers = [1, 3, 5, 7];
const everyEvenNumbers = everyNumbers.every(num => num % 2 === 1);
// console.log(everyEvenNumbers);

const isAllAdults = people.every(user => user.age >= 18);
// console.log(isAllAdults);

// Provera pozitivnih brojeva
// Napisati funkciju koja prima niz brojeva i vraća true ako su svi brojevi pozitivni.

// const allPositive = numbers.every(num => num > 0);

// Provera dužine stringova
// Neka je dat niz reči. Proveriti da li sve reči imaju bar 5 karaktera.

// const allLongerThanFive = strings.every(str => str.length >= 5);

// Provera godina korisnika
// Dat je niz objekata sa imenima i godinama korisnika. Proveriti da li su svi korisnici stariji od 21 godine.

// const allOlder21 = people.every(user => user.age >= 21);

// 3. slice()
// slice(prviIndex od kojeg krecemo, poslednjiIndex - 1 do kojeg se zaustavljamo)
const nums = [1, 2, 3, 4, 5, 6, 7];
const slicedNumbers = nums.slice(2, 5);
// console.log(slicedNumbers);

const reverseSliced = nums.slice(-4, -1);
// console.log(reverseSliced);

// Izdvajanje prvih n elemenata
// Napisati funkciju koja prima niz i broj n i vraća nove prve n elemenata niza.

const firstN = (arr, n) => arr.slice(0, n);
// console.log(firstN([1, 2, 3, 4, 5], 3));

// Kopiranje poslednja tri elementa
// Napraviti funkciju koja uzima poslednja tri elementa niza bez menjanja originalnog niza.

const lastThree = nums.slice(-3);
// console.log(lastThree);

// Izdvajanje srednjih elemenata
// Dat je niz od 11 brojeva. Iz njega izdvojiti srednjih 5 elemenata.

const nizBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const middleFive = nizBrojeva.slice(3, 8);
// console.log(middleFive);

// 4. splice()
// .splice(od kojeg indeksa pocinjemo, koliko elemenata brisemo, elemente koje dodajemo ili menjamo)

// Primer Brisanja elemenata

const splicedNumbers = [1, 2, 3, 4, 5];
splicedNumbers.splice(1, 3);
// console.log(splicedNumbers); // [1, 5]

// Primer Dodavanja elemenata

const colors = ['Crvena', 'Plava', 'Zelena'];
colors.splice(1, 0, 'Žuta', 'Narandžasta');
// console.log(colors); // ["Crvena", "Žuta", "Narandžasta", "Plava", "Zelena"]

// Primer Menjanja elemenata

const colors2 = ['Crvena', 'Plava', 'Zelena'];
colors2.splice(1, 1, 'Ljubičasta');
// console.log(colors2); // ["Crvena", "Ljubičasta", "Zelena"]

// Brisanje određenih elemenata
// Napisati funkciju koja prima niz i dva broja (početni indeks i broj elemenata za brisanje)
// i menja niz tako što briše zadati deo.

const brisi = (niz, pocetak, kraj, ...elementi) => {
    niz.splice(pocetak, kraj, ...elementi);
    return niz;
};

// console.log(brisi([1, 2, 3, 4], 1, 1, 5, 6));

// Dodavanje novih elemenata u niz
// Dat je niz boja. Na drugo mesto ubaciti boje "Roze" i "Ljubičasta".

// colors.splice(1, 0, 'Roze', 'Ljubicasta');

// Menjanje određenog elementa
// Dat je niz reči. Naći prvo pojavljivanje reči "lose" i zameniti je sa "dobro" (ako postoji).

const words2 = ['bolje', 'odlicno', 'super', 'lose', 'onako'];

const index = words2.indexOf('lose');

if (index !== -1) {
    words2.splice(index, 1, 'dobro');
}

// Kombinacija brisanja i dodavanja
// Dat je niz imena. Ukloniti drugo ime i umesto njega ubaciti dva nova.

const names = ['Pera', 'Mika', 'Luka', 'Marko', 'Ana'];
names.splice(1, 1, 'Ensar', 'Fatih');
// console.log(names);

// Napiši funkciju koja grupiše reči po prvom slovu koristeći reduce().
// Rezultat treba da bude objekat gde su ključevi prva slova, a vrednosti nizovi reči koje počinju tim slovom.

const words = ['banana', 'jabuka', 'jagoda', 'kivi', 'avokado', 'breskva'];

const grupa = words.reduce((acc, word) => {
    const firstLetter = word[0].toUpperCase();
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
}, {});

console.log(grupa);
