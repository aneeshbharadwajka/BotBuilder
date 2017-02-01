function MoveTheBot(inputMoves, currentDirection, currentLocationX, currentLocationY, dimensionX, dimensionY) {
  var currentMove;
  for (var index = 0; index < inputMoves.length; index++) {
    currentMove = inputMoves[index];
    if (currentDirection === 'N') {
      if (currentMove === 'M' && currentLocationY === 0) {
        console.log('Cannot Move as end of grid is reached');
      } else if (currentMove === 'M') {
        currentLocationY = currentLocationY - 1;
      } else if (currentMove === 'L') {
        currentDirection = 'W';
      } else if (currentMove === 'R') {
        currentDirection = 'E';
      }
    }
    else if (currentDirection === 'S') {
      if (currentMove === 'M' && currentLocationY === dimensionY - 1) {
        console.log('Cannot Move as end of grid is reached');
      } else if (currentMove === 'M') {
        currentLocationY = currentLocationY + 1;
      } else if (currentMove === 'L') {
        currentDirection = 'E';
      } else if (currentMove === 'R') {
        currentDirection = 'W';
      }
    }
    else if (currentDirection === 'E') {
      if (currentMove === 'M' && currentLocationX === dimensionX - 1) {
        console.log('Cannot Move as end of grid is reached');
      } else if (currentMove === 'M') {
        currentLocationX = currentLocationX + 1;
      } else if (currentMove === 'L') {
        currentDirection = 'N';
      } else if (currentMove === 'R') {
        currentDirection = 'S';
      }
    }
    else if (currentDirection === 'W') {
      if (currentMove === 'M' && currentLocationX === 0) {
        console.log('Cannot Move as end of grid is reached');
      } else if (currentMove === 'M') {
        currentLocationX = currentLocationX - 1;
      } else if (currentMove === 'L') {
        currentDirection = 'S';
      } else if (currentMove === 'R') {
        currentDirection = 'N';
      }
    }
    //if(index === 2)console.log(currentDirection);
    //console.log(currentDirection);
  }
  console.log(currentLocationX, currentLocationY, currentDirection);
}

module.exports = MoveTheBot;