const notasJavaScript = [10, 6, 8, 4.5]
const notasJava = [10, 6, 8, 4.5, 10, 7]
const notasPython = [10, 6, 8, 4.5, 6, 5, 2]

function calculaMedia(listaNotas) {
    let somaNotas = listaNotas.reduce((acum, atual) => atual + acum, 0) /***   (previousValue: T, currentValue: T,     */
    return somaNotas / listaNotas.length
}

console.log(`A media de notas da turma de Java é ${calculaMedia(notasJava)}`)
console.log(`A media de notas da turma de JavaScript é ${calculaMedia(notasJavaScript)}`)
console.log(`A media de notas da turma de Python é ${calculaMedia(notasPython)}`);


numeros = [5, 4, 5, 432, 56]

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma = numeros.reduce(operacaoNumerica, )
console.log(soma);