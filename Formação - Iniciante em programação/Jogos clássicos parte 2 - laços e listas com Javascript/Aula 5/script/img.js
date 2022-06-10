var imgRoad;
var imgActor;
var imgCar;
var imgCar2
var imgCar3
var imgCars
var soundtrack
var soundScore
var soundCollision

function preload() {
	imgRoad = loadImage("img/estrada.png");
	imgActor = loadImage("img/ator-1.png")
	imgCar = loadImage("img/carro-1.png")
	imgCar2 = loadImage("img/carro-2.png")
	imgCar3 = loadImage("img/carro-3.png")
	imgCars = [imgCar, imgCar2, imgCar3, imgCar, imgCar2, imgCar3]
	soundtrack = loadSound("sound/trilha.mp3")
	soundScore = loadSound("sound/pontos.wav")
	soundCollision = loadSound("sound/colidiu.mp3")

}