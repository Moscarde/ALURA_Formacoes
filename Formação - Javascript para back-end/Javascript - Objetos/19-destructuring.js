const nPar = [2, 4, 6]
const nImpar = [1, 3, 5]

const numeros = [...nPar, ...nImpar]
console.log(numeros);




//                  //                  //





//                    guarda em []
const [num1, num2, ...outrosItens] = [1, 2, 3, 4, 5]
console.log(num1, num2, outrosItens);
console.log(num1, num2, ...outrosItens); //abrindo o array





//                  //                  //




const Pessoa = {
    nome: "Gabriel",
    idade: 24
}

function mostraDados(obj) {
    console.log(`Nome: ${obj.nome}, Idade: ${obj.idade}`);
}

function mostraDadosDestructing({ nome, idade }) { //Já especifica os dados do obj que quer receber como parametro
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}
mostraDados(Pessoa)
mostraDadosDestructing(Pessoa)
console.log