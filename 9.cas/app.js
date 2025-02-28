// Built-in Funkcije

// 1. Ugradjene funkcije za Brojeve

// Sa parseInt funkcijom vracamo ceo broj
console.log(Number.parseInt('42')); // 42 -> nije string
console.log(typeof Number.parseInt('42')); // number
console.log(typeof '42'); // string
console.log(Number.parseInt('edin')); // NaN (Nije Broj)

// Sa parseFloat funkcijom vracamo decimalni broj
console.log(Number.parseFloat('3.14'));

// Sa isInteger proveravamo da li je varijabla ceo broj (ne decimala)
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger('10')); // false
console.log(Number.isInteger(10.5)); // false

// Sa isNaN proveravamo da li je vrednost bukvalno NaN (Nije Broj)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('edin')); // false
console.log(Number.isNaN(10)); // false

console.log((123.456).toFixed(2)); // "123.46" (zaokružuje na 2 decimale)
console.log((123.456).toPrecision(4)); // "123.5" (prikazuje ukupno 4 cifre)

// 2. Matematicke Ugradjene funkcije

// samo apsolutna vrednost broja
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
console.log(Math.abs(-5.5)); // 5.5

// zaokruzivanje brojeva na cele, round kao normalan, ceil na veci i floor na manji broj
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

// Minimalni I Maksimalni broj od ponudjenih
Math.max(100, 200, 10, 1, 500); // 500
Math.min(100, 200, 10, 1, 500); // 1

Math.pow(3, 2); // 3 na kvadrat, 9
// isto kao ovo => 3 ** 2

Math.sqrt(25); // 5 (kvadratni koren iz 25)
// Uvek je kvadratni koren

// Math.random() generise broj izmedju 0 i 1
console.log(+(Math.random() * 100).toFixed(0));

// slican kao floor
console.log(Math.trunc(4.987877)); // 4

// 3. Funkcije za stringove

// Nalazenje duzine niza
console.log('string'.length); // 6
console.log('string '.length); // 7 -> Zbog praznog prostora

console.log('Hello'.toLowerCase()); // hello
console.log('Hello'.toUpperCase()); // HELLO

console.log('hello world'.charAt(0)); // h
console.log('hello world'.charAt(5)); // (prazno mesto)

console.log('hello world'.indexOf('l')); // 2 -> prvo pojavljivanje
console.log('hello world'.lastIndexOf('l')); // 9 -> poslednje pojavljivanje

console.log('hello'.concat(' world')); // hello world
// kao 'hello' + ' world'

// uklanja prazan prostor sa pocetka i kraja stringa
console.log('   hello hello world   '.trim()); // hello hello world

console.log('hello world world world'.replace('world', 'students')); // hello students world world
console.log('hello world world world'.replaceAll('world', 'students')); // hello students students students

console.log('hello world'.split('')); // pretvara string u niz

console.log('hello world '.repeat(3));

'hello'.includes('he'); // true (proverava da li string sadrži podstring)
'hello'.startsWith('he'); // true (proverava da li počinje sa "he")
'hello'.endsWith('lo'); // true (proverava da li se završava sa "lo")
