var fs = require('fs');
var path = require('path');

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
      if (currentMove === 'M' && currentLocationY === dimensionY) {
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
      if (currentMove === 'M' && currentLocationX === dimensionX) {
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

function checkMovesValidity(inputMoves) {
  for (var index = 0; index < inputMoves.length; index++) {
    if (inputMoves[index] !== 'L' && inputMoves[index] !== 'R' && inputMoves[index] !== 'M') {
      return false;
    }
  }
  return true;
}

function mainFunction() {
  var count = 0;
  // console.log('Hello');
  var inputSize, dimensionX, dimensionY, initialPosition, initialPositionDirection; var initialPositionY, initialPositionX, inputMoves;
  var InputFile = fs.readFileSync(process.argv[2]).toString().split('\n');

  for (var index = 0; index < InputFile.length; index++) {
    if (InputFile[index].length !== 0) {
      //console.log(InputFile[index]);
      if (count === 0) {
        inputSize = InputFile[index].split(' ');
        // console.log(inputSize);
        dimensionX = Number(inputSize[0]);
        dimensionY = Number(inputSize[1]);
      }
      if (count === 1) {
        initialPosition = InputFile[index].split(' ');
        initialPositionX = Number(initialPosition[0]);
        initialPositionY = Number(initialPosition[1]);
        initialPositionDirection = initialPosition[2];
        // console.log(initialPositionX,initialPositionY,//initialPositionDirection);

      }
      if (count === 2) {
        inputMoves = InputFile[index];
        //console.log(inputMoves);

      }
      count++;

    }

  }
  if (checkMovesValidity(inputMoves) === false) {
    console.log('The input moves provided are invalid.Please provide valid input moves');
    process.exit(1);
  }
  var currentDirection, currentLocationX, currentLocationY, currentInputMove;
  currentDirection = initialPositionDirection;
  currentLocationX = initialPositionX;
  currentLocationY = initialPositionY;
  MoveTheBot(inputMoves, currentDirection, currentLocationX, currentLocationY, dimensionX, dimensionY);
  


}



mainFunction();


