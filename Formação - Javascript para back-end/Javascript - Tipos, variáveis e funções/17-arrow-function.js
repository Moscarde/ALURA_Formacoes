function apresentar(nome) {
    return `meu nome é ${nome}`
}

// arrow function

const apresentarArrow = nome => `meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

console.log(soma(2, 8));
console.log(apresentar('Gabriel'))
console.log(apresentarArrow('Gabriel'))

const multiplicarNumeros = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 10"
    } else {
        return num1 * num2
    }
}

console.log(multiplicarNumeros(2, 9))