
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
      return result; // Skip this update
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

    if (count == 60){
      togglePause();
    }
    alert("IGOHSOGIE");


  })

  function vectorToString(vector, digits) {
    if (typeof digits === "undefined") {
      digits = 1;
    }
    return "(" + vector[0].toFixed(digits) + ", "
               + vector[1].toFixed(digits) + ", "
               + vector[2].toFixed(digits) + ")";
  }

  function togglePause() {
    paused = !paused;
  }
}
