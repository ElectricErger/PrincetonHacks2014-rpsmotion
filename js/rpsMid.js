//This program determines whether the user has won, lost, or tied with the
//computer. It also implements a timer and a counter.
//This is the main loop of the program

function playGame(level, hasLeap){
    var count = 0;
    var score = 0;
    var playing = true;
    var human;
    //while(playing){
        //Calling the get methods --> Start other method --> That method starts a count down --> Returns a snap shot

        //Get input
    human = freeze(hasLeap);
    alert(human);
    /*if(human == 5) return;
    while(!(human==4||human==5)){
        alert("HI");
     //document.addEventListener('keydown', function(event));
     if(human == 5){return;}
     if(human == 4){break;}
    }*/

    var computer=response(level, human); 
    score = score + HumanWin(human, computer);
    updateScore(score);

    //playing = input.playAgain(); //Tests for the gester to play again
    //}
}
//See Appendix B

function updateScore(score){
    var scorestring = "Score: "        
    scorestring += score  
    document.getElementById("score").innerHTML = scorestring
}

function HumanWin(human, computer){
    if(human == computer)
        return 0;
    if(human == 1 && computer == 3)
        return 1;
    if(human == 3 && computer == 1)
        return -1;
    if(human > computer)
        return 1;
    if(computer > human)
        return -1;
}

//You pass in the "difficulty" Easy - 1, Hard - 2 and "userMove" Rock - 1, Paper - 2, Sizzors - 3
//It will return what the machine throws: Rock - 1, Paper - 2, Sizzors - 3

function response(lvl, userMove){
    var respond
    //Easy: Random number
    if (lvl == 1){
        var rand = Math.random();
        if (rand <= (1/3)){
            respond = 1;
        }
        else{
            if (rand <= (2/3)){
                respond = 2;
            }
            else{
                respond = 3;
            }
        }
        return respond;
    }

    //Hard: Throws a second after you
    if (lvl == 2){
        respond = userMove;
        respond++;
        if (respond > 3){
            respond = 1;
        }
        return respond;
    }
}

//Displays graphics of the numbers 3,2,1 0
function CountDown(level, hasLeap){
    fxFunction(3);
    window.setTimeout(function(){fxFunction(2)}, 1000);
    window.setTimeout(function(){fxFunction(1)}, 2000);
	window.setTimeout(function(){playGame(level, hasLeap)}, 3000);
}

//Takes a freeze frame of the sensor's view  after a 
//three second countdown
function freeze(isLeap){
	//var controller = new Leap.controller(); //Causes crash
	var input = 0;
	if(isLeap){
          var previousFrame = null;
          var paused = false;
          var pauseOnGesture = false;
          var count = 0;
          var result = -1;

          // Setup Leap loop with frame callback function
          var controllerOptions = {enableGestures: true};
          Leap.loop(controllerOptions, function(frame) {
            if (paused) {
              input = result; // Skip this update
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
              togglePause(paused);
            }
        }
    } else{
        input = keyIn();
    }
	return input;
}

function vectorToString(vector, digits) {
            if (typeof digits === "undefined") {
              digits = 1;
            }
            return "(" + vector[0].toFixed(digits) + ", "
                       + vector[1].toFixed(digits) + ", "
                       + vector[2].toFixed(digits) + ")";
          }
function togglePause(paused) {
            paused = !paused;
}
//Implements the keyboard backup
function keyIn(){
	//document.addEventListener('keydown', function(event));
	switch(event.keyCode){
		case 49: return 1;
		case 50: return 2;
		case 51: return 3;
		case 52: return 4;
		case 53: return 5;
		default: return -1;
    }
}





//Appendix A
//For easy, just set output to be random
/*        if(level==1){
            output =(int)(Math.rand()*3)+1;
        }
        int input=;
        else{
            if(count<10{
                output = getBetter(input);
                count++;
            }
        else{
           output = getWorse(input);
             count--;
         }
     }
*/
//Determines whether the user won or lost and acts accordingly.
//      String didWin = DidWin(input, output);
/*
     switch(didWin){
            case("Win")
                wins++;
                break;
            case("Lose")
                losses++;
                break;
            case("Tie")
                ties++;
                break;
   }
*/

//Appendix B
/*
//Determines whether the input is superior to the output, returns "Tie" if same
//"Win" if superior, "Lose" if inferior
function DidWin(int input, int output){
    if(input==output){return "Tie";}
    if(input==1){
    if(output==2){return "Lose";}
        else{return "Win"}
    }
    if(input==2){
    if(output==1){return "Win";}
        else{return "Lose"}
    }
    if(input==3){
    if(output==1){return "Lose";}
        else{return "Win"}
    }
}
*/
