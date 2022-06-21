//DESAFIO ==> extrair de uma listagem de clientes apenas informaçoes de dependentes
let clientes = [
	{
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
	},

	{
		nome: "Laura",
		fones: ["21992897171", "21992897070"],
		email: "gabriel@email.com",
		idade: 24,
        saldoBRL: 0,
        dependentes: [{
            nome: "Calixto",
            idade: 5
        }],
		depositar: function (valor) {
			this.saldoBRL += valor;
		}
	}
];

// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

//usando o forEach
const listaDependentes = []
clientes.forEach( obj => listaDependentes.push(...obj.dependentes))

console.table(listaDependentes)