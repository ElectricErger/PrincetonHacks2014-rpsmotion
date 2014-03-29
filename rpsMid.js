//This program determines whether the user has won, lost, or tied with the
//computer. It also implements a timer and a counter.

//This is the main loop of the program


function playGame(int level, boolean hasLeap){
    var machineAnswer = require(./ai.js);
    int count = 0;
    int wins = 0;
    int losses = 0;
    int ties = 0;
    boolean playing=true;
    //Get level directly from the webpage
    //Get hasLeap directlyl from the webpage
    while(playing){

        //Calling the get methods --> Start other method --> That method starts a count down --> Returns a snap shot

        //Get input
        if (hasLeap) //if you have one we'll take it from the input
            //@@@@@@@@@@ int human = input.leap;
        else //if you don't have a leap then we'll just use the keyboard
            //int human = input.keyboard;

        int computer=machineAnswer.response(level, human); //Input: 1|2 --> Easy/Hard. 1|2|3 --> Rock|Paper|Sizzors
                                                            //Output: 1|2|3 --> Rock|Paper|Sizzors
//See Appendix A
    int result = HumanWin(human, computer); //Returns an int that declares that the player has won (+) or lost (-1)
    if (result < 0)
        losses++;
    if (result > 0)
        wins++;
    if (result ==0)
        ties++;

    playing = input.playAgain(); //
    }
}
//See Appendix B
function HumanWin(human, computer){
    if(human==computer)
        return 0;
    if(human==1 && computer==3)
        return 1;
    if(human==3 && computer==1)
        return -1;
    if(human>computer)
        return 1;
    if(computer>human)
        return -1;
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