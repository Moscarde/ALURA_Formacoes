function setup() {
	createCanvas(600, 400);
}

//variaveis da bolinha
let xBolinha = 300; //posX
let yBolinha = 200; //posY
let dBolinha = 15; //diametro
let rBolinha = dBolinha / 2; //raio

//velocidade da bolinha
let velBolinha = 3; //velocidade X
let velYBolinha = 3; //velocidade Y
let colidiu = false;

//variaveis jogador
let xJogador = 5;
let yJogador = 150;
let wJogador = 10;
let hJogador = 90;

function draw() {
	//setInterval

	background(0);
	mostraBolinha();
	movimentaBolinha();
	verificaColisao();
	mostraRaquete();
	movimentaJogador();
	colisaoRaqueteBolinha()
}

function mostraBolinha() {
	circle(xBolinha, yBolinha, dBolinha);
}
function movimentaBolinha() {
	xBolinha += velBolinha;
	yBolinha += velYBolinha;
}
function verificaColisao() {
	if (xBolinha + rBolinha >= width || xBolinha - rBolinha <= 0) {
		velBolinha *= -1;
	}
	if (yBolinha + rBolinha >= height || yBolinha - rBolinha <= 0) {
		velYBolinha *= -1;
	}
}
function mostraRaquete() {
	rect(xJogador, yJogador, wJogador, hJogador);
}

function movimentaJogador() {
	
	if (keyIsDown(UP_ARROW) && (yJogador > 0)) {
		
		yJogador -= 10;
	}
	if (keyIsDown(DOWN_ARROW) && (yJogador + hJogador < height)) {
		yJogador += 10;
	}
}
function colisaoRaqueteBolinha() {
	colidiu = collideRectCircle(xJogador, yJogador, wJogador, hJogador, xBolinha, yBolinha, rBolinha)
	if (colidiu) {
		velBolinha *= -1
	}
}