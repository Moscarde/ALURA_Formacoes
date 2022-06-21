const fichaGuerreiro = {
	nome: "Aragorn",
	classe: "guerreiro"
};

const equipoGuerreiro = {
	espada: "Andúril",
	capa: "capa élfica +2"
};



const guerreiro = { fichaGuerreiro, equipoGuerreiro };
console.log(guerreiro);

console.log("Agora com o spread"); //Joga o obj aberto

const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log((guerreiro2));



log