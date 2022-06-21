class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }
    exibirSaldo() {
        console.log("Saldo", this.nome, this.saldo);
    }
}

const cGabriel = new Cliente("Gabriel", "12312312345", "gabriel@email.com", 100)
console.log(cGabriel)

cGabriel.depositar(50)
cGabriel.exibirSaldo()