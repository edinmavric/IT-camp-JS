// PODSETNIK
// Niz (Array) u JavaScriptu predstavlja strukturu podataka za skladistenje vise vrednosti.
// Dakle, unutar jedne promenljive (jednog niza) mozemo imati vise razlicitih (ili istih) vrednosti.
// Nizovi u JavaScriptu dozvoljavaju duplikate.
// Nizovi su heterogeni (unutar jednog niza mozemo imati elemente razlicitih tipova).

// 1. Nacin
let nekiNiz = [1, 2, 3, 'string', function () {}, true];
// console.log(nekiNiz);
nekiNiz[6] = 'BMW';
// console.log(nekiNiz);

// 2. Nacin
const nekiNiz2 = new Array(40);
const nekiNiz3 = [40];

// console.log(nekiNiz2);
// [undefined 40 puta]

// console.log(nekiNiz3);
// Normalan prikaz

let kola = [];

kola[0] = 'Mercedes';
kola[1] = 'Audi';
kola[2] = 'BMW';
kola[3] = 'Fiat';
kola[4] = 'Opel';

// console.log(kola);

kola[0] = 'VolksWagen';

// console.log(kola);

// console.log(kola.length);

// if (kola[0] === 'VolksWagen') {
//     console.log(kola[1]);
// }

let noviNiz = [
    true,
    10,
    function () {
        return 'funkcija';
    },
    'string',
];

// for (let i = 0; i < noviNiz.length; i++) {
//     console.log(noviNiz[i]);
// }

let string = 'neki';

// console.log(noviNiz instanceof Array);
// console.log(string instanceof Array);

// console.log(Array.isArray(noviNiz));

// 1. Write a JavaScript function to check whether an `input` is an array or not.

const daLiJeNiz = value => {
    if (Array.isArray(value)) {
        return true;
    }
    return false;
};

// console.log(daLiJeNiz(noviNiz));

// 2. Write a JavaScript function to clone an array.

const cloneNiz = value => {
    return [...value, 'Mercedes'];
};

const restParametar = (...value) => {
    return value;
};

// console.log(cloneNiz(kola));
// console.log(kola);
// console.log(restParametar(1, 2, 3, 'string'));

const zbirSvihParametara = (...value) => {
    let suma = 0;
    for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === 'number') {
            suma += value[i];
        }
    }

    return suma;
};

// console.log(zbirSvihParametara(1, 2, 3, 10, 23));
// console.log(zbirSvihParametara('string', 1, 2, true));

// Koja prima jedan parametar, proverava da li taj parametar postoji u nizu i vraca ga

let niz = [1, 2, 3, 4, 5];
const pronadji = (niz, value) => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] === value) {
            return value;
        }
    }

    return 'Vrednost nije pronadjena';
};

// console.log(pronadji(niz, 5));
// console.log(pronadji(niz, 10));

// push(), pop(), shift(), unshift()

// push() -> on stavlja element/elemente na kraju niza

// console.log(niz);

niz.push('string', 8, true, false);
niz.push(6);

// console.log(niz);

// pop() -> on uklanja poslednji element niza

// console.log(niz);
// console.log(niz.pop());
// console.log(niz);

niz.pop(); // Vraca vrednost koju smo izbrisali iz niza
niz.pop();
niz.pop();

// console.log(niz);

// unshift() -> dodaje element/elemente na pocetku niza
niz.unshift(1, 1, 1);
// console.log(niz);

// niz.shift() -> uklanja prvi element niza
// console.log(niz.shift());
// console.log(niz.shift());
// console.log(niz.shift());
// console.log(niz.shift());
// console.log(niz.shift());
// console.log(niz.shift());

// console.log(niz);

// value je shift, unshift, push i pop i u zavisnosti od te vrednosti radimo nesto sa nizom
const najnovijiNiz = [1, 2, 3, 4, 5];
const radSaNizom = (niz, operacija, ...value) => {
    switch (operacija) {
        case 'shift':
            niz.shift();
            return niz;
        case 'unshift':
            niz.unshift(value);
            return niz;
        case 'pop':
            niz.pop();
            return niz;
        case 'push':
            niz.push(value);
            return niz;
        default:
            return 'Nije validna operacija';
    }
};

console.log(radSaNizom(najnovijiNiz, 'pop'));

// Preokrenuti niz bez koriscenja reverse() npr. [1,2,3] -> [3,2,1]

const reverseArray = niz => {
    let pomocniNiz = [];
    for (let i = niz.length - 1; i >= 0; i--) {
        pomocniNiz.push(niz[i]);
    }

    return pomocniNiz;
};

console.log(reverseArray(najnovijiNiz));
