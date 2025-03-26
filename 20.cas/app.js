// Napisi kod koji sortira sve vrednosti objekta po id-u:

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
    },
];

// console.log(library.sort((a, b) => b.libraryID - a.libraryID));

////////////////////////////////////

const person1 = {
    firstName: 'Ensar',
    name: function () {
        return `${this.firstName}`;
    },
};

const person2 = {
    firstName: 'Benjamin',
};

console.log(person1.name());

// Pozivanje neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcija:
// 1. call();
// 2. apply();
// 3. bind();

// call(), apply(), i bind() su metode u JavaScript-u koje omogućavaju
// eksplicitno postavljanje this konteksta pri pozivanju funkcije.

// Prvo treba pristuputi funkciji, pa onda objasniti na kom se objektu treba primeniti.

console.log(person1.name.call(person2));

const restoran1 = {
    hrana: 'spagete',
    gosti: 'veoma zadovoljni',
    lokacija: 'Stevana Nemanje, 64',
};

const restoran2 = {
    hrana: 'burek',
    gosti: 'zgadjeni',
    lokacija: 'Stanice Spasojevic, 62',
};

function poruka(mesto, drzava) {
    return `Vecerasnji specijalitet u nasem restoranu je bio ${this.hrana}. Nasi gosti su ${this.gosti}, te smo srecni zbog toga. \n Nalazimo se u ulici ${this.lokacija}, u ${mesto}, ${drzava}.`;
}

// console.log(poruka.call(restoran1, 'Novi Pazar', 'Srbija'));
//
// console.log(poruka.apply(restoran2, ['Beograd', 'Srbija']));
//
const bindFunction = poruka.bind(restoran1);
// console.log(bindFunction('Sarajevo', 'Bosna i Hercegovina'));

// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

const automobil = {
    marka: 'Audi',
    model: 'Q7',
    boja: 'Bela',
    pogon: 'quattro',
    menjac: 'Automatik',
    km: 240000,
    vlasnik: ['062321552', '063930630'],
    garaza: {
        parking: 'JKP Servis',
        vikend: 'od 17 free',
        satnaKarta: 50,
        dnevnaKarta: 200,
        mesecnaKarta: 2000,
    },
};

function povecajCenu() {
    this.satnaKarta *= 1.2;
    this.dnevnaKarta *= 1.2;
    this.mesecnaKarta *= 1.2;
}

povecajCenu.call(automobil.garaza);
console.log(automobil.garaza);

// Napraviti funkciju koja ce da primi argument kilometara i da uveca postojece kilometre za taj argument.

function povecajKilometrazu(km) {
    this.km += km;
}

const bindToKm = povecajKilometrazu.bind(automobil);
bindToKm(5000);
console.log(automobil.km);

// Napraviti funkciju koja dodaje novog vlasnika u niz "vlasnik".

function dodajVlasnika(...vlasnik) {
    this.vlasnik.push(...vlasnik);
    // ako direktno console.log-ujemo onda moramo da kazemo {return this}
}

dodajVlasnika.apply(automobil, ['0987654', '0654987']);
console.log(automobil.vlasnik);

// Primamo novaBoja kao parametar i promenimo staru boju da nam bude novaBoja

function promeniBoju(novaBoja) {
    this.boja = novaBoja;
}

promeniBoju.call(automobil, 'Crvena');

console.log(automobil.boja);

// Kreirati novi niz u kojem su sve cene na popustu za 20% - map()
// i onda prikazemo sumu svih cena (posle popusta) - reduce()

const produkti = [
    { name: 'Laptop', price: 1000 },
    { name: 'Telefon', price: 600 },
    { name: 'Tablet', price: 800 },
];

const produktiNaPopustu = produkti.map(produkt => ({
    ...produkt,
    price: produkt.price * 0.8,
}));

// let suma = 0;
// let produkt = { name: 'Laptop', price: 800 }

const ukupnaCena = produktiNaPopustu.reduce((suma, produkt) => suma + produkt.price, 0);

console.log(ukupnaCena);
