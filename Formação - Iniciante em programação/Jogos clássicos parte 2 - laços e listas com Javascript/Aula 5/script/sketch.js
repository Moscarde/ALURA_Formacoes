function setup() {
	createCanvas(500, 400);
	soundtrack.loop()
}

function draw() {
	background(imgRoad);
	showActor()
	showCar()
	moveCar()
	moveActor()
	resetPosXCar()
	collideCheck()
	showScore()
	scored()
}


