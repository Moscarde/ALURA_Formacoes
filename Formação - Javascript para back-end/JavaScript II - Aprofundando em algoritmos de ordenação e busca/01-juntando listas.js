const { edGalho, edFolha } = require("./Arquivos base/aula-1/arrays")
let listaFinal = [];


function juntaListas(lista1, lista2) {
    let posLista1 = 0
    let posLista2 = 0

    // if (lista1[posLista1].preco < lista2[posLista2].preco) {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }
    // return

    while (posLista1 < lista1.length && posLista2 < lista2.length) {

        if (lista1[posLista1].preco < lista2[posLista2].preco ) {
            listaFinal.push(lista1[posLista1]);
            posLista1++
        } else {
            listaFinal.push(lista2[posLista2]);
            posLista2++
        }
    }

    while (posLista1 < lista1.length) {
        listaFinal.push(lista1[posLista1]);
        posLista1++
    }
    while (posLista2 < lista2.length) {
        listaFinal.push(lista2[posLista2]);
        posLista2++
    }
    
}

juntaListas(edFolha, edGalho)
console.table(listaFinal);