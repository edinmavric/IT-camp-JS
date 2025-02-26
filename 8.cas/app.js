let danUNedelji = 5;

switch (danUNedelji) {
    case 1:
        console.log('Ponedeljak');
        break;
    // ako je danUNedelji varijabla jedkaka (===) sa vrednoscu kod case (u ovom slucaju 1)
    case 2:
        console.log('Utorak');
        break;

    case 3:
        console.log('Sreda');
        break;

    case 4:
        console.log('Cetvrtak');
        break;

    case 5:
        console.log('Petak');
        break;

    case 6:
        console.log('Subota');
        break;

    case 7:
        console.log('Nedelja');
        break;

    default:
        console.log('Broj nije jedan, dva ili pet');
        break;
}

// switch (vrednost za uporedjivanje sa slucajevima) {
//    case nekiSlucaj: izvrši ovu akciju; break;
// }

// Napisati ovaj kalkulator u switch case formatu

let x = 5;
let y = 2;
let operacija = '/';

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

switch (operacija) {
    case '+':
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '*':
        console.log(x * y);
        break;
    case '/':
        // Ternary Operator
        y !== 0
            ? console.log(x / y)
            : console.log('Deljenje nulom nije dozvoljeno!');

        // Ternary Operator je isto sto i If i Else u jednom

        // if (y !== 0) {
        //     console.log(x / y);
        // } else {
        //     console.log('Deljenje nulom nije dozvoljeno!');
        // }
        break;
    default:
        console.log('Nepoznata operacija.');
        break;
}

// broj(varijabla) === brojem iz case
// (npr. broj = 5, to spada u case 5, i taj se izvrsava)

// console.log(
//     brojMeseca >= 1 && brojMeseca <= 12
//         ? nizMeseci[brojMeseca - 1]
//         : 'Unesite broj između 1 i 12!'
// );

// ^ ovo je isto kao =>
//
// brojMeseca >= 1 && brojMeseca <= 12
// ? console.log(nizMeseci[brojMeseca - 1])
// : console.log('Unesite broj između 1 i 12!');

let nekiDan = 8;
switch (nekiDan) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Radni dan');
        break;
    case 6:
    case 7:
        console.log('Neradni dan');
        break;
    default:
        console.log('Nije validan dan u nedelji');
        break;
}

// uslov ? obrada ako je ispunjen uslov : obrada ako nije ispunjen uslov;

// Ternarny Operator radi samo ako ima jedna linija koda za 'If' i 'Else' deo.

for (let i = 1; i <= 10; i++) {
    i % 2 === 0 ? console.log(i) : '';
}
