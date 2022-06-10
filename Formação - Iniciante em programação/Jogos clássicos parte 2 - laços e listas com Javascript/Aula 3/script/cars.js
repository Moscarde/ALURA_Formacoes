//movimento do carro
var xCars = [600, 600, 600]
var yCars = [40, 96, 150]
var speedCars = [2, 2.5, 3]

// for (var i = 0; yCars.length > i; i++){
//   console.log('bat')
// }

function showCar() {
  for (var i = 0; i < xCars.length; i++) {
    image(imgCars[i], xCars[i], yCars[i], 50, 40)
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
