// Upisivanje podataka u "storage"
localStorage.setItem('ime', 'Edin');
sessionStorage.setItem('prezime', 'Mavric');

// Citanje podataka iz "storage"
console.log(localStorage.getItem('ime'));
console.log(sessionStorage.getItem('prezime'));

// Prikazivanje podataka iz "storage" u HTML.
const ime = localStorage.getItem('ime');
const prezime = sessionStorage.getItem('prezime');
const pozdrav = document.getElementById('punoIme');

pozdrav.textContent = `Pozdrav, ${ime} ${prezime}!`;

//  Brisemo podatke iz "storage"
sessionStorage.removeItem('prezime');

console.log(sessionStorage.getItem('prezime'));

// Brisanje svega iz "storage"
localStorage.clear();

// Napraviti input i button za unos imena korisnika. Kada korisnik klikne na button
// ime se upisuje u localStorage. I kada se stranica refresuje, pozdrav sa imenom se prikaze.

window.onload = () => {
    let posete = sessionStorage.getItem('posete');

    if (posete) {
        posete = parseInt(posete) + 1;
    } else {
        posete = 1;
    }

    sessionStorage.setItem('posete', posete);
    document.getElementById('posete').textContent = posete;
};

const cuvanje = document.getElementById('sacuvaj');

cuvanje.addEventListener('click', () => {
    const inputValue = document.getElementById('input').value;
    localStorage.setItem('korisnik', inputValue);
    const pozdrav = document.getElementById('pozdrav');
    const imeIzInputa = localStorage.getItem('korisnik');
    pozdrav.textContent = `Pozdrav, ${imeIzInputa}`;
});

// Dodati dugme "Odjavi se" koje brise korisnika iz localStorage-a. I dodati sessionStorage
// varijablu koja pokazuje koliko puta se korisnik prijavio na sajt u ovoj sesiji.

const odjava = document.getElementById('odjava');

odjava.addEventListener('click', () => {
    localStorage.removeItem('korisnik');
    const pozdrav = document.getElementById('pozdrav');
    pozdrav.textContent = '';
    alert('Uspesno ste se odjavili!');
});
