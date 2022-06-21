const personagem = {
	nome: "Princesa Leia",
	apresentar: function () {
		return `a personagem é ${this.nome}`;
	}
};
console.log(personagem.apresentar())

let personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined


personagemGenerico = personagemGenerico.bind(personagem) //bind vai ligar os this soltos a um objeto
console.log(personagemGenerico())
//a personagem é Princesa Leia





// cc //
// // // const personagemGenerico = personagem.apresentar
// // // console.log(personagemGenerico())
// // // //a personagem é undefined
// // // const personagemDefinido = personagemGenerico.bind(personagem)
// // // console.log(personagemDefinido())
// // // //a personagem é Princesa Leia