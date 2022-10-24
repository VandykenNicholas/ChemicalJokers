createGameContainer(`10/19/2022`,
	`VGG`,
	`Loss`,
	`Dutch`,
	5,6,
	6,5,
	0,0,
	`DJ`,
	17,5,
	16,5,
	0,0,
	`Fatigue`,
	12,5,
	6,3,
	0,0,
	`Marky`,
	17,6,
	18,7,
	0,0,
	`Slog`,
	8,5,
	6,3,
	0,0,
	`Suna`,
	`11-1`,
	`Kiti`,
	`11-0`,
	false,null,null,`22-1`
	);

function createGameContainer(date,
                             opponent,
                             outcome,
                             firstPlayer,
                             k11, d11,
                             k12,d12,
                             k13, d13,
                             secondPlayer,
                             k21, d21,
                             k22, d22,
                             k23, d23,
                             thirdPlayer,
                             k31, d31,
                             k32, d32,
                             k33, d33,
                             forthPlayer,
                             k41, d41,
                             k42, d42,
                             k43, d43,
                             fifthPlayer,
                             k51, d51,
                             k52, d52,
                             k53, d53,
                             firstMap,
                             firstMapScore,
                             secondMap,
                             secondMapScore,
                             thirdPlayed,
                             thirdMap,
                             thirdMapScore,
                             totalScoreInput){
	
	////needed conditional variables////
	let kd31 = 0;
	let kd32 = 0;
	let kd33 = 0;
	let kd34 = 0;
	let kd35 = 0;
	///////////////////////////////////
	let frag =document.createDocumentFragment();
	let body = document.getElementById(`body`);
	let gameContainer = document.createElement(`div`);
	gameContainer.classList.add(`game-container`)
	frag.append(gameContainer);
	/////////////////////////////////////////////////////////////
	let matchContainer = document.createElement(`div`)
	matchContainer.classList.add(`match-container`);
	gameContainer.appendChild(matchContainer);
	//////////////////////////////////////////////////
	let matchC1 = document.createElement(`div`)
	matchC1.classList.add(`item-match-info`);
	matchContainer.appendChild(matchC1)
	//////////////////////////////////////////////////
	let dateNode = document.createTextNode(`${date}`);
	matchC1.appendChild(dateNode);
	///////////////////////////////////////////////
	let matchC2 = document.createElement(`div`)
	matchC2.classList.add(`item-match-info`);
	matchContainer.appendChild(matchC2)
	/////////////////////////////////////////////
	let againstNode = document.createTextNode(`Against: ${opponent}`);
	matchC2.appendChild(againstNode);
	//////////////////////////////////////////////////////
	let matchC3 = document.createElement(`div`)
	matchC3.classList.add(`item-match-info`);
	if(outcome === `Lose`){
		matchC3.classList.add(`red`);
	}
	matchContainer.appendChild(matchC3);
	//////////////////////////////////////////////////////
	let outcomeNode = document.createTextNode(`${outcome}`);
	matchC3.appendChild(outcomeNode);
	//////////////////////////////////////////////////
	let statsContainer = document.createElement(`div`)
	statsContainer.classList.add(`stats-container`);
	gameContainer.appendChild(statsContainer);
	////////////////////////////////////////////////
	let playersContainer = document.createElement(`div`)
	playersContainer.classList.add(`players-container`);
	statsContainer.appendChild(playersContainer);
	/////////////////////////////////////////////////
	let playerTopContainer = document.createElement(`div`)
	playerTopContainer.classList.add(`player-top-container`);
	playersContainer.appendChild(playerTopContainer);
	/////////////////////////////////////////////////
	let itemMap = document.createElement(`div`)
	itemMap.classList.add(`item-player-top`);
	playerTopContainer.appendChild(itemMap)
	/////////////////////////////////////////////
	let mapNode = document.createTextNode(`Map`);
	itemMap.appendChild(mapNode);
	/////////////////////////////////////////////
	let itemScore = document.createElement(`div`)
	itemScore.classList.add(`item-player-top`);
	playerTopContainer.appendChild(itemScore)
	/////////////////////////////////////////////
	let scoreNode = document.createTextNode(`Score`);
	itemScore.appendChild(scoreNode);
	/////////////////////////////////////////////
	let placePlayers = document.createElement(`div`)
	placePlayers.classList.add(`item-player-pic`);
	playersContainer.appendChild(placePlayers)
	/////////////////////////////////////////////
	let playerPlace = document.createTextNode(`Players`);
	placePlayers.appendChild(playerPlace);
	/////////////////////////////////////////////
	let player1 = document.createElement(`div`)
	player1.classList.add(`item-player-pic`);
	playersContainer.appendChild(player1)
	/////////////////////////////////////////////
	let playerOne = document.createTextNode(`${firstPlayer}`);
	player1.appendChild(playerOne);
	/////////////////////////////////////////////
	let player2 = document.createElement(`div`)
	player2.classList.add(`item-player-pic`);
	playersContainer.appendChild(player2)
	/////////////////////////////////////////////
	let playerTwo = document.createTextNode(`${secondPlayer}`);
	player2.appendChild(playerTwo);
	/////////////////////////////////////////////
	let player3 = document.createElement(`div`)
	player3.classList.add(`item-player-pic`);
	playersContainer.appendChild(player3)
	/////////////////////////////////////////////
	let playerThree = document.createTextNode(`${thirdPlayer}`);
	player3.appendChild(playerThree);
	/////////////////////////////////////////////
	let player4 = document.createElement(`div`)
	player4.classList.add(`item-player-pic`);
	playersContainer.appendChild(player4)
	/////////////////////////////////////////////
	let playerFour = document.createTextNode(`${forthPlayer}`);
	player4.appendChild(playerFour);
	/////////////////////////////////////////////
	let player5 = document.createElement(`div`)
	player5.classList.add(`item-player-pic`);
	playersContainer.appendChild(player5)
	/////////////////////////////////////////////
	let playerFive = document.createTextNode(`${fifthPlayer}`);
	player5.appendChild(playerFive);
	/////////////////////////////////////////////
	let placerMapContainer = document.createElement(`div`)
	placerMapContainer.classList.add(`map-scroll-container`);
	statsContainer.appendChild(placerMapContainer);
	//////////////////////////////////////////////////
	let mapStatsOne = document.createElement(`div`)
	mapStatsOne.classList.add(`map-stats-container`);
	placerMapContainer.appendChild(mapStatsOne);
	//////////////////////////////////////////////////
	let placeMapInfoContainer = document.createElement(`div`)
	placeMapInfoContainer.classList.add(`map-info-container`);
	mapStatsOne.appendChild(placeMapInfoContainer);
	//////////////////////////////////////////////////
	let map1 = document.createElement(`div`)
	map1.classList.add(`item-map-info`);
	placeMapInfoContainer.appendChild(map1)
	/////////////////////////////////////////////
	let map1Node = document.createTextNode(`${firstMap}`);
	map1.appendChild(map1Node);
	if (firstMap === `Suna`){
		map1.classList.add(`suna`);
	}
	else if (firstMap === `Maar`){
		map1.classList.add(`maar`)
	}
	else if(firstMap === `Kiti`){
		map1.classList.add(`kiti`)
	}
	/////////////////////////////////////////////
	let map1Score = document.createElement(`div`)
	map1Score.classList.add(`item-map-info`);
	placeMapInfoContainer.appendChild(map1Score)
	/////////////////////////////////////////////
	let map1ScoreNode = document.createTextNode(`${firstMapScore}`);
	map1Score.appendChild(map1ScoreNode);
	/////////////////////////////////////////////////////////
	let kdContainer = document.createElement(`div`)
	kdContainer.classList.add(`kd-container`);
	mapStatsOne.appendChild(kdContainer)
	///////// MAP AND KD LOOP //////////////////////////
	let kd1 = (k11 / d11).toFixed(2);
	let kd2 = (k21 / d21).toFixed(2);
	let kd3 = (k31/d31).toFixed(2);
	let kd4 = (k41/d41).toFixed(2);
	let kd5 = (k51/d51).toFixed(2);
	let kdLoop = [`K`,`D`,`KDR`, k11, d11, kd1, k21, d21, kd2, k31, d31, kd3, k41, d41, kd4, k51, d51, kd5];
	////////////// variables
	kdLoop.forEach((x) => {
		let kdDivNew = document.createElement(`div`)
		kdDivNew.classList.add(`item-kd-inner`);
		kdContainer.appendChild(kdDivNew)
		/////////////////////////////////////////////
		let loopNode = document.createTextNode(x);
		kdDivNew.appendChild(loopNode);
		if (parseFloat(x) < 1){
				kdDivNew.classList.add(`red`);
		}
		/////////////////////////////////////////////////////////
	});
	/////////////////////////// SECOND ITTERATION ////////////////////////////
	let mapStatsTwo = document.createElement(`div`)
	mapStatsTwo.classList.add(`map-stats-container`);
	placerMapContainer.appendChild(mapStatsTwo);
	//////////////////////////////////////////////////
	let placeMapInfoContainer2 = document.createElement(`div`)
	placeMapInfoContainer2.classList.add(`map-info-container`);
	mapStatsTwo.appendChild(placeMapInfoContainer2);
	//////////////////////////////////////////////////
	let map2 = document.createElement(`div`)
	map2.classList.add(`item-map-info`);
	placeMapInfoContainer2.appendChild(map2)
	/////////////////////////////////////////////
	let map2Node = document.createTextNode(`${secondMap}`);
	map2.appendChild(map2Node);
	if (secondMap === `Suna`){
		map2.classList.add(`suna`);
	}
	else if (secondMap === `Maar`){
		map2.classList.add(`maar`)
	}
	else if(secondMap === `Kiti`){
		map2.classList.add(`kiti`)
	}
	/////////////////////////////////////////////
	let map2Score = document.createElement(`div`)
	map2Score.classList.add(`item-map-info`);
	placeMapInfoContainer2.appendChild(map2Score)
	/////////////////////////////////////////////
	let map2ScoreNode = document.createTextNode(`${secondMapScore}`);
	map2Score.appendChild(map2ScoreNode);
	/////////////////////////////////////////////////////////
	let kdContainer2 = document.createElement(`div`)
	kdContainer2.classList.add(`kd-container`);
	mapStatsTwo.appendChild(kdContainer2)
	///////// MAP AND KD LOOP //////////////////////////
	let kd21 = (k12 / d12).toFixed(2);
	let kd22 = (k22 / d22).toFixed(2);
	let kd23 = (k32/d32).toFixed(2);
	let kd24 = (k42/d42).toFixed(2);
	let kd25 = (k52/d52).toFixed(2);
	let kdLoop2 = [`K`,`D`,`KDR`, k12, d12, kd21, k22, d22, kd22, k32, d32, kd23, k42, d42, kd24, k52, d52, kd25]
	////////////// variables
	kdLoop2.forEach((x) => {
		let kdDivNew = document.createElement(`div`)
		kdDivNew.classList.add(`item-kd-inner`);
		kdContainer2.appendChild(kdDivNew)
		/////////////////////////////////////////////
		let loopNode = document.createTextNode(x);
		kdDivNew.appendChild(loopNode);
		/////////////////////////////////////////////////////////
		if (parseFloat(x) < 1){
			kdDivNew.classList.add(`red`);
		}
	});
	///////////////////// Third itteration /////////////////////////
	if (thirdPlayed){
		let mapStatsThree = document.createElement(`div`)
		mapStatsThree.classList.add(`map-stats-container`);
		placerMapContainer.appendChild(mapStatsThree);
		//////////////////////////////////////////////////
		let placeMapInfoContainer3 = document.createElement(`div`)
		placeMapInfoContainer3.classList.add(`map-info-container`);
		mapStatsThree.appendChild(placeMapInfoContainer3);
		//////////////////////////////////////////////////
		let map3 = document.createElement(`div`)
		map3.classList.add(`item-map-info`);
		placeMapInfoContainer3.appendChild(map3)
		/////////////////////////////////////////////
		let map3Node = document.createTextNode(`${thirdMap}`);
		map3.appendChild(map3Node);
		if (thirdMap === `Suna`){
			map3.classList.add(`suna`);
		}
		else if (thirdMap === `Maar`){
			map3.classList.add(`maar`)
		}
		else if(thirdMap === `Kiti`){
			map3.classList.add(`kiti`)
		}
		/////////////////////////////////////////////
		let map3Score = document.createElement(`div`)
		map3Score.classList.add(`item-map-info`);
		placeMapInfoContainer3.appendChild(map3Score)
		/////////////////////////////////////////////
		let map3ScoreNode = document.createTextNode(`${thirdMapScore}`);
		map3Score.appendChild(map3ScoreNode);
		/////////////////////////////////////////////////////////
		let kdContainer3 = document.createElement(`div`)
		kdContainer3.classList.add(`kd-container`);
		mapStatsThree.appendChild(kdContainer3)
		///////// MAP AND KD LOOP //////////////////////////
		kd31 = (k13 / d13).toFixed(2);
		kd32 = (k23 / d23).toFixed(2);
		kd33 = (k33/d33).toFixed(2);
		kd34 = (k43/d43).toFixed(2);
		kd35 = (k53/d53).toFixed(2);
		let kdLoop3 = [`K`,`D`,`KDR`, k13, d13, kd31, k23, d23, kd32, k33, d33, kd33, k43, d43, kd34, k53, d53, kd35];
		////////////// variables
		kdLoop3.forEach((x) => {
			let kdDivNew = document.createElement(`div`)
			kdDivNew.classList.add(`item-kd-inner`);
			kdContainer3.appendChild(kdDivNew)
			/////////////////////////////////////////////
			let loopNode = document.createTextNode(x);
			kdDivNew.appendChild(loopNode);
			/////////////////////////////////////////////////////////
			if (parseFloat(x) < 1){
				kdDivNew.classList.add(`red`);
			}
		});
	}

	/////////////////// AVERAGE CONTAINER ///////////////////////
	let averageContainer = document.createElement(`div`)
	averageContainer.classList.add(`average-container`);
	statsContainer.appendChild(averageContainer);
	let playerTopContainer2 = document.createElement(`div`)
	playerTopContainer2.classList.add(`player-top-container`);
	averageContainer.appendChild(playerTopContainer2);
	let total = document.createElement(`div`)
	total.classList.add(`item-player-top`);
	playerTopContainer2.appendChild(total);
	/////////////////////////////////////////////
	let totalNode = document.createTextNode(`Total`);
	total.appendChild(totalNode);
	let totalScore = document.createElement(`div`)
	totalScore.classList.add(`item-player-top`);
	playerTopContainer2.appendChild(totalScore);
	/////////////////////////////////////////////
	let totalScoreNode = document.createTextNode(`${totalScoreInput}`);
	totalScore.appendChild(totalScoreNode);
	///////////////// AVERAGE LOOP /////////////
	let player1kda =0;
	let player2kda =0;
	let player3kda =0;
	let player4kda =0;
	let player5kda =0;
	let teamkda =0;
	if (thirdPlayed) {
		player1kda = ((parseFloat(kd1)+parseFloat(kd21)+parseFloat(kd31))/3).toFixed(3);
		player2kda = ((parseFloat(kd2)+parseFloat(kd22)+parseFloat(kd32))/3).toFixed(3);
		player3kda = ((parseFloat(kd3)+parseFloat(kd23)+parseFloat(kd33))/3).toFixed(3);
		player4kda = ((parseFloat(kd4)+parseFloat(kd24)+parseFloat(kd34))/3).toFixed(3);
		player5kda = ((parseFloat(kd5)+parseFloat(kd25)+parseFloat(kd35))/3).toFixed(3);
	}
	else {
		player1kda = ((parseFloat(kd1)+parseFloat(kd21))/2).toFixed(3);
		player2kda = ((parseFloat(kd2)+parseFloat(kd22))/2).toFixed(3);
		player3kda = ((parseFloat(kd3)+parseFloat(kd23))/2).toFixed(3);
		player4kda = ((parseFloat(kd4)+parseFloat(kd24))/2).toFixed(3);
		player5kda = ((parseFloat(kd5)+parseFloat(kd25))/2).toFixed(3);
	}
	teamkda = ((parseFloat(player1kda)+parseFloat(player2kda)+parseFloat(player3kda)+parseFloat(player4kda)+parseFloat(player5kda))/5).toFixed(3);
	
	let averageLoop = [teamkda,player1kda, player2kda,player3kda,player4kda,player5kda];
	////////////// variables
	averageLoop.forEach((x) => {
		let kdDivNew = document.createElement(`div`)
		kdDivNew.classList.add(`item-average`);
		averageContainer.appendChild(kdDivNew)
		/////////////////////////////////////////////
		let loopNode = document.createTextNode(`${x}`);
		kdDivNew.appendChild(loopNode);
		/////////////////////////////////////////////////////////
		if (x < 1){
			kdDivNew.classList.add(`red`);
		}
		
	});
	averageLoop.forEach((x) =>{console.log(x)});

	
	/////always at the END!!!!!!
	body.append(frag);
	
}


// function createMatchContainer(){
// 	let newDiv = document.createElement(`div`);
// 	newDiv.classList.add(`match-container`)
// 	let body = document.getElementById(`game-container`);
// 	body.append(newDiv);
//
// }

