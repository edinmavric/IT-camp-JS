const users = [
    { id: 1, name: 'Ana', age: 22, isStudent: true },
    { id: 2, name: 'Marko', age: 28, isStudent: false },
    { id: 3, name: 'Ivana', age: 19, isStudent: true },
    { id: 4, name: 'Nikola', age: 35, isStudent: false },
    { id: 5, name: 'Jovana', age: 24, isStudent: true },
];

// map – transformacija podataka
// Napraviti niz imena svih korisnika
// ➤ ["Ana", "Marko", "Ivana", "Nikola", "Jovana"]

// Dodati novo polje status koje je "student" ili "non-student" u svakom objektu
// ➤ map koji dodaje status na osnovu isStudent

// ---

// filter – filtriranje podataka
// Filtrirati samo studente
// ➤ isStudent === true

// Filtrirati sve korisnike mlađe od 25 godina

// ---

// reduce – sabiranje, agregacija
// Izračunati ukupan broj godina svih korisnika

// Napraviti objekat sa brojem studenata i ne-studenata
// ➤ Rezultat: { students: 3, nonStudents: 2 }

// ---

// find – pronalaženje jednog elementa
// Pronaći korisnika po imenu "Ivana"

// Pronaći prvog korisnika koji ima više od 30 godina

// ---

// sort – sortiranje
// Sortirati korisnike po imenu abecedno

// Sortirati korisnike po godinama (rastuce)

// ---

// some i every – provere
// Da li postoji bar jedan student stariji od 30? → true/false

// Da li su svi korisnici stariji od 18?

// ---

// Bonus kombinovani zadaci
// Izlistati imena svih studenata starijih od 20 godina, sortirana po godinama

// Pronaći prosečne godine korisnika

// --- NAPREDNIJE ---

const employees = [
    { id: 1, name: 'Milan', department: 'IT', salary: 1200, experience: 3 },
    { id: 2, name: 'Ana', department: 'HR', salary: 1000, experience: 5 },
    {
        id: 3,
        name: 'Marko',
        department: 'Finance',
        salary: 1500,
        experience: 7,
    },
    { id: 4, name: 'Jovana', department: 'IT', salary: 2000, experience: 10 },
    { id: 5, name: 'Nikola', department: 'HR', salary: 1300, experience: 6 },
    {
        id: 6,
        name: 'Ivana',
        department: 'Finance',
        salary: 1100,
        experience: 4,
    },
    { id: 7, name: 'Stefan', department: 'IT', salary: 1800, experience: 8 },
];

// 1️⃣ Pronalaženje zaposlenog sa najvećom platom u IT sektoru
// ➤ Koristi filter, reduce ili sort.

// 2️⃣ Prosečna plata zaposlenih sa iskustvom većim od 5 godina
// ➤ Koristi filter i reduce.

// 3️⃣ Lista imena zaposlenih sortirana po godinama iskustva opadajuće
// ➤ sort + map.

// 4️⃣ Kreiraj objekat gde su ključevi departmani, a vrednosti nizovi imena zaposlenih u tom sektoru
// ➤ Rezultat treba da bude:
// {
//   IT: ["Milan", "Jovana", "Stefan"],
//   HR: ["Ana", "Nikola"],
//   Finance: ["Marko", "Ivana"]
// }
// ➤ Koristi reduce.

// 5️⃣ Da li svi zaposleni u IT sektoru imaju platu veću od 1500?
// ➤ every.

// 6️⃣ Da li postoji bar jedan zaposleni sa platom većom od 2000?
// ➤ some.

// 7️⃣ Napravi novi niz gde će za svakog zaposlenog biti dodato polje bonus koje iznosi 10% njihove plate
// ➤ map.

// 8️⃣ Koliko ukupno firma plaća zaposlenima u IT sektoru?
// ➤ filter + reduce.

// 9️⃣ Sortiraj zaposlene po plati, ali ako su iste plate, onda sortiraj po iskustvu opadajuće
// ➤ sort.

// 🔟 Pronađi zaposlenog iz HR sektora sa najviše iskustva i poveća mu platu za 15%
// ➤ filter + reduce + map.

// DOMACI 21. CAS ->
// Zadaci za map
// 1.
const words = ['apple', 'banana', 'cherry', 'date'];
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords); // ["APPLE", "BANANA", "CHERRY", "DATE"]
// 2.
const wordLengths = words.map(word => word.length);
console.log(wordLengths); // [5, 6, 6, 4]

// Zadaci za reduce
// 3.
const numbers = [3, 7, 2, 9, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 26
// 4.
const text = 'banana';
const frequency = text.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log(frequency); // { b: 1, a: 3, n: 2 }

// Zadaci za filter
// 5.
const nums = [12, 3, 7, 18, 9, 21, 30];
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); // [12, 18, 30]
// 6.
const animals = ['dog', 'elephant', 'cat', 'giraffe'];
const longWords = animals.filter(word => word.length > 3);
console.log(longWords); // ["elephant", "giraffe"]

