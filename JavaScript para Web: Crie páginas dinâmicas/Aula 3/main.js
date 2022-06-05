function alerta() {
    alert('Olá Mundo')
}
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')


for (var i = 0; i < listaDeTeclas.length; i++){
    listaDeTeclas[i].onclick = tocaSomPom
}