const cliente = {
    nome: "Gabriel",
    telefone: "21992897171",
    email: "gabriel@email.com",
    idade: 24
}

cliente.cpf = "132432543 54"
//      se nao estiver nenhum campo com esse nome, é criado um novo no final do objeto
console.log(cliente);

//      se já existir, vai ser substituído o valor antigo pelo novo
cliente.email = "gabriel@email.com.br"
console.log(cliente);