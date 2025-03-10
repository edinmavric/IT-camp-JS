// 1. Brojevi i aritmetika
// Lakši: Suma parnih brojeva do n
// Napiši program koji traži od korisnika da unese broj n i zatim ispisuje zbir svih parnih brojeva od 1 do n.

// function sumEvenNumbers(n) {
//     // Implementacija
// }

// console.log(sumEvenNumbers(10)); // 30 (2 + 4 + 6 + 8 + 10)
// console.log(sumEvenNumbers(7)); // 12 (2 + 4 + 6)
// Srednji: Broj prostih brojeva do n
// Napiši program koji broji koliko ima prostih brojeva do n.

// function countPrimes(n) {
//     // Implementacija
// }

// console.log(countPrimes(10)); // 4 (2, 3, 5, 7)
// console.log(countPrimes(20)); // 8 (2, 3, 5, 7, 11, 13, 17, 19)
// Teži: Da li su brojevi u nizu uzastopni?
// Napiši funkciju koja proverava da li niz brojeva sadrži uzastopne brojeve.

// function isConsecutive(arr) {
//     // Implementacija
// }

// console.log(isConsecutive([1, 2, 3, 4, 5])); // true
// console.log(isConsecutive([3, 5, 6, 7])); // false
// console.log(isConsecutive([10, 9, 8, 7])); // true

// 2. Stringovi i manipulacija tekstom
// Lakši: Broj samoglasnika u stringu
// Napiši funkciju koja broji koliko ima samoglasnika u datom stringu.

// function countVowels(str) {
//     // Implementacija
// }

// console.log(countVowels("javascript")); // 3
// console.log(countVowels("hello world")); // 3
// Srednji: Obrnuti reči u stringu
// Napiši funkciju koja prima string i ispisuje reči obrnutim redosledom, ali ne menja slova u rečima.

// function reverseWords(sentence) {
//     // Implementacija
// }

// console.log(reverseWords("ovo je test")); // "test je ovo"
// console.log(reverseWords("javascript je mocan")); // "mocan je javascript"
// Teži: Da li je string rotacija drugog?
// Napiši funkciju koja proverava da li se jedan string može dobiti rotacijom drugog.

// function isRotation(str1, str2) {
//     // Implementacija
// }

// console.log(isRotation("abcd", "dabc")); // true
// console.log(isRotation("hello", "lohel")); // true
// console.log(isRotation("abc", "acb")); // false
// 3. Nizovi i iteracija
// Lakši: Prosečna vrednost niza
// Napiši funkciju koja računa prosečnu vrednost brojeva u nizu.

// function average(arr) {
//     // Implementacija
// }

// console.log(average([10, 20, 30])); // 20
// console.log(average([5, 15, 25, 35])); // 20
// Srednji: Prebrojavanje brojeva većih od proseka
// Napiši funkciju koja broji koliko brojeva u nizu je veće od prosečne vrednosti tog niza.

// function countAboveAverage(arr) {
//     // Implementacija
// }

// console.log(countAboveAverage([10, 20, 30, 40, 50])); // 2 (40 i 50)
// console.log(countAboveAverage([5, 15, 25, 35])); // 2 (25 i 35)
// Teži: Da li se niz može podeliti na dva jednaka dela?
// Napiši funkciju koja proverava da li postoji mesto u nizu gde zbir leve i desne polovine bude isti.

// function canSplit(arr) {
//     // Implementacija
// }

// console.log(canSplit([1, 2, 3, 3])); // true (jer 1+2 = 3)
// console.log(canSplit([1, 1, 1, 2, 1])); // true (jer 1+1+1 = 2+1)
// console.log(canSplit([2, 3, 4, 1])); // false
// 4. Logika i uslovi
// Lakši: Deljivost broja
// Napiši funkciju koja proverava da li je broj deljiv sa 3 i/ili 5.

// function checkDivisibility(n) {
//     // Implementacija
// }

// console.log(checkDivisibility(15)); // "Deljiv sa 3 i 5"
// console.log(checkDivisibility(9)); // "Deljiv sa 3"
// console.log(checkDivisibility(10)); // "Deljiv sa 5"
// console.log(checkDivisibility(7)); // "Nije deljiv ni sa 3 ni sa 5"
// Srednji: Da li su svi elementi u nizu isti?
// Napiši funkciju koja proverava da li su svi elementi u nizu isti.

// function allEqual(arr) {
//     // Implementacija
// }

// console.log(allEqual([5, 5, 5, 5])); // true
// console.log(allEqual([5, 4, 5, 5])); // false
// Teži: Da li je niz balansiran?
// Napiši funkciju koja proverava da li je niz balansiran (ima isti broj pozitivnih i negativnih brojeva).

// function isBalanced(arr) {
//     // Implementacija
// }

// console.log(isBalanced([-1, 1, -2, 2, -3, 3])); // true
// console.log(isBalanced([-1, -2, -3, 1, 2])); // false
// console.log(isBalanced([4, -4, 6, -6, 0])); // true
