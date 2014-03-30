
function coolFunction(){
  var previousFrame = null;
  var paused = false;
  var pauseOnGesture = false;
  var count = 0;
  var result = -1;

  // Setup Leap loop with frame callback function
  var controllerOptions = {enableGestures: true};
  Leap.loop(controllerOptions, function(frame) {
    if (paused) {
      return; // Skip this update
    }

    // Store frame for motion functions
    previousFrame = frame;

    if (frame.hands.length == 0){
      //no response
      result = -1;
    }
    else if(frame.fingers.length == 0){
      // rock
      result = 1;
    }
    else if(frame.fingers.length == 1 || frame.fingers.length == 2){
      //scissor
      result = 2;
    }
    else if(frame.fingers.length == 5){
      //paper
      result = 3;
    }
    count++;

    if (count == 55){
      //alert(result);
      paused = !paused;
    }


  })
  return result;
}
