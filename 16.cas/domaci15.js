// 1. Filtriranje parnih brojeva
function filtrirajParne(niz) {
    let rezultat = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 === 0) {
            rezultat[rezultat.length] = niz[i];
        }
    }
    return rezultat;
}

// 2. Pronalaženje najčešćeg broja u nizu
function najcesciBroj(niz) {
    let brojac = {};
    let maxBroj = niz[0],
        maxPonavljanja = 1;
    for (let i = 0; i < niz.length; i++) {
        let broj = niz[i];
        if (brojac[broj] === undefined) {
            brojac[broj] = 1;
        } else {
            brojac[broj]++;
        }
        if (brojac[broj] > maxPonavljanja) {
            maxPonavljanja = brojac[broj];
            maxBroj = broj;
        }
    }
    return maxBroj;
}

// 3. Rotacija elemenata u nizu
function rotirajNiz(niz, pomeraj) {
    let duzina = niz.length;
    let rezultat = [];
    for (let i = 0; i < duzina; i++) {
        let noviIndeks = (i + pomeraj) % duzina;
        rezultat[noviIndeks] = niz[i];
    }
    return rezultat;
}

// 4. Formatiranje telefonskog broja
function formatirajBroj(niz) {
    let rezultat = '(';
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i];
        if (i === 2) rezultat += ') ';
        if (i === 5) rezultat += '-';
    }
    return rezultat;
}

// 5. Provera palindroma u nizu
function jePalindrom(niz) {
    let duzina = niz.length;
    for (let i = 0; i < duzina / 2; i++) {
        if (niz[i] !== niz[duzina - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 6. Zamena svih pojavljivanja broja u nizu
function zameniBroj(niz, cilj, zamena) {
    let rezultat = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] === cilj) {
            rezultat[rezultat.length] = zamena;
        } else {
            rezultat[rezultat.length] = niz[i];
        }
    }
    return rezultat;
}

// 7. Prosek vrednosti u nizu
function prosecnaVrednost(niz) {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir / niz.length;
}

// 8. Pronalazak dva broja koja daju zadati zbir
function nadjiPar(niz, cilj) {
    for (let i = 0; i < niz.length; i++) {
        for (let j = i + 1; j < niz.length; j++) {
            if (niz[i] + niz[j] === cilj) {
                return [niz[i], niz[j]];
            }
        }
    }
    return null;
}

// 9. Grupisanje brojeva po parnosti
function grupisiPoParnosti(niz) {
    let rezultat = { parni: [], neparni: [] };
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 === 0) {
            rezultat.parni[rezultat.parni.length] = niz[i];
        } else {
            rezultat.neparni[rezultat.neparni.length] = niz[i];
        }
    }
    return rezultat;
}

// 10. Pronalaženje drugog najmanjeg i drugog najvećeg broja u nizu
function drugiNajmanjiNajveci(niz) {
    let min = Infinity,
        drugiMin = Infinity;
    let max = -Infinity,
        drugiMax = -Infinity;
    for (let i = 0; i < niz.length; i++) {
        let broj = niz[i];
        if (broj < min) {
            drugiMin = min;
            min = broj;
        } else if (broj < drugiMin && broj !== min) {
            drugiMin = broj;
        }
        if (broj > max) {
            drugiMax = max;
            max = broj;
        } else if (broj > drugiMax && broj !== max) {
            drugiMax = broj;
        }
    }
    return [drugiMin, drugiMax];
}

// 2 NACINI:

// 1. Filtriranje parnih brojeva
function filtrirajParne(niz) {
    return niz.filter(broj => broj % 2 === 0);
}

// 2. Pronalaženje najčešćeg broja u nizu
function najcesciBroj(niz) {
    let brojac = niz.reduce((acc, broj) => {
        acc[broj] = (acc[broj] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(brojac).reduce((a, b) =>
        brojac[a] > brojac[b] ? a : b
    );
}

// 3. Rotacija elemenata u nizu
function rotirajNiz(niz, pomeraj) {
    return [
        ...niz.slice(pomeraj % niz.length),
        ...niz.slice(0, pomeraj % niz.length),
    ];
}

// 4. Formatiranje telefonskog broja
function formatirajBroj(niz) {
    return `(${niz.slice(0, 3).join('')}) ${niz.slice(3, 6).join('')}-${niz
        .slice(6)
        .join('')}`;
}

// 5. Provera palindroma u nizu
function jePalindrom(niz) {
    return niz.join('') === niz.slice().reverse().join('');
}

// 6. Zamena svih pojavljivanja broja u nizu
function zameniBroj(niz, cilj, zamena) {
    return niz.map(broj => (broj === cilj ? zamena : broj));
}

// 7. Prosek vrednosti u nizu
function prosecnaVrednost(niz) {
    return niz.reduce((a, b) => a + b, 0) / niz.length;
}

// 8. Pronalazak dva broja koja daju zadati zbir
function nadjiPar(niz, cilj) {
    let setBrojeva = new Set();
    for (let broj of niz) {
        let razlika = cilj - broj;
        if (setBrojeva.has(razlika)) {
            return [razlika, broj];
        }
        setBrojeva.add(broj);
    }
    return null;
}

// 9. Grupisanje brojeva po parnosti
function grupisiPoParnosti(niz) {
    return {
        parni: niz.filter(broj => broj % 2 === 0),
        neparni: niz.filter(broj => broj % 2 !== 0),
    };
}

// 10. Pronalaženje drugog najmanjeg i drugog najvećeg broja u nizu
function drugiNajmanjiNajveci(niz) {
    let sortirani = [...new Set(niz)].sort((a, b) => a - b);
    return [sortirani[1], sortirani[sortirani.length - 2]];
}
