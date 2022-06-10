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

//variaveis raquete
let wRaquete = 10;
let hRaquete = 90;

//variaveis jogador
let xJogador = 5;
let yJogador = 150;

//variaveis oponente
let xOponente = 585;
let yOponente = 150;
let velYOponente;

//pontos
let pontosJogador = 0;
let pontosOponente = 0;

function draw() {
	//setInterval

	background(0);
	mostraBolinha();
	movimentaBolinha();
	verificaColisao();
	mostraRaquete(xJogador, yJogador);
	mostraRaquete(xOponente, yOponente);
	movimentaJogador();
	colisaoRaqueteBolinha(xJogador, yJogador);
	colisaoRaqueteBolinha(xOponente, yOponente);
	movimentaOponente();
	incluiPlacar();
	verificaPontos()
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
function mostraRaquete(x, y) {
	rect(x, y, wRaquete, hRaquete);
}

function movimentaJogador() {
	if (keyIsDown(UP_ARROW) && yJogador > 0) {
		yJogador -= 10;
	}
	if (keyIsDown(DOWN_ARROW) && yJogador + hRaquete < height) {
		yJogador += 10;
	}
}
function colisaoRaqueteBolinha(x, y) {
	colidiu = collideRectCircle(
		x,
		y,
		wRaquete,
		hRaquete,
		xBolinha,
		yBolinha,
		rBolinha
	);
	if (colidiu) {
		velBolinha *= -1;
	}
}
function movimentaOponente() {
	velYOponente = yBolinha - yOponente - hRaquete / 2 - 30;
	yOponente += velYOponente;
}
function incluiPlacar() {
	fill(255);
	text(pontosJogador, 278, 25);
	text(pontosOponente, 320, 25);
}
function verificaPontos() {
	if (xBolinha < 8) {
		pontosOponente++
	}
	if (xBolinha > 592) {
		pontosOponente++
	}
}