//This program determines whether the user has won, lost, or tied with the
//computer. It also implements a timer and a counter.
//This is the main loop of the program
var previousFrame = null;
var paused = true;
var pauseOnGesture = false;
var count = 0;
var result = -1;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

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
    counter1++;
  }
  else if(frame.fingers.length == 1 || frame.fingers.length == 2){
    //scissor
    result = 2;
    counter2++;
  }
  else if(frame.fingers.length == 5){
    //paper
    result = 3;
    counter3++;
  }
  count++;

  if (count == 15){
    if(Math.max(counter1, counter2, counter3) == counter3){
        result = 3;
    } else if (Math.max(counter1, counter2, counter3) == counter2){
        result = 2;
    } else if (Math.max(counter1, counter2, counter3) == counter1){
        result = 1;
    }
    counter1=0
    counter2=0
    counter3=0
    count = 0;
    paused = !paused;
    document.getElementById("title").innerHTML = result;
  }
})

function playGame(level, hasLeap){
    document.getElementById("content").style.height = "63%";
    document.getElementById("content").style.top = "29%";
    var count = 0;
    var score = 0;
<<<<<<< HEAD
=======
    var playing = true;
<<<<<<< HEAD
    var human;
    //while(playing){
        //Calling the get methods --> Start other method --> That method starts a count down --> Returns a snap shot

        //Get input
    //human = freeze(hasLeap);
    //alert(human);
    /*if(human == 5) return;
    while(!(human==4||human==5)){
        alert("HI");
     //document.addEventListener('keydown', function(event));
     if(human == 5){return;}
     if(human == 4){break;}
    }*/

    var computer=response(level, 5); // this is the computer's move
    score = score + HumanWin(5, computer); // this calculates the score based on the computer's and the human's move
=======
>>>>>>> 3d9289d23687d73e04133db2f29a1d467b2d86ef
    human = result;
    var computer = response(level, human);
    var winloss = HumanWin(human, computer);
    score = score + winloss;
>>>>>>> 4ca087851d8e3cb9142b0726ae88788640110523
    updateScore(score);
    var string = "(" + level + "," + hasLeap + ")";
    if(computer == 1){
        if(winloss == 1){
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/rock.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-success leap-interactive\" onclick = \"CountDown("+string+")\">You win!</button></center>";
        } else if(winloss == -1){
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/rock.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-danger leap-interactive\" onclick = \"CountDown("+string+")\">You Lose!</button></center>";
        } else{
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/rock.png\" width=\"300px\" height=\"300px\"></center><center><button class=\"btn btn-primary btn-lg leap-interactive\" onclick=\"CountDown("+string+")\">A draw!</button></center>";
        }
    } else if(computer == 2){
         if(winloss == 1){
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/sissors.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-success leap-interactive\" onclick = \"CountDown("+string+")\">You win!</button></center>";
        } else if(winloss == -1){
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/sissors.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-danger leap-interactive\" onclick = \"CountDown("+string+")\">You Lose!</button></center>";
        } else{
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/sissors.png\" width=\"300px\" height=\"300px\"></center><center><button class=\"btn btn-primary btn-lg leap-interactive\" onclick=\"CountDown("+string+")\">A draw!</button></center>";
        }
    } else{
         if(winloss == 1){
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/paper.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-success leap-interactive\" onclick = \"CountDown("+string+")\">You win!</button></center>";
        } else if(winloss == -1){
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/paper.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-danger leap-interactive\" onclick = \"CountDown("+string+")\">You Lose!</button></center>";
        } else{
            document.getElementById("content").innerHTML = "<center>HAL the robot does</center><center><img src=\"../repos/img/paper.png\" width=\"300px\" height=\"300px\"></center><center><button class=\"btn btn-primary btn-lg leap-interactive\" onclick=\"CountDown("+string+")\">A draw!</button></center>";
        }
    }
}
//See Appendix B

function updateScore(score){
    var curscorearr = document.getElementById("score").innerHTML.split(" ");
    var curscore = Number(curscorearr[1]);
    var scorestring = "Score: ";
    curscore += score;
    scorestring += curscore;
    document.getElementById("score").innerHTML = scorestring;
}

function HumanWin(human, computer){
    if(human == computer){
        return 0;
    } else if(human == 3 && computer == 1){
        return 1;
    } else if(human == 1 && computer == 3){
        return -1;
    } else if(human == 3 && computer == 2){
        return -1
    } else if(human == 1 && computer == 2){
        return 1;
    } else if(human == 2 && computer == 1){
        return -1;
    } else if(human == 2 && computer == 3){
        return 1
    }
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
<<<<<<< HEAD
    window.setTimeout(function(){fxFunction(2)}, 800);
    window.setTimeout(function(){fxFunction(1)}, 1600);
    window.setTimeout(function(){fxFunction(4)}, 2400);
    window.setTimeout(function(){paused=false;}, 2400);
	window.setTimeout(function(){playGame(level, hasLeap)}, 3200);
=======
    window.setTimeout(function(){fxFunction(2)}, 700);
    window.setTimeout(function(){fxFunction(1)}, 1400);
    window.setTimeout(function(){fxFunction(4)}, 2100);
    window.setTimeout(function(){paused=false;}, 2500);
	window.setTimeout(function(){playGame(level, hasLeap)}, 2800);
}

//Takes a freeze frame of the sensor's view  after a 
//three second countdown
function freeze(isLeap){
<<<<<<< HEAD
  if (isLeap){
    input = coolFunction();
  }
  else{
    input = keyIn();
  }
=======
	//var controller = new Leap.controller(); //Causes crash
	var input = 0;
	if(isLeap){
        input = coolFunction();
    } else{
        input = keyIn();
    }
>>>>>>> 4ca087851d8e3cb9142b0726ae88788640110523
	return input;
>>>>>>> 3d9289d23687d73e04133db2f29a1d467b2d86ef
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
