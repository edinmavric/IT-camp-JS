// Objekti su promenljive koje sadrze vise vrednosti.
// Predstavljaju se u key:value parovima.

const person = {
    firstName: 'Edin',
    age: 20,
    adult: true,
};

// console.log(person);

// Pristupanje odredjenim vrednostima objekta mozemo izvrsiti na 2 nacina:
// Jedan key:value par se property (svojstvo).

// object.key
person.firstName;

// object['key']
person['firstName'];

// Zadatak 1: Kreiranje i pristup objektima
// Napravi objekat student sa sledećim svojstvima:
// ime (string)
// prezime (string)
// godine (number)
// prosek (number)
// Prikaži ime i prezime koristeći oba načina pristupa
// (objectName.propertyName i objectName["propertyName"]).

// Object Methods //
// Objekti takodje mogu imati metode.
// Metode su funkcije koje ce se izvrsiti na objektu.
// Metode su skladistene u svojstvima kao definicije funkcija.

const person2 = {
    firstName: 'Ensar',
    lastName: 'Golos',
    age: 24,
    adult: true,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

// console.log(person2.fullName());

// u JavaScriptu {this} je keyword (rezervisana rec) koja ukazuje na objekat koji je pozove.
// {this} nije promenljiva i ne mozemo promeniti vrednost {this}.
// {this} ukazuje na razlicit objekat u zavisnosti od toga gde se koristi.

// U nekom objektu this ukazuje na taj objekat.
// U global scope-u this ukazuje na global object.

// Zadatak 2: Dodavanje metoda u objekat
// Dodaj objektu student metodu punoIme koja vraća puno ime studenta kao jedan string.
// Pozovi tu metodu i prikaži rezultat u konzoli.

// JS objekti su mutable (promenljivi) //

const person3 = {
    ime: 'Benjamin',
    prezime: 'Bogucanin',
    godine: 24,
};

// Kada kreiramo objekat person3, on se cuva u memoriji i promenljiva person3 samo sadrzi
// referencu (adresu) tog objekta.

const person4 = person3;
// Ovo NE kopira objekat, vec promenljiva person4 sada pokazuje na isti objekat u memoriji kao i person3.
// Zato, kada promenis person4, menjas originalni objekat koji postoji u memoriji:

// console.log(person4);
person4.ime = 'Fatih';
person4.godine = 22;
// Ove promene se dešavaju na istom objektu kojem obe promenljive (person3 i person4) pristupaju.
// console.log(person4);
// console.log(person3);

// Ako bi zeleli kopiju objekta, a ne referencu
const person5 = { ...person3 };

person5.ime = 'Danel';
// console.log(person5);
// console.log(person3);

// 2. nacin: const person4 = Object.assign({}, person3);

// Zadatak 3: Mutable objekti
// Napravi novi objekat car sa sledećim svojstvima:
// marka (string)
// model (string)
// godiste (broj)
// Napravi promenljivu auto i dodeli joj vrednost car.
// Promeni model i godiste kroz promenljivu auto.
// Prikaži car i auto u konzoli i objasni rezultat!

// Brisanje svojstava iz objekta:

const person6 = {
    ime: 'Mustafa',
    prezime: 'Hodzic',
    godine: 14,
    skola: 'Camil',
};

// console.log(person6);

delete person6.skola;
person6.skola = 'Gimazija';
// delete person6['skola'];

// console.log(person6);

const nizVrednosti = Object.values(person);
// console.log(nizVrednosti);

const nizKljuceva = Object.keys(person);
// console.log(nizKljuceva);

const nizUlaza = Object.entries(person);
// console.log(nizUlaza);

// [firstName: 'Edin'],
// [age: 20],
// [adult: true],

// console.log(nizUlaza[0][1]);

// Zadatak 4: Brisanje svojstava
// Napravi objekat telefon sa svojstvima brend, model i cena.
// Obriši svojstvo cena koristeći delete i prikaži objekat u konzoli.

// Zadatak 5: Konvertovanje objekta u niz
// Napravi objekat knjiga sa sledećim svojstvima:
// naslov (string)
// autor (string)
// godinaIzdanja (broj)
// Konvertuj vrednosti objekta u niz i prikaži rezultat u konzoli.

// Zadatak 6:
// Napraviti objekat racunar koji ima svojstva procesor, ram, graficka i godinaProizvodnje.
// Dodati metodu info koja vraća string sa informacijama o računaru.

// Zadatak 7:
// Napraviti objekat korisnik sa svojstvima ime, prezime i email. Napraviti Deep kopiju i promeniti
// vrednost email u kopiji, videti da li se email promenio i u originalnom objektu.

// Zadatak 8:
// Pomocu forEach metode ili for petlje ispisati sve vrednosti iz objekta nad kojim je
// koriscena metoda Object.entries

const student = {
    ime: 'Muhamed',
    prezime: 'Saracevic',
    godine: 18,
    grad: 'Novi Pazar',
};

Object.entries(student).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
});

const ulazi = Object.entries(student);
for (let i = 0; i < ulazi.length; i++) {
    console.log(ulazi[i][0]);
    console.log(ulazi[i][1]);
}
