//This program determines whether the user has won, lost, or tied with the
//computer. It also implements a timer and a counter.

function playGame(int level){
    int count = 0;
    int wins = 0;
    int losses = 0;
    int ties = 0;
    boolean playing=true;
    while{playing}
      int output=0;
//For easy, just set output to be random
      if(level==1){
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
//Determines whether the user won or lost and acts accordingly.
      String didWin = DidWin(input, output);
	 switch(didWin)
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
}

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
