const nomes = ['Joao', 'Carlos', 'José', 'Mauro']
const notas = [10, 6, 8, 4.5]
                                //item
const reprovados = nomes.filter((_, indice) => notas[indice] < 6) //filter guarda na lista os que retornaram true, dado o elemento da lista original qual está escaneando
console.log(reprovados);