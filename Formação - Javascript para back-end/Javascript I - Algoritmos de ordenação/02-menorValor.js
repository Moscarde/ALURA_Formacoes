const arrLivros = require("./02-lista livros.js");


function menorValor(array, posInicial) {
    let maisBarato = posInicial;

    for (let atual = posInicial; atual < array.length; atual++) {
        if (array[atual].preco <= array[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}


module.exports = menorValor;
