// == comparaçao implícitia

let numero = 5
let texto = "5"

console.log(numero == texto)

//typeof - retorna o typo da variavel

console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor
// === compara o valor e o tipo de dado

// conversão explicita

texto = Number(texto)
numero = String(numero)

console.log(typeof numero)
console.log(typeof texto)
