// Prvi nacin da se deklarise funkcija ES5
function parniBrojeviDo(broj) {
    for (let i = 1; i <= broj; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// parniBrojeviDo(10);
// parniBrojeviDo(20);
// parniBrojeviDo(30);

// Napraviti funkciju zbir dva broja

const zbir = 10 + 7;

// => Mi hocemo da dinamicno menjamo dva broja koja sabiramo

function zbirDvaBroja(broj1, broj2) {
    return broj1 + broj2;
}

// console.log(zbirDvaBroja(5, 5));
// console.log(zbirDvaBroja(10, 15));
// console.log(zbirDvaBroja(20, 3));

// Drugi nacin pisanja funkcija ES6+

const zbirDvaBrojaES6 = (broj1, broj2) => {
    return broj1 + broj2;
};

// console.log(zbirDvaBrojaES6(5, 5));
// console.log(zbirDvaBrojaES6(10, 15));
// console.log(zbirDvaBrojaES6(20, 3));

function myIsIntiger(isBroj) {
    if (typeof isBroj === 'number' && isBroj % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(myIsIntiger(42)); // true
// console.log(myIsIntiger('42')); // false
// console.log(myIsIntiger(42.5)); // false

// Rekreacija propertija length u svoju funkciju

const myLength = string => {
    let i = 0;
    while (true) {
        if (string[i] === undefined) {
            break;
        }
        i++;
    }

    return i;
};

// console.log(myLength('string')); // => 6
// console.log(myLength('koji je string')); // 14

// Napraviti funkciju koja ce da vrati string sa svakim velikim pocetnim slovom

// 'koje je vreme trenutno' => ovo treba da bude ovako => 'Koje Je Vreme Trenutno'
const myFirstUpper = string => {
    let noviString = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            noviString += string[i].toUpperCase();
        } else if (string[i - 1] === ' ') {
            noviString += string[i].toUpperCase();
        } else {
            noviString += string[i];
        }
    }

    return noviString;
};

// console.log(myFirstUpper('koje je vreme trenutno'));

// Vratiti srednju vrednost tri broja i napraviti proveru da li su uneta sva tri broja
const nekaFunkcija = (a, b, c) => {
    if (a === undefined || b === undefined || c === undefined) {
        return 'Nije moguce izracunati srednju vrednost bez tri broja';
    }
    return +((a + b + c) / 3).toFixed(2);
};

// console.log(nekaFunkcija(3, 5));

// Napisati funkcija koja prima dva parametra i vraca ako su oni jednaki "Povrsina kvadrata je: ",
//  ako su razliciti "Povrsina pravougaonika je: "

// funkcija(a, b) povrsina je a * b

const povrsina = (a = 1, b = 1) =>
    a === b
        ? `Povrsina kvadrata je ${a * b}`
        : `Povrsina pravougaonika je ${a * b}`;

console.log(povrsina(5, 5));
console.log(povrsina(6, 5));
