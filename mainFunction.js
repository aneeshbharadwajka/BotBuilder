var fs = require('fs');
var path = require('path');

function mainFunction() {
  var count = 0;
  // console.log('Hello');
  
  var InputFile = fs.readFileSync(process.argv[2]).toString().split('\n');
  
  for (var index = 0; index < InputFile.length; index++) {
    if (InputFile[index].length !== 0) {
      //console.log(InputFile[index]);
      if(count === 0) {
        var inputSize = InputFile[index].split(' ');
          // console.log(inputSize);
          var dimensionX = Number(inputSize[0]);
          var dimensionY = Number(inputSize[1]);
      }
      if(count === 1) {
        var initialPosition = InputFile[index].split(' ');
          var initialPositionX = Number(initialPosition[0]);
          var initialPositionY = Number(initialPosition[1]);
          var initialPositionDirection = initialPosition[2];
         // console.log(initialPositionX,initialPositionY,//initialPositionDirection);

      }
      if(count === 2) {
        var inputMoves = InputFile[index];
          //console.log(inputMoves);

      }
      count++;
      
      }
      
    }
  }



mainFunction();


