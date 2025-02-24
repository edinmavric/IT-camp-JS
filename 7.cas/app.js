let str = 'JavaScript';
let obrStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    obrStr += str[i];
}

console.log(obrStr);

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    // Ova Petlja Je zaduzena za red u konzoli
    let red = '';
    for (let j = 1; j <= i; j++) {
        // Ova Petlja Je zaduzena za kolonu u konzoli
        red += '*';
    }

    console.log(red);
}

// Ispisite mi u konzoli zvezdice 5x5
// koristeci ugnjezdene petlje

// *****
// *****
// *****
// *****
// *****

for (let i = 1; i <= 5; i++) {
    // Ova Petlja Je zaduzena za red u konzoli
    let red = '';
    for (let j = 1; j <= 5; j++) {
        // Ova Petlja Je zaduzena za kolonu u konzoli
        red += '*';
    }

    console.log(red);
}

// Ovaj ispis:
// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
    // Ova Petlja Je zaduzena za red u konzoli
    let red = '';
    for (let j = 1; j <= i; j++) {
        // Ova Petlja Je zaduzena za kolonu u konzoli
        red += j;
    }

    console.log(red);
}
