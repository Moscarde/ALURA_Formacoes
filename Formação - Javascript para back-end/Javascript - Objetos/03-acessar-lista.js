const cliente = {
    nome: "Gabriel",
    telefone: "21992897171",
    email: "gabriel@email.com",
    idade: 24
}


const chaves = ["nome", "telefone", "email", "idade"]
const chave2 = "nome"

//          é ume outra forma de acessar itens dentro de um objeto
//          através de colchetes
console.log(cliente[chaves[0]]);
console.log(cliente[chave2]);
console.log(cliente["telefone"]);


console.log('');
chaves.forEach(key => console.log(key, cliente[key]))