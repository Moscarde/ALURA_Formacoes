//movimento do carro
var xRandom = function (){return Math.round(Math.random() * 600)}
var xCars = [xRandom(), xRandom(), xRandom(), xRandom(), xRandom(), xRandom()]
var yCars = [40, 96, 150, 210, 270, 318]
var speedCars = [2, 2.5, 3, 5, 2, 4]
var wCars = 50
var hCars = 40

// for (var i = 0; yCars.length > i; i++){
//   console.log('bat')
// }

function showCar() {
  for (var i = 0; i < xCars.length; i++) {
    image(imgCars[i], xCars[i], yCars[i], wCars, hCars)
  }

}
function moveCar() {
  for (var i = 0; i < xCars.length; i++){
    xCars[i] -= speedCars [i]

  }


}
function resetPosXCar() {
  for (var i = 0; i < xCars.length; i++){
    if (xCars[i] < -40) {
      xCars[i] = 550
    }
  }

}
