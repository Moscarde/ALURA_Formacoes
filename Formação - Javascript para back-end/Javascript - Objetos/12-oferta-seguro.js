let cliente1 = {
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
		this.saldoBRL += valor;
	}
};

let cliente2 = {
    nome: "Laura",
	fones: ["21992897171", "21992897070"],
	email: "gabriel@email.com",
	idade: 24,
	saldoBRL: 0,
	depositar: function (valor) {
		this.saldoBRL += valor;
	}
}

//Desafio = Criar uma função que ofereça seguro caso o cliente possua dependentes

function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj)
    if (propsCliente.includes("dependentes")) {
        console.log("Oferecer seguro para", obj.nome );
    }
    else {
        console.log("Não oferecer seguro para", obj.nome );
    }
}

oferecerSeguro(cliente1)
oferecerSeguro(cliente2) // vai dar false

//Outros métodos de objetos

console.log(Object.values(cliente1)); //retorna os valores
console.log(Object.entries(cliente1)); //retorna um array pra cada "linha" ==> key + values

