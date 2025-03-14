// Niz brojeva "1", da se oni sortiraju i da se ispisu kao brojevi.

const sortStringToNumber = niz => {
    niz.sort((a, b) => a - b);

    for (let i = 0; i < niz.length; i++) {
        niz[i] = +niz[i];
    }

    return `Niz je ${niz}, i tip podataka u nizu je ${typeof niz[0]}`;
};

// console.log(sortStringToNumber(['2', '5', '1', '3', '4']));

let niz1 = [1, 2];
let niz2 = [3, 4];

let spojeniNizovi = niz1.concat(niz2);
// console.log(spojeniNizovi);

// console.log([54, 120].concat());
// console.log(typeof ([54, 120] + [100, 2140, 123]));

// console.log(niz2.reverse());

let reci = ['Hello', 'World', 'I', 'am', 'here'];

// console.log(reci.join(' '));

// Niz pretvoriti u string obrnutog redosleda. ['Hello', 'World'] => 'World Hello'

const obrnutString = (nizReci1, nizReci2, nizReci3) => {
    return nizReci1
        .concat(nizReci2)
        .reverse()
        .concat(nizReci3)
        .join(' ')
        .toUpperCase()
        .replaceAll(' ', '');
};

// console.log(
//     obrnutString(['Hello', 'World'], ['I', 'am', 'here'], ["Don't", 'worry'])
// );

// console.log([10, 20, 30, 50, 20].indexOf(20));
// console.log([10, 20, 30, 50, 20].lastIndexOf(20));

// console.log([100, 20].includes(10));

// 1. Napiši funkciju organizujNizove koja prima dva niza brojeva.
// Funkcija treba da spoji ta dva niza u jedan i organizuje brojeve od najmanjeg do najvećeg. Vrati taj novi niz.

const organizujNizove = (niz1, niz2) => niz1.concat(niz2).sort((a, b) => a - b);

// 2. Napiši funkciju pozicijeBroja koja prima niz brojeva i jedan broj.
// Funkcija treba da vrati string koji kaže gde se taj broj prvi put i poslednji put pojavljuje u nizu,
// u formatu "Prva pozicija: X, Poslednja pozicija: Y".

const pozicijeBroja = (nizBrojeva, broj) =>
    `Prva pozicija: ${nizBrojeva.indexOf(
        broj
    )}, Poslednja pozicija: ${nizBrojeva.lastIndexOf(broj)}`;

// console.log(pozicijeBroja([1, 2, 3, 2, 4], 2));

// 3. Napiši funkciju proveriPaOrganizuj koja prima niz brojeva i jedan broj. Ako se taj broj nalazi u nizu,
// vrati niz organizovan od najvećeg ka najmanjem. Ako se broj ne nalazi, vrati poruku "Broj nije u nizu".

const proveriPaOrganizuj = (nizBrojeva, broj) =>
    nizBrojeva.includes(broj)
        ? nizBrojeva.sort((a, b) => b - a)
        : 'Broj nije u nizu';

console.log(proveriPaOrganizuj([5, 2, 8, 1], 2)); // Očekivani izlaz: [8, 5, 2, 1]
console.log(proveriPaOrganizuj([5, 2, 8, 1], 3)); // Očekivani izlaz: "Broj nije u nizu"
