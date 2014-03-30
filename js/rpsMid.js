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
var p = 0;
var events = new Array();
var numRock=0;
var numPaper=0;
var numScissor=0;

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
  }
})

function playGame(level, hasLeap){
    document.getElementById("content").style.height = "63%";
    document.getElementById("content").style.top = "29%";
    var count = 0;
    var score = 0;
    var playing = true;
    human = result;
    var computer = response(level, human)
    var winloss = HumanWin(human, computer);
    score = score + winloss;
    updateScore(score);
    if(computer == 1){
        if(winloss == 1){
            document.getElementById("content").innerHTML = "<center>HAL the robot shoots</center><center><img src=\"../repos/img/rock.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-success leap-interactive\" onclick = \"switch_pages2()\">You win!</button></center>";
        } else if(winloss == -1){
            document.getElementById("content").innerHTML = "<center>HAL the robot plays</center><center><img src=\"../repos/img/rock.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-danger leap-interactive\" onclick = \"switch_pages2()\">You Lose!</button></center>";
        } else{
            document.getElementById("content").innerHTML = "<center>HAL the robot uses</center><center><img src=\"../repos/img/rock.png\" width=\"300px\" height=\"300px\"></center><center><button class=\"btn btn-primary btn-lg leap-interactive\" onclick=\"switch_pages2()\">A draw!</button></center>";
        }
    } else if(computer == 2){
         if(winloss == 1){
            document.getElementById("content").innerHTML = "<center>HAL the robot shoots</center><center><img src=\"../repos/img/sissors.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-success leap-interactive\" onclick = \"switch_pages2()\">You win!</button></center>";
        } else if(winloss == -1){
            document.getElementById("content").innerHTML = "<center>HAL the robot plays</center><center><img src=\"../repos/img/sissors.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-danger leap-interactive\" onclick = \"switch_pages2()\">You Lose!</button></center>";
        } else{
            document.getElementById("content").innerHTML = "<center>HAL the robot uses</center><center><img src=\"../repos/img/sissors.png\" width=\"300px\" height=\"300px\"></center><center><button class=\"btn btn-primary btn-lg leap-interactive\" onclick=\"switch_pages2()\">A draw!</button></center>";
        }
    } else{
         if(winloss == 1){
            document.getElementById("content").innerHTML = "<center>HAL the robot shoots</center><center><img src=\"../repos/img/paper.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-success leap-interactive\" onclick = \"switch_pages2()\">You win!</button></center>";
        } else if(winloss == -1){
            document.getElementById("content").innerHTML = "<center>HAL the robot plays</center><center><img src=\"../repos/img/paper.png\" width=\"300px\" height=\"300px\"></center><center><button type=\"button\" class=\"btn btn-danger leap-interactive\" onclick = \"switch_pages2()\">You Lose!</button></center>";
        } else{
            document.getElementById("content").innerHTML = "<center>HAL the robot uses</center><center><img src=\"../repos/img/paper.png\" width=\"300px\" height=\"300px\"></center><center><button class=\"btn btn-primary btn-lg leap-interactive\" onclick=\"switch_pages2()\">A draw!</button></center>";
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
    //All sounds from SoundBible.com under attribution licence.
    var pain = new Audio("Pain.wav");
    var applause = new Audio("Applause.wav");
    var tBone = new Audio("Trombone.wav");
    var fireworks = new Audio("Fireworks.wav");
    if(human == computer){
        return 0;
    } else if(human == 3 && computer == 1){
        pain.play();
        pain.currentTime=0;
        return -1;
    } else if(human == 1 && computer == 3){
        applause.play();
        applause.currentTime=0;
        return 1;
    } else if(human == 3 && computer == 2){
        applause.play();
        applause.currentTime=0;
        return 1
    } else if(human == 1 && computer == 2){
        pain.play();
        pain.currentTime=0;
        return -1;
    } else if(human == 2 && computer == 1){
        applause.play();
        applause.currentTime=0;
        return 1;
    } else if(human == 2 && computer == 3){
        pain.play();
        pain.currentTime=0;
        return -1
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
        respond--;
        if (respond < 1){
            respond = 3;
        }
        return respond;
    }
    //Machine guessing
    if (lvl == 3){
        var imm1; var imm2; var imm3; //Rock papers and scissors
        var credit1=0; var credit2=0; var credit3=0; //Points - Filling any above conditions leads to a boost in points
        var old=0; var repeat=false;
        while(p>(p-10) || p>0){ //gets the last 10 values
            if (events[p] == 1){
                imm1++;
                if(old==events[p] && repeat)
                    credit1++;
            }
            if (events[p] == 2){
                imm2++;
                if(old==events[p] && repeat)
                    credit2++;
            }
            if (events[p] == 3){
                imm3++;
                if(old==events[p] && repeat)
                    credit3++;
            }
            if (old == events[p]) //Rule 3
                repeat=true;
            else
                repeat=false;
            old = events[p];
            p--;
        }
        /*If a person:
            Rule 1-has a ratio greater than 1.2 --> They favor it
            Rule 2-has choosen this between 3-5 times recently --> They favor it
            Rule 3-has a 3 consecutive streak --> they will not throw the same
            Protocol 1--If your previous guess was wrong, they're switching up the game and will likely do the opposite of what you just did        
        */
        if (imm1>0 && imm2>0 && imm3>0){
            var short1v2 = imm1/imm2; //short term preference
            var short2v3 = imm2/imm3;
            var short3v1 = imm3/imm1;

            if (short3v1 <= .833 || short1v2 >= 1.2) //Rule 1
                credit1++;
            if (short1v2 <= .833 || short2v3 >= 1.2)
                credit2++;
            if (short2v3 <= .833 || short3v1 >= 1.2)
                credit3++;

            if(imm1 > 3 && imm1 < 5) //Rule 2
                credit1++;
            if(imm2 > 3 && imm2 < 5)
                credit2++;
            if(imm3 > 3 && imm3 < 5) 
                credit3++;
        }
        //The credits act as a lottery
        var lottery = Math.random();
        var totalCredits = credit1 + credit2 + credit3;
        lotteryNumber = Math.floor(lottery*totalCredits); //By this time it's a random 1-n number (good for guessing)

        var lottery = new Array(); //Makes an ordered array full of the tickets
        for (int i=0; i<totalCredits; i++){
            if(credit1!=0){
                lottery[i]=1;
                credit1--;
            }
            if(credit2!=0){
                lottery[i]=2;
                credit2--;
            }
            if(credit3!=0){
                lottery[i]=3;
                credit3--;
            }
        }
        return lottery[lotteryNumber];
    }
}

//Displays graphics of the numbers 3,2,1 0
function CountDown(level, hasLeap){
    fxFunction(3);
    window.setTimeout(function(){fxFunction(2)}, 800);
    window.setTimeout(function(){fxFunction(1)}, 1600);
    window.setTimeout(function(){fxFunction(4)}, 2400);
    window.setTimeout(function(){paused=false;}, 2400);
	window.setTimeout(function(){playGame(level, hasLeap)}, 3200);
}

//Takes a freeze frame of the sensor's view  after a 
//three second countdown
function freeze(isLeap){
	//var controller = new Leap.controller(); //Causes crash
	var input = 0;
	if(isLeap){
        input = coolFunction();
    } else{
        input = keyIn();
    }

    if (input == 1)
        numRock++;
    if (input == 2)
        numPaper++;
    if (input == 3)
        numScissor++;
    events[p]=input;
    p++;
	return input;
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
