const chalk = require('chalk')
const pegaArquivoAsyncAwait = require('./index')
const validaURLs = require('./http-validacao')

const caminho = process.argv[2]
const funcao = process.argv[3]

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivoAsyncAwait(caminhoDoArquivo)
    if (funcao === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('Lista de links'), resultado)
    }
}

processaTexto(caminho)
