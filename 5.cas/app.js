// ---

// Zadatak 1 – Kalkulator
// Neka korisnik unese dva broja i operaciju (+, -, *, /).
// Na osnovu unete operacije, prikaži rezultat u konzoli.
// Ako korisnik unese nepoznatu operaciju, ispiši: "Nepoznata operacija!".
// Ako pokušava da deli nulom, ispiši: "Deljenje nulom nije dozvoljeno!".

let x = 5;
let y = 2;
let operacija = '+';

if (operacija === '+') {
    console.log(x + y);
} else if (operacija === '-') {
    console.log(x - y);
} else if (operacija === '*') {
    console.log(x * y);
} else if (operacija === '/') {
    if (y !== 0) {
        console.log(x / y);
    } else {
        console.log('Deljenje nulom nije dozvoljeno!');
    }
} else {
    console.log('Nepoznata operacija!');
}

// ---

// Zadatak 2 – Rang takmičara
// Neka korisnik unese broj poena (od 0 do 100).
// Prikaži mu rang:

// 0 - 50: "Nisi prošao test."
// 51 - 65: "Osnovni nivo."
// 66 - 80: "Srednji nivo."
// 81 - 90: "Napredni nivo."
// 91 - 100: "Ekspert."

let poeni = 99;

if (poeni >= 0 && poeni <= 50) {
    console.log('Nisi prošao test.');
} else if (poeni <= 65) {
    console.log('Osnovni nivo.');
} else if (poeni <= 80) {
    console.log('Srednji nivo.');
} else if (poeni <= 90) {
    console.log('Napredni nivo.');
} else if (poeni <= 100) {
    console.log('Ekspert.');
} else {
    console.log('Unesite broj poena izmedju 0 i 100');
}

// ---

// Zadatak 3 – Konvertor temperature
// Neka korisnik unese temperaturu i jedinicu (C ili F).

// Ako unese temperaturu u Celzijusima, konvertuj je u Farenhajte.
// Ako unese temperaturu u Farenhajtima, konvertuj je u Celzijuse.
// Ako unese nepoznatu jedinicu, prikaži: "Nepoznata jedinica!".
// Formula:

// °C → °F: (°C * 9/5) + 32
// °F → °C: (°F - 32) * 5/9

let temperatura = 59;
let jedinica = 'F';

if (jedinica === 'C') {
    jedinica = 'F';
    console.log(
        `${(temperatura * 9) / 5 + 32} je nova temperatura u ${jedinica}`
    );
} else if (jedinica === 'F') {
    jedinica = 'C';
    console.log(
        `${((temperatura - 32) * 5) / 9} je nova temperatura u ${jedinica}`
    );
} else {
    console.log('Nepoznata jedinica!');
}

// ---

// Zadatak 4 – Prepoznavanje trougla
// Neka korisnik unese tri stranice trougla (a, b, c).
// Odredi da li je trougao:

// "Jednakostraničan", ako su sve tri stranice jednake.
// "Jednakokraki", ako su dve stranice jednake.
// "Raznostraničan", ako su sve stranice različite.
// Ako stranice ne mogu formirati trougao, ispiši: "Nevalidan trougao!".
// Trougao je validan ako važi: a + b > c i a + c > b i b + c > a.

let a = 5;
let b = 6;
let c = 7;

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Jednakostraničan');
    } else if (a === b || b === c || a === c) {
        console.log('Jednakokraki');
    } else {
        console.log('Raznostraničan');
    }
} else {
    console.log('Trougao nije validan!');
}

// ---

// Zadatak 5 – Broj u rečima
// Neka korisnik unese broj između 0 i 9.
// Prikaži u konzoli njegov naziv (npr. 0 → "nula", 1 → "jedan", 2 → "dva", itd.).
// Ako unese broj van ovog opsega, ispiši: "Unesite broj između 0 i 9!".

let broj = 1;
let nizBrojeva = [
    'nula',
    'jedan',
    'dva',
    'tri',
    'cetiri',
    'pet',
    'sest',
    'sedam',
    'osam',
    'devet',
];

if (broj >= 0 && broj <= 9) {
    console.log(nizBrojeva[broj]);
} else {
    console.log('Unesite broj između 0 i 9!');
}

// ---

// Zadatak 6 – Poređenje tri broja
// Neka korisnik unese tri broja.
// Odredi i prikaži:

// Najveći broj.
// Da li su svi brojevi jednaki.
// Da li su dva broja jednaka i koji su to brojevi.

let d = 45;
let e = 60;
let f = 45;

let najveci;

if (d >= e && d >= f) {
    najveci = d;
} else if (e >= d && e >= f) {
    najveci = e;
} else {
    najveci = f;
}

console.log('Najveci broj je ' + najveci);

if (d === e && e === f) {
    console.log('Svi su jednaki');
} else if (d === e) {
    console.log(`Brojevi ${d} i ${e} su jednaki`);
} else if (d === f) {
    console.log(`Brojevi ${d} i ${f} su jednaki`);
} else if (f === e) {
    console.log(`Brojevi ${f} i ${e} su jednaki`);
} else {
    console.log('Svi brojevi su razliciti');
}

// ---

// Zadatak 7 – Mesec u godini
// Neka korisnik unese broj meseca (1 - 12).
// Prikaži naziv meseca (1 → "Januar", 2 → "Februar", ...).
// Ako broj nije validan ispisati poruku da nije validan
// Koristiti Niz za mesece!

let brojMeseca = 1;
let nizMeseci = [
    'Januar',
    'Februar',
    'Mart',
    'April',
    'Maj',
    'Jun',
    'Jul',
    'Avgust',
    'Septembar',
    'Oktobar',
    'Novembar',
    'Decembar',
];

if (brojMeseca >= 1 && brojMeseca <= 12) {
    console.log(nizMeseci[brojMeseca - 1]);
} else {
    console.log('Unesite broj između 1 i 12!');
}

// ---
