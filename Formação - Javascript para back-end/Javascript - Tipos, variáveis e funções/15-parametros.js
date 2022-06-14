
function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(2, 2)) //resolve de dentro pra fora

// neutralizando / padronizando a funcao
function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2
}

console.log(multiplica(soma(2, 2), soma(5, 5)))

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description