//The difficulty package
//You pass in the "difficulty" Easy - 1, Hard - 2 and "userMove" Rock - 1, Paper - 2, Sizzors - 3
//It will return what the machine throws: Rock - 1, Paper - 2, Sizzors - 3

function ai(lvl, userMove){
	var response
	//Easy: Random number
	if (lvl == 1){
		var rand = Math.random();
		if (rand <= (1/3)){
			response = 1;
		}
		else{
			if (rand <= (2/3)){
				response = 2;
			}
			else{
				response = 3;
			}
		}
		return response;
	}

	//Hard: Throws a second after you
	else{
		response = userMove;
		response++;
		if (response > 3){
			response = 1;
		}
		return response;
	}
}