const precosLivros = [25, 15, 20, 30, 50, 30, 25, 20]

let iMaisBarato = 0
function procurarMaisBarato(lista) {
    lista.forEach((i, index) => {
        if (i < precosLivros[iMaisBarato]) {
            iMaisBarato = index
        }
    });
}

procurarMaisBarato(precosLivros)
console.log(`O livro mais barato custa ${precosLivros[iMaisBarato]}, e está no índice ${iMaisBarato}`)

precosLivros.splice(4, 0, 10)

procurarMaisBarato(precosLivros)
console.log(`Agora o livro mais barato custa ${precosLivros[iMaisBarato]}, e está no índice ${iMaisBarato}`)