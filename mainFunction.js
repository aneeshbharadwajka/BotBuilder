var fs = require('fs');
var path = require('path');
var MoveTheBot = require('./MoveBotFunction.js');
var checkInputCoordinates = require('./checkInputFunction.js');
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
  var fileName = process.argv[2];
  var inputSize, dimensionX, dimensionY, initialPosition, initialPositionDirection;
  var initialPositionY, initialPositionX, inputMoves;
  // if(fileName.split('.') !== '.txt') {
  //   console.log('Please provide a input text file');
  //   process.exit(1);
  // }
  var InputFile = fs.readFileSync(fileName).toString().split('\n');
  for (var index = 0; index < InputFile.length; index++) {
    if (InputFile[index].length !== 0) {
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
      }
      count++;
    }
  }
  if (checkMovesValidity(inputMoves) === false) {
    console.log('The input moves provided are invalid.Please provide valid input moves');
    process.exit(1);
  }
  if (checkInputCoordinates(initialPositionX, initialPositionY, dimensionX, dimensionY) === false) {
    console.log(`Please provide valid input coordinates between 
    X: 0 and ${dimensionX} 
    Y: 0 and ${dimensionY}`);
    process.exit(1);
  }
  var currentDirection, currentLocationX, currentLocationY, currentInputMove;
  currentDirection = initialPositionDirection;
  currentLocationX = initialPositionX;
  currentLocationY = initialPositionY;
  MoveTheBot(inputMoves, currentDirection, currentLocationX, currentLocationY, dimensionX, dimensionY);
}

mainFunction();


