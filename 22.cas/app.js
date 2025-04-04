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
