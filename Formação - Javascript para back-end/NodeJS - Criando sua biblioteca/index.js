const chalk = require('chalk')
const fs = require('fs')

function trataErro(err) {
    throw new Error(chalk.red(err))
}

async function pegaArquivoAsyncAwait(caminhoDoArquivo) {
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        // console.log(chalk.yellow(texto))
        return extraiLinks(texto)
    }
    catch (err) {
        trataErro(err)
    }

}



function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function pegaArquivoThenCatch(caminhoDoArquivo) {
    fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        .then((texto) => console.log(texto))
        .catch((err) => trataErro(err))
}

function pegaArquivo(caminhoDoArquivo) {
    fs.readFile(caminhoDoArquivo, 'utf-8', (err, data) => {
        if (err) {
            trataErro(err)
        }

        console.log(chalk.blue(data))
    })
}


// pegaArquivo('./arquivos/readme.mda')
// pegaArquivoThenCatch('./arquivos/readme.mda')

// pegaArquivoAsyncAwait('./arquivos/readme.md')


module.exports = pegaArquivoAsyncAwait