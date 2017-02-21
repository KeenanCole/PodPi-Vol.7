var five = require('johnny-five');
var board = new five.Board();

// When the board is ready, run this function
board.on('ready', function() {
  var green = new five.Led(9);
  var red = new five.Led(10);
  var blue = new five.Led(11);
  var anim = {
    easing: "linear",
    duration: 10000,
    cuePoints: [0, .06, .11, .17, .23, .28, .33, .39, .44, .5, .56, .61, .67, .73, .78, .83, .89, .94, 1],
    metronomic: false,
  }

  anim.keyFrames = [0, 255, 255, 0, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 0];
  red.pulse(anim);
 
  anim.keyFrames = [0, 0, 0, 0, 127, 127, 0, 255, 255, 0, 255, 255, 0, 0, 0, 0, 0, 0, 0];
  green.pulse(anim);

  anim.keyFrames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 160, 0, 255, 255, 0, 255, 255, 0];	 
  blue.pulse(anim); 
});

