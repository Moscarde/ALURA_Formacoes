//movimento jogador
var xActor = 100;
var yActor = 367;
var hit = false;
var score = 0;

function showActor() {
	image(imgActor, 100, yActor, 35, 30);
}

function moveActor() {
	if (keyIsDown(UP_ARROW)) {
		yActor -= 3;
	}
	if (keyIsDown(DOWN_ARROW)) {
		yActor += 3;
	}
}

function collideCheck() {
	for (var i = 0; i < imgCars.length; i++) {
		var colidiu = collideRectCircle(xCars[i], yCars[i], wCars, hCars - 5, xActor, yActor, 15);
		if (colidiu) {
			resetActor();
		}
	}
}

function resetActor() {
	yActor = 367;
}

function showScore() {
	textAlign(CENTER)
	textSize(28)
	fill(color(255, 240, 60))
	text(score, width / 5, 28)
}

function scored() {
	if (yActor < 20) {
		score++
		resetActor()
	}
}