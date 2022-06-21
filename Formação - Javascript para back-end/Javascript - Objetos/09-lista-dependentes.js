const cliente = {
	nome: "Gabriel",
	fones: ["21992897171", "21992897070"],
	email: "gabriel@email.com",
    idade: 24,
    dependentes: [{
        nome: "Nick",
        idade: 2
    },
    {
        nome: "Morgana",
        idade: 5
    }]

};
cliente.dependentes.push({
    nome: "Europa",
    idade: 2
})


console.log(cliente);

const gata = cliente.dependentes.filter(dependente => dependente.nome === "Europa")  // Filter sempre retorna um array []

console.log(gata);
console.log(gata[0]);
console.log(gata.nome); //undefined
console.log(gata[0].nome);