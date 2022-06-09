function setup() {
	createCanvas(600, 400);
}

let xBolinha = 300; //posX
let yBolinha = 200; //posY
let dBolinha = 15; //diametro
let rBolinha = dBolinha / 2; //raio
let velBolinha = 3; //velocidade X
let velYBolinha = 3; //velocidade Y

function draw() {
	//setInterval

	background(0);
	mostraBolinha();
	movimentaBolinha();
	verificaColisao();
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
