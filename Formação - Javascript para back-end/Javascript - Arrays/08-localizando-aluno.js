const alunos = ['Joao', 'Carlos', 'José']
const notas = [10, 6, 8]
let listaAlunosENotas = [alunos, notas]

const exibeNotas = (nomeDoAluno) => {
    if (listaAlunosENotas[0].includes(nomeDoAluno)) {
        let indice = listaAlunosENotas[0].indexOf(nomeDoAluno)
        return listaAlunosENotas[0][indice] + ' sua nota é ' + listaAlunosENotas[1][indice]
    } else {
        return 'Aluno não encontrado no banco de dados'
    }
}
console.log(exibeNotas('Marcos'))