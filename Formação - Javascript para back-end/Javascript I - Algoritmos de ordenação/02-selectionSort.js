const livros = require("./02-lista livros")
const menorValor = require("./02-menorValor")

console.log(livros);

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual); //[1]

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

    console.log('varredura' + atual);
    console.log(livros)

}

// console.log(livros);