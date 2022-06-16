const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
const todasNotas = [notas1, notas2, notas3]

let mediaNotas = []

todasNotas.forEach(listaNotas => {
	let media = 0
	listaNotas.forEach(nota => [
		media += nota
	])
	media = media / listaNotas.length
	mediaNotas.push(media)
})
console.log(mediaNotas);




