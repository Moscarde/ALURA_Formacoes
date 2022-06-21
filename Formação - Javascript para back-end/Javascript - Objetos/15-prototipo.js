function Cliente(nome, cpf, email, saldo) {
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = (valor) => (this.saldo += valor); //aqui funciona arrow function
}

const Andre = new Cliente("André", "12312312345", "email@com.br", 100);
//console.log(Andre);

Andre.depositar(200); //acessando a funçao dentro do protótipo
//console.log(andre);

function ClientePoup(nome, cpf, email, saldo, saldoPoup) {
	Cliente.call(this, nome, cpf, email, saldo);
	this.saldoPoup = saldoPoup;
}

const Ju = new ClientePoup("Ju", "12312312345", "email@com.br", 100, 500);
console.log(Ju);


//ClientePoup.prototype.depositarPoup = valor => this.saldoPoup += valor

ClientePoup.prototype.depositarPoup = function (valor) { //acessando pelo protótipo nao da pra usar arrow
	this.saldoPoup += valor;
};


Ju.depositarPoup(500)
console.log(Ju.saldoPoup);
console.log(Ju)
