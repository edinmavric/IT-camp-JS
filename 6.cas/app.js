// Petlje (for)

// Ispiste mi brojeve od 1 do 10

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// ^ OVO NIJE DOBRO!!! ^

// for (statement1; statement2; statement3) {
// KOD ZA IZVRSAVANJE KROZ ITERACIJE(KORAKE)
// }

// statement1 => Pocetni broj(Mesto sa kojeg krecemo)

// statement2 => Poslednji broj(Mesto gde zavrsavamo)

// statement3 => Za koliko se povecava korak(pocetni broj)

for (let i = 1; i <= 15; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 15; i++) {
    if (i % 7 !== 0) {
        continue;
    }
    console.log(i);
}

const ime = 'Edin';
for (let i = 0; i < 5; i++) {
    console.log(i + ime);
}

if (ime) {
    for (let i = 0; i < 5; i++) {
        console.log(i + ime);
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Petlje (while)

i = 1; // kao statement1 kod for petlje
while (i <= 10) {
    // kao statement2 kod for petlje
    console.log(i); // KOD ZA IZVRSAVANJE
    i++; // kao statement3 kod for petlje
}

i = 1;
while (i <= 10) {
    if (i % 2 === 1) {
        console.log(i);
    }
    i++; // i++ (inkrement) strogo na kraju while petlje, ne unutar if-ova!
}

i = 1;
while (i <= 10) {
    console.log(i);
    i += 2;
}

while (true) {
    console.log(i++);
    if (i === 10) break; // isto kao return;
}

// Napisati sve brojeve od 1 do 30 koji su deljivi sa 3 ili 5, a ako su
// deljivi i sa 3 i sa 5 ispisi poruku umesto tog broja.

for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i > 0) {
        console.log('Broj je deljiv i sa tri i sa pet');
    } else if (i > 0 && (i % 3 === 0 || i % 5 === 0)) {
        console.log(i);
    }
}

// Isto ovo samo u while petlju

i = 0;
while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0 && i > 0) {
        console.log('Broj je deljiv i sa tri i sa pet');
    } else if (i > 0 && (i % 3 === 0 || i % 5 === 0)) {
        console.log(i);
    }
    i++;
}

// Dekrement u petlji

for (let i = 10; i > 0; i--) {
    if (i % 2 === 0) console.log(i);
}

let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

// Ispisati sumu brojeva od 1 do 5

let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma += i;
}

console.log(suma);

// Sad mi ispiste sumu svih parnih brojeva od 2 do 100

suma = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}

console.log(suma);
