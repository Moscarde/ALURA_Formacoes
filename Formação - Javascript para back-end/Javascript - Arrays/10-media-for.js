const numeros = [100, 200, 300, 400, 500, 600]
let somaNumeros = 0

for (let i = 0; i < numeros.length; i++){
    somaNumeros += numeros[i]
}

let mediaNumeros = somaNumeros / numeros.length

console.log(mediaNumeros)
