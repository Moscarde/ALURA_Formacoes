//movimento do carro
var xCar = 600
var yCar = 40


function showCar() {
	image(imgCar, xCar, yCar, 50, 40)
}
function moveCar() {
	xCar -= 3
	if (xCar < -40) {
		xCar = 550
	}
}
