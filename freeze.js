//Displays graphics of the numbers 3,2,1 0
function CountDown(){
	fxFunction(3);
	for(var i = 1; i<3;i++){
		window.setTimeout(fxFunction(3-i),1000);
	}
	window.setTimeout(null,1000);

}

//Takes a freeze frame of the sensor's view  after a 
//three second countdown
function freeze(isLeap){
	var controller = new Leap.controller();
	 var input = 0;
	CountDown();
	if(isLeap){/*captureFunction*/;}
	else{input = keyIn();}
}

//Implements the keyboard backup
function keyIn(){
	document.addEventListener('keydown', function(event));
	switch(event.keyCode)
		case 49: return 1;
		case 50: return 2;
		case 51: return 3;
		case 52: return 4;
		case 53: return 5;
		default: return -1;
}