// Zadaci za slice i splice
// 7.
const colors = ['red', 'green', 'blue', 'yellow', 'black'];
const firstThree = colors.slice(0, 3);
console.log(firstThree); // ["red", "green", "blue"]
// 8.
const updatedColors = [...colors]; // da ne menjamo originalni niz
updatedColors.splice(-2, 2, 'white', 'purple');
console.log(updatedColors); // ["red", "green", "blue", "white", "purple"]

// Zadaci za toSorted, toReversed, toSpliced
// 9.
const scores = [88, 72, 95, 60, 83];
const sortedDesc = scores.toSorted((a, b) => b - a);
console.log(sortedDesc); // [95, 88, 83, 72, 60]
// 10.
const animalsList = ['lion', 'tiger', 'bear', 'wolf'];
const reversed = animalsList.toReversed();
console.log(reversed); // ["wolf", "bear", "tiger", "lion"]
// 11.
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
const modifiedFruits = fruits.toSpliced(2, 1, 'grape');
console.log(modifiedFruits); // ["apple", "banana", "grape", "date", "fig"]

// ZADACI 22. CAS ->
// --- VEZBA ---
// - map -
const names = users.map(user => user.name);
console.log(names); // ["Ana", "Marko", "Ivana", "Nikola", "Jovana"]

const withStatus = users.map(user => ({
    ...user,
    status: user.isStudent ? 'student' : 'non-student',
}));
console.log(withStatus);

// - filter -
const students = users.filter(user => user.isStudent);
console.log(students);

const under25 = users.filter(user => user.age < 25);
console.log(under25);

// - reduce -
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 128

const countByStatus = users.reduce(
    (acc, user) => {
        if (user.isStudent) {
            acc.students++;
        } else {
            acc.nonStudents++;
        }
        return acc;
    },
    { students: 0, nonStudents: 0 }
);
console.log(countByStatus); // { students: 3, nonStudents: 2 }

// - find -
const ivana = users.find(user => user.name === 'Ivana');
console.log(ivana);

const over30 = users.find(user => user.age > 30);
console.log(over30);

// - sort -
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(byName);

const byAge = [...users].sort((a, b) => a.age - b.age);
console.log(byAge);

// - some & every -
const studentOver30 = users.some(user => user.isStudent && user.age > 30);
console.log(studentOver30); // false

const allOver18 = users.every(user => user.age > 18);
console.log(allOver18); // true

// - bonus -
const sortedStudentNames = users
    .filter(user => user.isStudent && user.age > 20)
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);
console.log(sortedStudentNames); // ["Ana", "Jovana"]

const averageAge =
    users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge.toFixed(2)); // "25.60"

// NAPREDNI ZADACI 22. CAS ->
// - NAPREDNI -

const highestPaidIT = employees
    .filter(emp => emp.department === 'IT')
    .reduce((max, emp) => (emp.salary > max.salary ? emp : max));

console.log(highestPaidIT);
// { id: 4, name: "Jovana", department: "IT", salary: 2000, experience: 10 }

const experiencedEmployees = employees.filter(emp => emp.experience > 5);
const avgSalary =
    experiencedEmployees.reduce((sum, emp) => sum + emp.salary, 0) /
    experiencedEmployees.length;

console.log(avgSalary.toFixed(2)); // 1540.00

const sortedByExperience = employees
    .sort((a, b) => b.experience - a.experience)
    .map(emp => emp.name);

console.log(sortedByExperience);
// ["Jovana", "Marko", "Stefan", "Nikola", "Ana", "Ivana", "Milan"]

const departmentGroups = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp.name);
    return acc;
}, {});

console.log(departmentGroups);
/*
  {
    IT: ["Milan", "Jovana", "Stefan"],
    HR: ["Ana", "Nikola"],
    Finance: ["Marko", "Ivana"]
  }
  */

const allITAbove1500 = employees
    .filter(emp => emp.department === 'IT')
    .every(emp => emp.salary > 1500);

console.log(allITAbove1500); // false (jer Milan ima 1200)

const hasHighEarner = employees.some(emp => emp.salary > 2000);
console.log(hasHighEarner); // false (niko nema više od 2000)

const withBonus = employees.map(emp => ({
    ...emp,
    bonus: emp.salary * 0.1,
}));

console.log(withBonus);
/*
  [
    { id: 1, name: "Milan", salary: 1200, bonus: 120 },
    { id: 2, name: "Ana", salary: 1000, bonus: 100 },
    ...
  ]
  */

const totalITSalary = employees
    .filter(emp => emp.department === 'IT')
    .reduce((sum, emp) => sum + emp.salary, 0);

console.log(totalITSalary); // 5000

const sortedBySalaryAndExperience = [...employees].sort((a, b) => {
    if (b.salary !== a.salary) {
        return b.salary - a.salary; // prvo po plati (opadajuće)
    }
    return b.experience - a.experience; // zatim po iskustvu (opadajuće)
});

console.log(sortedBySalaryAndExperience);

const mostExperiencedHR = employees
    .filter(emp => emp.department === 'HR')
    .reduce((max, emp) => (emp.experience > max.experience ? emp : max));

const updatedEmployees = employees.map(emp =>
    emp.id === mostExperiencedHR.id
        ? { ...emp, salary: emp.salary * 1.15 }
        : emp
);

console.log(updatedEmployees);
