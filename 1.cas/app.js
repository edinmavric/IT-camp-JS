// Tipovi podataka
// PROSTI TIPOVI PODATAKA su osnovni tipovi podataka koji nam omogucavaju da oznacimo jednu vrednost
// 1.1. String -> predstavlja neki tekst
// * var stringVezba = "Ove je neki tekst"; *
// 1.2. Number -> predstavlja brojevnu vrednost odnosno omogucava da obavimo matematicke operacije
// * var numberVezba = 100; *
// 1.3. Bigint -> isto kao i number samo za skladistenje vecih brojeva
// * var bigIntVezba = BigInt(9876789765789876); *
// 1.4. Boolean -> predstavlja logicku vrednost
// * var booleanVezba = false; *
// 1.5. Undefined -> javlja da vrednost nije definisana
// * var undefinedVezba; *
// 1.6. Null -> javlja da vrednost ne postoji
// * var nullVezba = null; *
// 1.7. Symbol -> zastita podataka
// * var symbolVezba = Symbol('Skrivena Vrednost'); *

// Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

// var, let, const se koriste za inicijalizaciju promenljive

// ES5
var ime = 'Danel';
ime = 'Mustafa';
ime = 'Ensar';

console.log('Moje ime je: ', ime);
console.log(typeof ime);

var godine = 14;

alert(`Imam ${godine} godina`);
console.log(typeof godine);

var dinosaurus = BigInt(3456789876549876567);

console.log(dinosaurus);

var idemUSkolu = true;

console.log('Vrednost: ', idemUSkolu);
console.log('Tip: ', typeof idemUSkolu);

var a;

console.log(a);
console.log(typeof a);

var brojJedinica = null;

console.log(brojJedinica);
console.log(typeof brojJedinica);

var adresa = Symbol('Stevana Nemanje BB');

console.log(adresa);
console.log(Symbol('Stevana Nemanje BB'));

console.log(typeof adresa);

varijabla1 = 20;

console.log(varijabla1);

var varijabla1;

// ES6+

// // Ovo je dobro
// let varijabla2;
// varijabla2 = 20;
// console.log(varijabla2);

// // Ovo nije dobro
// varijabla2 = 20;
// console.log(varijabla2);
// let varijabla2;

// Za vezbu ekspirementisati sa varijablama i prikazom u konzoli.

var mojeIme = 'Edin';
var prezime = 'Mavric';
var punoIme = mojeIme + ' ' + prezime;

console.log(`Moje ime je ${punoIme}, imam ${godine + 6} godina.`);

var prviSabirak;
prviSabirak = 10;
var drugiSabirak = 20;
var rezultat = prviSabirak + drugiSabirak;

var rezultat = 'Isao sam u ' + skolaTa + '';
console.log(rezultat);

// Nacini imenovanja varijabli:

// snake case
var ime_i_prezime;

// upper camel case
var ImeIPrezime;

// lower camel case
var imeIPrezime;

// Pocetni dozvoljeni karakteri za deklaraciju varijabli

var $imeIPrezime;

var _imeIPrezime;
