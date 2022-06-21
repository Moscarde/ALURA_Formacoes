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
		this.saldoBRL += valor;
	}
};

let relatorio = "";
for (let info in cliente) {
    if (typeof cliente[info] === "function" || typeof cliente[info] === "object") {
		continue;
	} else {
		relatorio += `
        ${info} = ${cliente[info]}
        `;
	}
}
console.log(relatorio);
