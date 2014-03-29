//Displays graphics of the numbers 3,2,1 0
function CountDown(){
	/*fxFunction(3);*/
	for(var i = 1; i<3;i++){
		window.setTimeout(/*fxFunction(3-i)*/,1000);
	}
	window.setTimeout(return,1000);
}

//Takes a freeze frame of the sensor's view  
function freeze(){
	var controller = new Leap.controller();
	CountDown();
	/*captureFunction*/
}

