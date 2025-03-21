// map()
//1. Napiši funkciju koja prima niz rečenica i vraća niz gde je svaka rečenica preokrenuta rečima, npr.
// Ulaz: ["Hello world", "JavaScript is fun"]
// Izlaz: ["world Hello", "fun is JavaScript"]

const reversedWords = arr => arr.map(str => str.split(' ').reverse().join(' '));
console.log(reversedWords(['Hello world', 'JavaScript is fun']));

//2. Napiši funkciju koja uzima niz brojeva i vraća niz istih brojeva, ali kao stringove sa dodatim "$" na kraj.

const addDollar = arr => arr.map(num => num + '$');
console.log(addDollar([10, 20, 100]));

// slice()
//1. Napiši funkciju koja prima niz i vraća sve elemente osim poslednjih 3.
//2. Napiši funkciju koja iz stringa izdvaja poslednjih 10 karaktera bez korišćenja negativnog indeksa (slice(-n)).
//3. Napiši funkciju koja uzima deo niza između prvog pojavljivanja 5 i poslednjeg pojavljivanja 10.

const sliceBetween = arr => {
    let start = arr.indexOf(5);
    let end = arr.lastIndexOf(10);
    return arr.slice(start, end + 1);
};

console.log(sliceBetween([1, 2, 3, 5, 3, 4, 6, 10, 12]));

// splice()
//1. Napiši funkciju koja iz niza uklanja sve elemente između prvog i poslednjeg pojavljivanja broja 0.

const removeBetweenZeroes = arr => {
    let start = arr.indexOf(0);
    let end = arr.lastIndexOf(0);
    return arr.splice(start + 1, end - start - 1);
};

console.log(removeBetweenZeroes([1, 2, 0, 5, 3, 4, 6, 0, 12]));

//2. Napiši funkciju koja u niz stringova dodaje "!!!" na kraj svakog elementa koristeći splice().

const addExclamations = arr => {
    for (let i = 0; i < arr.length; i++) arr.splice(i, 1, arr[i] + '!!!');
    return arr;
};

console.log(addExclamations(['Radite', 'Domace', 'Bre']));

// reduce()
//1. Napiši funkciju koja prima niz brojeva i vraća proizvod svih brojeva.
//2. Napiši funkciju koja prima niz stringova i vraća objekat gde su ključevi stringovi,
//   a vrednosti broj ponavljanja tih stringova u nizu.
//   ['asd', 'asdas', ...]

const countWords = arr =>
    arr.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

console.log(countWords(['asd', 'asd', 'str', 'asd']));

//3. Napiši funkciju koja prima niz objekata {ime, godine} i vraća prosečnu starost.

// filter()
//1. Napiši funkciju koja vraća samo brojeve koji su savršeni kvadratni koreni iz niza.
//   Number.isInteger(Math.sqrt(num))
//2. Napiši funkciju koja iz niza reči vraća samo one koje su palindromi.

const isPalindromes = arr =>
    arr.filter(
        str =>
            str.toLowerCase().replaceAll(' ', '') ===
            str.toLowerCase().replaceAll(' ', '').split('').reverse().join('')
    );

console.log(isPalindromes(['Oko', 'Cas', 'zazaz', 'sasa']));

// forEach()
//1. Napiši funkciju koja uzima niz stringova i ispisuje svaki string velikim slovima zajedno sa
//   njegovim brojem karaktera.
//2. Napiši funkciju koja prima niz brojeva i ispisuje "paran" ili "neparan" za svaki broj.

// some()
//1. Napiši funkciju koja proverava da li postoji reč u nizu koja počinje i završava se istim slovom.

// every()
//2. Napiši funkciju koja proverava da li su svi stringovi u nizu palindromi.
