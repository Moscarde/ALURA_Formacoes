const Livros = require("./02-lista livros.js")

let objBarato = 0
function procurarMaisBarato(lista) {
    lista.forEach((conteudo, index) => {
        if (conteudo.preco < lista[objBarato].preco) {
            objBarato = index
        }
    });
}

procurarMaisBarato(Livros)
console.log(`O livro mais barato é o de ${Livros[objBarato].titulo} e custa ${Livros[objBarato].preco} `)

Livros.splice(4, 0, {titulo: "Kotlin", preco: 10})

procurarMaisBarato(Livros)
console.log(`Agora o livro mais barato é o de ${Livros[objBarato].titulo} e custa ${Livros[objBarato].preco} `)