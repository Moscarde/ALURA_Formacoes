//movimento jogador
var xActor = 100
var yActor = 367



function showActor() {
	image(imgActor, 100, yActor, 35, 30)
}

function moveActor() {
	if (keyIsDown(UP_ARROW)) {
		yActor -= 3
	}
	if (keyIsDown(DOWN_ARROW)) {
		yActor += 3
	}
}