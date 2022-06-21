let cliente = {
	nome: "Gabriel",
	fones: ["21992897171", "21992897070"],
	email: "gabriel@email.com",
	idade: 24,
	dependentes: [
        {
            nome: "Nick",
            idade: 2
        },
        {
            nome: "Morgana",
            idade: 5
        },
        {
            nome: "Europa",
            idade: 2
        }
    ],
    saldoBRL: 0,
    depositar: function (valor) {
        this.saldoBRL += valor
    }
    
};

cliente.depositar(100)
console.log(cliente);
console.log(`${cliente.nome} o seu saldo é ${cliente.saldoBRL}`);
