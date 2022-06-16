/**	
const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota = nota+1) // ++nota
console.log(notasAtualizadas);

 */

// map guarda o retorno da funcao chamada


/**
const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(sobeNota) // ++nota

function sobeNota(nota) {
	return nota = nota + 2
}
console.log(notasAtualizadas);
 */

const notas = [10, 9, 8, 7, 6]
//							argumento => func > condicao > true : false
const notasAtualizadas = notas.map(nota => nota == 10 ? 10 : ++nota) // ++nota


console.log(notasAtualizadas);