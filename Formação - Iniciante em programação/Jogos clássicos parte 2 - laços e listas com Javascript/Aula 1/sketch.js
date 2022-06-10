function setup() {
	createCanvas(500, 400);
}

var imgRoad;
var imgActor;
var imgCar;
var imgCar2
var imgCar3

//movimento do carro
var xCar = 600

//movimento jogador
var yActor = 367

function preload() {
	imgRoad = loadImage("img/estrada.png");
	imgActor = loadImage("img/ator-1.png")
	imgCar = loadImage("img/carro-1.png")
	imgCar2 = loadImage("img/carro-2.png")
	imgCar3 = loadImage("img/carro-3.png")

}

function draw() {
	background(imgRoad);
	showActor()
	showCar()
	moveCar()
	moveActor()

}

function showActor() {
	image(imgActor, 100, yActor, 35, 30)
}
function showCar() {
	image(imgCar, xCar, 40, 50, 40)
}
function moveCar() {
	xCar -= 3
	if (xCar < -40) {
		xCar = 550
	}
}
function moveActor() {
	if (keyIsDown(UP_ARROW)) {
		yActor -= 3
	}
	if (keyIsDown(DOWN_ARROW)) {
		yActor += 3
	}
}