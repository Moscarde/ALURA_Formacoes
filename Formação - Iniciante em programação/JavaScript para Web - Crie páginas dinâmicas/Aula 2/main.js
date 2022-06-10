function alerta() {
    alert('Olá Mundo')
}
function tocaSomPom() {
    console.log('cu');
    document.querySelector('#som_tecla_pom').play
}

document.querySelector('.tecla_pom').onclick = tocaSomPom