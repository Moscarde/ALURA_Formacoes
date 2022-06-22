class Cliente {
	constructor(nome, email, cpf, saldo) {
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.saldo = saldo;
	}
	depositar(valor) {
		this.saldo += valor;
	}
	exibirSaldo() {
		console.log("Saldo", this.nome, this.saldo);
	}
}

class ClientePoupanca extends Cliente {
	constructor(nome, email, cpf, saldo, saldoPoup) {
		super(nome, email, cpf, saldo);
		this.saldoPoup = saldoPoup;
	}
	depositarPoup(valor) {
		this.saldoPoup += valor;
	}
}

const cGabriel = new ClientePoupanca("Gabriel",	"12312312345",	"gabriel@email.com",100, 0);
console.log(cGabriel);
console.log("Retirando 100 de saldo e adicionando na poupança");

cGabriel.depositar(-100)
cGabriel.depositarPoup(100)
console.log(`${cGabriel.nome} - saldo = ${cGabriel.saldo} - saldo poupança = ${cGabriel.saldoPoup}`);