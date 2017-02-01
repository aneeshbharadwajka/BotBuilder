function checkInputCoordinates(initialPositionX, initialPositionY, dimensionX, dimensionY) {
  if (initialPositionX < 0 || initialPositionX >= dimensionX || initialPositionY < 0 || initialPositionY >= dimensionY) {
    return false;
  }
}
module.exports = checkInputCoordinates;