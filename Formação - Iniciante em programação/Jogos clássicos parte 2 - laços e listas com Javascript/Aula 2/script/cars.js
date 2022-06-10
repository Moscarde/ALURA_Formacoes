//movimento do carro
var xCar = 600
var yCar = 40

var xCar2 = 600
var yCar2 = 96

var xCar3 = 600
var yCar3 = 150



function showCar() {
    image(imgCar, xCar, yCar, 50, 40)
    image(imgCar2, xCar2, yCar2, 50, 40)
    image(imgCar3, xCar3, yCar3, 50, 40)
}
function moveCar() {
    xCar -= 3
    xCar2 -= 5
    xCar3 -= 2.5

	if (xCar < -40) {
		xCar = 550
	}
}
function resetPosXCar() {
    if (xCar < -40) {
		xCar = 550
    }
    if (xCar2 < -40) {
		xCar2 = 550
    }
    if (xCar3 < -40) {
		xCar3 = 550
	}
}
