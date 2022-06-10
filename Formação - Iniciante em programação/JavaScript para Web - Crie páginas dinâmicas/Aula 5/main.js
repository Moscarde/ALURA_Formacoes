function tocaSom(idSom) {
	const elemento = document.querySelector(idSom)
	
	if (elemento.localName == 'audio') {
		elemento.play();
	} else {
		console.log('Elemento não encontrado ou seletor não encontrado');
	}

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

	tecla.onkeydown = function (event) {
		if (event.code == "Space" || event.code == "Enter") {
			tecla.classList.add ('ativa')
		}
	}
	tecla.onkeyup = function () {
		tecla.classList.remove ('ativa')
	}
}
