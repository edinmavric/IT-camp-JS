// TRUTHY I FALSY vrednosti nam olaksavaju pisanje uslova.
// Ako je vrednost TRUTHY, to znaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi.
// Ako je vrednost FALSY, to znaci da uslov nije zadovoljen i da se nece izvrsiti kod koji sledi.
// Postoji 10 FALSY vrednosti:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null
// 9. []
// 10. {}

// 5. Napiši funkciju koja proverava da li je string palindrom (čita se isto s leva na desno i obrnuto, npr. "radar", "oko", "ana").
// console.log(daLiJePalindrom("radar")); // true
// console.log(daLiJePalindrom("hello")); // false
// console.log(daLiJePalindrom("Ana")); // true (BONUS: ignorisati velika/mala slova)

const daLiJePalindrom = (string = '') => {
    let pomocniString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        pomocniString += string[i];
    }

    return string.toLowerCase().replaceAll(' ', '') ===
        pomocniString.toLowerCase().replaceAll(' ', '')
        ? true
        : false;
};

// console.log(daLiJePalindrom('radar')); // true
// console.log(daLiJePalindrom('Ana voli milovana')); // true

const isTruthy = (value = 0) => {
    if (value) {
        return value;
    } else {
        return 'Entered value is FALSY value';
    }
};

// console.log(isTruthy('string'));
// console.log(isTruthy(''));
// console.log(isTruthy('Daris'));

// value = 'string'

// 1. Primer ako korisnik unosi broj:(isti zadatak, ali posmatrati brojeve)

// 2. Korisnik unosi svoje ime. Proveriti da li je uneto ime truthy vrednost
// (nije prazan string, undefined ili null). Ako je uneto ime truthy, ispisati
// korisnikovo ime, inače ispisati da korisnik nema definisano ime.

// 3. Korisnik unosi broj. Proveriti da li je uneti broj falsy vrednost (0 ili NaN).
// Ako je uneti broj falsy, ispisati poruku da korisnik nema definisan broj, inače
// ispisati uneti broj.

// 4. Definisati promenljivu koja nije inicijalizovana. Proveriti da li je vrednost
// promenljive falsy (undefined). Ako je vrednost falsy, ispisati poruku da korisnik
// nema definisanu vrednost, inače ispisati vrednost promenljive.

// 5. Napraviti funkciju papirKamenMakaze sa dva parametra. Prvi parametar je za Prvog igraca
// a drugi parametar je za drugog igraca. Funkcija treba da proveri koji igrac je pobedio ako
// uneti argumenti mogu biti samo: "Papir", "Kamen", "Makaze". Vratiti ko je pobednik i koji znak
// je pobedio koji.

const papirKamenMakaze = (p1, p2) => {
    if (
        (p1 === 'Makaze' || p1 === 'Papir' || p1 === 'Kamen') &&
        (p2 === 'Makaze' || p2 === 'Papir' || p2 === 'Kamen')
    ) {
        if (p1 === p2) {
            return `Nereseno, ${p1} je isto kao ${p2}`;
        } else if (
            (p1 === 'Makaze' && p2 === 'Papir') ||
            (p1 === 'Papir' && p2 === 'Kamen') ||
            (p1 === 'Kamen' && p2 === 'Makaze')
        ) {
            return `Pobednik je Igrac Jedan, ${p1} je pobedio ${p2}`;
        } else {
            return `Pobednik je Igrac Dva, ${p2} je pobedio ${p1}`;
        }
    } else {
        return 'Korisnik nije uneo dobru vrednost';
    }
};

console.log(0);
console.log(!!0);

// console.log(papirKamenMakaze('Kamen', 'Kamen'));
// console.log(papirKamenMakaze('K', 'Kamen'));
// console.log(papirKamenMakaze('Papir', 'Kamen'));
// console.log(papirKamenMakaze('Kamen', 'Papir'));
// console.log(papirKamenMakaze('Makaze', 'Kamen'));
