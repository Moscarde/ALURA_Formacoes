const arrLivros = require("./02-lista livros.js")

let objBarato = 0


function procurarMaisBarato(lista) {
    lista.forEach((conteudo, index) => {
        if (conteudo.preco < lista[objBarato].preco) {
            objBarato = index
        }
    });
}

procurarMaisBarato(arrLivros)
console.log(`O livro mais barato é o de ${arrLivros[objBarato].titulo} e custa ${arrLivros[objBarato].preco} `)

arrLivros.splice(4, 0, {titulo: "Kotlin", preco: 10})

procurarMaisBarato(arrLivros)
console.log(`Agora o livro mais barato é o de ${arrLivros[objBarato].titulo} e custa ${arrLivros[objBarato].preco} `)