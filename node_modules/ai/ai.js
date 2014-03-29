//The difficulty package
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