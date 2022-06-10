function tocaSom(idSom) {
	document.querySelector(idSom).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (var i = 0; i < listaDeTeclas.length; i++) {
	const tecla = listaDeTeclas[i];
	const instrumento = listaDeTeclas[i].classList[1];

	//template string = "som_" + instrumento
	const id = `#som_${instrumento}`;

	tecla.onclick = function () {
		tocaSom(id);
	};
}
