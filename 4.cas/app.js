// Deklaracija: var varijabla;
// Inicijalizacija: varijabla = 1;

// Promenljive definisane preko var keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju),
// kao i reinicijalizaciju (novo dodeljivanje vrednosti).

// let i const keywords obezbedjuju Block Scope.
// Promenljive definisane preko let keyword mozemo ponovo deklarisati
// (izvrsiti redeklaraciju) ako se radi o drugom prostoru, dok reinicijalizaciju
// (novo dodeljivanje vrednosti) mozemo izvrsiti i u istom prostoru.

// Promenljive definisane preko const keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju)
// ako se radi o drugom prostoru.
// Reinicijalizacija nije dozvoljena za promenljive definisane preko const.

var varijabla1; // Deklaracija - Pravljenje varijable
varijabla1 = 1; // Inicijalizacija - Dodeli njoj vrednost

var varijabla1 = 2;

var varijabla1 = 3;

// let - moze da se reinicijalizuje, ali ne moze da se redeklarise
let varijabla;

varijabla = 6;

varijabla = 7;

console.log(varijabla);

{
    let varijabla = 10;
    console.log(varijabla);
    var varijablaNeka = 5;
    {
        {
            {
                console.log(varijablaNeka, 'nestovani poziv');
                var varijablaOsma = 5;
            }
        }
    }
}

console.log(varijablaOsma, 'osma varijabla'); // sa let i const ne radi, sa var radi

console.log(varijabla);

// const - ne moze da se niti redeklarise niti da reinicijalizira
// u istom redu mora da se deklarise i inicijalizira
const varijablaDruga = 1;

{
    const varijablaDruga = 10;
    console.log(varijablaDruga);
}

// varijablaDruga = 2; - nema promena i daje gresku u konzoli

console.log(varijablaDruga);

// KONDICIJALNE "IZJAVE"

let brojGodina = 14;

if (brojGodina < 18) {
    console.log('Ne mozes da polazes vozacki');
} else {
    console.log('Mozes da polazes vozacki');
}
// U zavisnosti od uslova cemo imati drugaciji ispis

let satiTrenutno = 10;

if (satiTrenutno >= 12 && satiTrenutno < 23) {
    console.log('Dobar dan');
} else if (satiTrenutno > 7 && satiTrenutno < 12) {
    console.log('Dobro jutro');
} else {
    console.log('Laku Noc');
}
// Ako nije ispunjen if-ov uslov, onda gledamo druge uslove (druge else if-ove)
// ako nista nije ispunjeno ispisuje se podrazumevani else blok (zato i nema uslov)

if (satiTrenutno > 10) {
    console.log('Vece je od 10');
} else if (brojGodina < 20) {
    console.log('Imas manje od 20 godina');
}

if (satiTrenutno > 5) {
    console.log('Vece je od 5');
} else if (brojGodina < 20) {
    console.log('Imas manje od 20 godina');
} else {
    console.log('Postovanje gde si stigao');
}

// Ako imamo sad vise if-ova oni ne zavise jedan od drugog, samo njihovi else-ovi ili
// else if-ovi zavise od pocetnih if-ova

// 1. Zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i ispisuje
// u konzoli kolicnik x/y ako je broj y razlicit od nule, a inace ispisuje
// poruku: Deljenje je nemoguce.

// 2. Zadatak
// Na osnovu promenljive ispisati da li je ona pozitivan broj, negativan ili nula.

// 3. Zadatak
// Na osnovu ocene studenta (izmedju 1 i 5) napisati njegov uspeh
// Nedovoljan, Dovoljan, Dobar, Vrlo Dobar ili Odlican

// 4. Zadatak
// Na osnovu varijable odrediti da li je njen broj paran ili neparan

// 1. Zadatak, Resenje:
let x = 7;
let y = 2;

if (y !== 0) {
    console.log(x / y);
} else {
    console.log('Deljenje je nemoguce!');
}

// 2. Zadatak, Resenje:
if (y > 0) {
    console.log('Pozitivan');
} else if (y < 0) {
    console.log('Negativan');
} else {
    console.log('Nula');
}

// 3. Zadatak, Resenje:
let ocena = 5;

if (ocena === 1) {
    console.log('Nedovoljan');
} else if (ocena === 2) {
    console.log('Dovoljan');
} else if (ocena === 3) {
    console.log('Dobar');
} else if (ocena === 4) {
    console.log('Vrlo Dobar');
} else if (ocena === 5) {
    console.log('Odlican');
} else {
    console.log('Unesi ispravnu ocenu!');
}

// 4. Zadatak, Resenje:
let broj = 3;

if (broj % 2 === 1) {
    console.log('Neparan broj');
} else {
    console.log('Paran broj');
}

// if moze da stoji sam, else if i else ne mogu bez if-a da se koriste
