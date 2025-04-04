const users = [
  { id: 1, name: "Ana", age: 22, isStudent: true },
  { id: 2, name: "Marko", age: 28, isStudent: false },
  { id: 3, name: "Ivana", age: 19, isStudent: true },
  { id: 4, name: "Nikola", age: 35, isStudent: false },
  { id: 5, name: "Jovana", age: 24, isStudent: true }
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