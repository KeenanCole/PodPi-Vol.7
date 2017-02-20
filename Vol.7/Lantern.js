var five = require('johnny-five');
var board = new five.Board();

// When the board is ready, run this function
board.on('ready', function() {
  var green = new five.Led(11);
  var red = new five.Led(10);
  var blue = new five.Led(9);
  red.pulse(500); 
  blue.pulse(1000);
  green.pulse(1500);
});

