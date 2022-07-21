const livros = require("./02-lista livros")
let ordemAlfabetica = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function insertionSort(lista) {

    for (let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1]

            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise
            analise--

            // console.log(`O item atual é ${itemAnalise.titulo}`)
            // console.log(lista)
        }
    }
    console.log(lista)
}

insertionSort(livros)