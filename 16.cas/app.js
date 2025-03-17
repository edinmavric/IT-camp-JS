// Callback funkcije u JavaScriptu su funkcije koje se prosleđuju kao argumente drugim funkcijama
// i pozivaju se kasnije, obično nakon završetka neke operacije.

// Kako funkcionišu callback funkcije?
// Funkcija može primiti drugu funkciju kao argument.
// Nakon što izvrši neku logiku, može pozvati tu funkciju (callback).
// Omogućavaju asinhrono programiranje – npr. čekanje na odgovor sa servera.

const greet = (name, callbackFn) => {
    console.log('Zdravo, ' + name);
    callbackFn();
};

greet('Benjamin', () => {
    console.log('Dovidjenja');
});

// Higher Order

const fja = (broj, stepen, callback) => {
    return callback(broj, stepen);
};

const stepenovanje = (broj, stepen) => {
    return broj ** stepen;
};

console.log(fja(5, 2, stepenovanje));

// 1. reduce()

const brojevi = [1, 2, 3, 4, 5, 6];
const suma = brojevi.reduce((prevValue, currValue) => prevValue + currValue, 0);
console.log(suma);

const proizvod = brojevi.reduce(
    (prevValue, currValue) => prevValue * currValue,
    1
);
console.log(proizvod);

// 2. filter()

const parniBrojevi = brojevi.filter(i => i % 2 === 0);
console.log(parniBrojevi);

// 3. map()

const kvadrati = brojevi.map(i => i * i);
console.log(kvadrati);

// 4. forEach()

brojevi.forEach(num => console.log(num));

const voce = ['Jabuka', 'Banana', 'Jagoda'];
voce.forEach(fruit => {
    console.log(`Voće: ${fruit}`);
});

// Primeri:
// Ispisati izdvaja sve reci duze od 5 slova iz niza stringova
const reci = ['jabuka', 'list', 'mis', 'sargarepa'];
const duzeReci = reci.filter(rec => rec.length > 5);
console.log(duzeReci);

// Ispisati vraca svaki broj kvadriran i negativan uz map()
const brojevi2 = [1, 2, 3, 4, 5];
const kvadrati2 = brojevi2.map(broj => broj * -broj);
console.log(kvadrati2);

// Ispisati sve reci u konzoli uz pomoc forEach()

const studenti = [
    { ime: 'Edin', ocena: 5 },
    { ime: 'Ensar', ocena: 4 },
    { ime: 'Mustafa', ocena: 3 },
    { ime: 'Benjamin', ocena: 2 },
    { ime: 'Dino', ocena: 1 },
];

const srednjaOcena =
    studenti.reduce((acc, student) => acc + student.ocena, 0) / studenti.length;
console.log(srednjaOcena);

// Napisati kod koji iz niza brojeva izdvaja samo parne (filter()), a zatim racuna njihov zbir (reduce())

const nizBrojeva = [2, 3, 4, 6, 8, 11, 12];

const zbirParnihBrojeva = nizBrojeva
    .filter(broj => broj % 2 === 0)
    .reduce((acc, broj) => acc + broj, 0);

console.log(zbirParnihBrojeva);
