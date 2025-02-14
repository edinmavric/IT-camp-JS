// OPERATORI U JAVASCRIPTU //
// Podelicemo operatore u 6 grupa:

//  1. Aritmeticki operatori (Artimetic operators): +, -, *, /, **, %, ++, --
//  2. Operatori dodele vrednosti (Assigment operators); +=, -=, /=, *=, %=, **=
//  3. String operatori (String operators);
//  4. Operatori poredjenja (Comparison operators); ==, ===, !=, !==, >, <, >=, <=
//  5. Logicki operatori (Logical operators); &&, ||, !
//  6. Tip operatori (Type operators). typeof, instanceof

// 1. Aritmeticki operatori
// 1.1 Sabiranje
console.log(2 + 2);

// 1.2 Oduzimanje
console.log(5 - 2);

// 1.3 Mnozenje
console.log(5 * 2);

// 1.4 Deljenje
console.log(5 / 2);

// 1.5 Kvadrat
console.log(2 ** 1); // 2

// 1.6 Modul(Ostatak pri deljenju)
console.log(5 % 7); //2

var i = 5;
// 1.7 Inkrement
// Post Inkrement
console.log(i++); // 5 = 5 + 1

// Pre Inkrement
console.log(++i);

// 1.8 Dekrement
// Post Dekrement
console.log(i--); // 5 = 5 - 1

// Pre Dekrement
console.log(--i); // Ovo se izvrsava pre Iteracije (Neke operacije u kodu)

// 2. Operatori dodele vrednosti
// 2.1
console.log('---');

var a = 5;
console.log((a += 2), 'Sabiranje'); // a = a + 2

// 2.2

var b = 5;
console.log((b -= 2), 'Oduzimanje'); // b = b - 2

// 2.3

var c = 5;
console.log((c *= 2), 'Mnozenje'); // c = c * 2

// 2.4

var d = 5;
console.log((d /= 2), 'Deljenje'); // d = d / 2

// 2.5

var e = 5;
console.log((e %= 2), 'Modul'); // e = e % 2

// 2.6

var f = 5;
console.log((f **= 2), 'Kvadrat'); // f = f ** 2

// 3.1

console.log('Moje ime je' + ' ' + 'Edin');
console.log('Moje ime je' - ' ' - 'Edin'); // Ovo nam vraca NaN (Not a Number)

// String kad se sabira sa bilo cime rezultat postaje string
console.log(3 + '5'); // 35
console.log(5 + parseInt('4')); // 9
console.log('5' - 3); // 2
console.log(5 * '2'); // 10
console.log(5 - 'Ja sam'); // Ovo nam vraca NaN (Not a Number)
console.log(5 + ' Ja sam'); // 5 Ja sam

// 4. Operatori poredjenja

// 4.1 Dva jednako
// Samo nas zanima vrednost

console.log(2 == 2); // true
console.log(3 == 2); // false
console.log('2' == 2); // true

// 4.2 Tri jednako
// I vrednost i TIP!
// Bolje za koriscenje
console.log('---');

console.log(2 === 2); // true
console.log(3 === 2); // false
console.log('2' === 2); // false
console.log('2' === '2'); // true

// 4.3 !=

console.log('---');

console.log(2 != 2); // false
console.log(3 != 2); // true
console.log('2' != 2); // false

// 4.4 !==
console.log('---');

console.log(2 !== 2); // false
console.log(3 !== 2); // true
console.log('2' !== 2); // true
console.log('2' !== '2'); // false

// 4.5 > <  - Mora da bude striktno manje ili vece
// >= <=

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false

// Kod uporedjivanja dobijamo ili true ili false

// 5. Logicki operatori

// 5.1 && - I - Moraju obe vrednosti da nam budu tacne
console.log('---');

console.log(5 > 3 && 2 > 1); // true
console.log(1 >= 1 && 1 + 1); // 2 - Posto je poslednja vrednost izvrsena Aritmetickim Operatorom
console.log(1 + 1 && 1 >= 1); // true

// 5.2 || - ILI - Bar jedan uslov ispunjen (true)
console.log('---');

console.log(5 > 7 || 2 > 4); // false
console.log(1 - 1 || 1 >= 1); // true - jer je 0 falsy vrednost
console.log(1 + 1 || 1 >= 1); // 2
console.log(1 >= 1 || 1 + 1); // true
console.log(1 > 1 || 1 + 1); // 2
console.log(5 > 6 || 2 > 1); // true

// console.log(4 > 5 || 3 > 5 && 3 > 2); false

// 5.3 ! - (KONTRA OPERATOR) - Not Operator

console.log(!(5 > 4) || !(4 > 5));

// 6. Tip Operatori
console.log('---');
console.log(typeof 'Edin');

const obj = {
    ime: 'Omar',
    prezime: 'Semsovic',
};

// kada deklarisemo varijablu koja je objekat, ona u pozadini se deklarise
// sa new Object zato nam je svaki objekat instanca klase Object

const obj2 = new Object({ ime: 'Omar', prezime: 'Semsovic' });

const nekiString = new String('Edin');

console.log(obj instanceof Object);

console.log(nekiString instanceof String); // true
console.log('Edin' instanceof String); // false

var niz = [1, 2, 3];

console.log(niz instanceof Object);

console.log(typeof Object);

console.log(typeof String);

let x = new String(5);
console.log(typeof x);
