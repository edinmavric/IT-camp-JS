// PROSTI(Primitivni) tipovi podataka mogu skladistiti samo jednu vrednost.

// 2. SLOZENI(Neprimitivni) tipovi podataka (referentni)

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se koriste neprimitivni tipovi podataka.
// Svaka promenljiva koja nije primitivnog tipa je tipa Object u JavaScriptu.
// Objekti se koriste za skladistenje neke kolekcije podataka.

// 2.1. Array (niz) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.
console.log('----------------Nizovi-----------------');

var nekiNiz = ['string vrednost', 20, true];

// Uzimanje vrednosti iz niza
var stringIzNiza = nekiNiz[0];
var brojIzNiza = nekiNiz[1];

// Dodeljivanje vrednosti nizu
nekiNiz[3] = 'dodeljena vrednost';
nekiNiz[1] = 21;

console.log(stringIzNiza, ', ', brojIzNiza);
console.log(nekiNiz);
console.log(typeof nekiNiz);

console.log('Duzina niza: ', nekiNiz.length);

// 2.2. Object (objekat) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Objekti se zapisuju u key:value (name:value) parovima.
console.log('----------------objekti-----------------');

var nekiObjekat = {
    ime: 'Ensar',
    prezime: 'Golos',
    godine: 25,
    visina: 182,
};

// Uzimanje vrednosti iz objekta
var imeIzObjekta = nekiObjekat.ime;
var prezimeIzObjekta = nekiObjekat.prezime;

// Promena vrednosti u objektu
nekiObjekat.ime = 'Mustafa';

// Dodeljivanje vrednosti objektu
nekiObjekat.tezina = 75;

console.log(imeIzObjekta + ' ' + prezimeIzObjekta);
console.log(nekiObjekat);
console.log(typeof nekiObjekat);

// 2.3. Set - predstavlja strukturu podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.
console.log('----------------Setovi-----------------');

var nekiSet = new Set(['Edin', 20, true, 'Edin', 20, 21, true]); // drugi Edin se ne vidi, drugo 20 se ne vidi, drugi true se ne vidi
console.log(nekiSet);
console.log(typeof nekiSet);

// 2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti. Slicni su objektima.
console.log('----------------Mape-----------------');

var nekaMapa = new Map([
    ['ime', 'Edin'],
    ['brojGodina', 20],
    ['punoletnost', true],
]);
console.log(nekaMapa);
console.log(typeof nekaMapa);

// Vezbanje
console.log('----------------Vezbanje-----------------');

var noviNiz = [];

noviNiz[0] = '1 string';
noviNiz[1] = '2 string';
noviNiz[2] = '3 string';
noviNiz[3] = '4 string';
noviNiz[4] = '5 string';

console.log(noviNiz, ' :Novi niz');

var noviObjekat = {};

noviObjekat.ime = 'Mustafa';
noviObjekat.prezime = 'Hodzic';
noviObjekat.godine = 14;
noviObjekat.ideUSkolu = true;
noviObjekat.visina = 175;

console.log(noviObjekat, ' :Novi objekat');

// String podaci kao sto su ime, prezime...
var mojiPodaci = {
    // ...
    ime: 'Edin',
    prezime: 'Mavric',
};
// U niz idu podaci kao sto su godine, tezina, visina...
var brojniPodaci = [
    // ...
    20,
];

document.write(
    `Ja sam ${mojiPodaci.ime} ${mojiPodaci.prezime} i imam ${brojniPodaci[0]} godina`
);
