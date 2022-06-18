const cliente = {
    nome: "Gabriel",
    telefone: "21992897171",
    email: "gabriel@email.com",
    idade: 24
}

delete cliente.idade
// ||
const chaves = ["nome", "telefone", "email", "idade"]
delete cliente[chaves[2]]

console.log(cliente);