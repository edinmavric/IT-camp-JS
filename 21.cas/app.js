// Imate niz korisnika:
const users = [
    { id: 1, name: 'Milan', age: 27 },
    { id: 2, name: 'Jovana', age: 35 },
    { id: 3, name: 'Stefan', age: 22 },
];

// Zadatak:
// Koristeći reduce, izračunajte prosečnu starost korisnika.

const averageAge =
    users.reduce((acc, user) => acc + user.age, 0) / users.length;

/////////

const employees = [
    { id: 1, name: 'Nikola', age: 45, salary: 2200 },
    { id: 2, name: 'Ana', age: 29, salary: 1800 },
    { id: 3, name: 'Marko', age: 35, salary: 2500 },
    { id: 4, name: 'Milica', age: 42, salary: 3000 },
];

// Zadatak:
// Pronađite sve zaposlene starije od 30 godina. - filter()
// Sortirajte ih po plati opadajuće(Od najvece do najmanje). - toSorted()

const sortiraniPoPlatama = employees
    .filter(emp => emp.age > 30)
    .toSorted((a, b) => b.salary - a.salary);

// console.log(sortiraniPoPlatama);
// console.log(employees);

const books = [
    { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 2, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 3, title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
];

// Zadatak:
// Koristeći map, napravite niz stringova u formatu "Naslov - Autor (Godina)".

const bookDescriptions = books.map(
    book => `${book.title} - ${book.author} (${book.year})`
);

// console.log(bookDescriptions);

// const bookDescriptions = books.map(book => `<li>${book.title}</li>`).join('');
// console.log('<ul>' + bookDescriptions + '</ul>');

// Imate niz brojeva:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Koristeći reduce, napravite objekat sa dve grupe: even (parni brojevi) i odd (neparni brojevi).

const groupedNumbers = numbers.reduce(
    (acc, num) => {
        num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
        return acc;
    },
    { even: [], odd: [] }
);

// console.log(groupedNumbers);

const products = [
    { id: 1, name: 'Telefon', price: 500 },
    { id: 2, name: 'Laptop', price: 1200 },
    { id: 3, name: 'Miš', price: 25 },
];

// Grupisanje proizvoda po ceni (jeftini i skupi)
// Koristeći reduce, podelite proizvode iz products niza u dve kategorije:
// cheap (manje od 100€)
// expensive (100€ i više)

// Rezultat treba da bude objekat oblika:
// {
//   cheap: [...],
//   expensive: [...]
// }

const groupedProducts = products.reduce(
    (acc, product) => {
        product.price < 100
            ? acc.cheap.push(product.name)
            : acc.expensive.push(product.name);

        return acc;
    },
    { cheap: [], expensive: [] }
);

console.log(groupedProducts);
