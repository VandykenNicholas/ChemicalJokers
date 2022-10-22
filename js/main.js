let kdaTracker = 0;
let players = [{
	name: `test`,
	kda: []},{
	
	name: `Dj`
}];


gameStats(`Test opponent`, `Test Date`, `test score`, `Test map 1`, `Map 1 score test`, `Test Map 2`, `Map 2 score Test`, `Test Map 3`, `Map 3 score Test`, false, true, [2,3,1,2,2,3] , false, true, true, true, false,false);



function gameStats(opponent, date, totalScore, map1, map1Score, map2, map2Score, map3, map3Score, played3, dutch, dkd, dj, fat, son, slog, nirt, pol,) {
	let table = document.getElementById("GameStats");
	let header = [``, `Against`, opponent, `Date`, date, `Total Score`, totalScore, ``, ``, ``, ``, ``];
	let spacer = [``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``];
	let details1 = [`Map 1`, map1, `Score`, map1Score, `Map 2`, map2, `Score`, map2Score, `Map 3`, map3, `Score`, map3Score];
	let details2 = [``, `Kills`, `Deaths`, `KDR`, `Kills`, `Deaths`, `KDR`, `Kills`, `Deaths`, `KDR`, `KDA`, ``];
	let row = [table.insertRow(0), table.insertRow(1), table.insertRow(2), table.insertRow(3), table.insertRow(4), table.insertRow(5), table.insertRow(6), table.insertRow(
		7), table.insertRow(8), table.insertRow(9), table.insertRow(10), table.insertRow(11), table.insertRow(12), table.insertRow(13), table.insertRow(14), table.insertRow(15)];
	let cell = [];
	let currentRow = 0;
	for (let i = 0; i < 12; i++) {
		cell[i] = row[currentRow].insertCell(i);
		cell[i].innerHTML = header[i];
	}
	currentRow += 1;
	for (let i = 0; i < 12; i++) {
		cell[i] = row[currentRow].insertCell(i);
		cell[i].innerHTML = spacer[i];
	}
	currentRow += 1;
	for (let i = 0; i < 12; i++) {
		cell[i] = row[currentRow].insertCell(i);
		cell[i].innerHTML = details1[i];
	}
	currentRow += 1;
	for (let i = 0; i < 12; i++) {
		cell[i] = row[currentRow].insertCell(i);
		cell[i].innerHTML = details2[i];
	}
	currentRow += 1;
	if (dutch) {
		let player = players[0];
		if (played3){
			player.kda[kdaTracker]= (((dkd[0]/dkd[1])+(dkd[2]/dkd[3])+(dkd[4]/dkd[5]))/3).toFixed(2);
			let playerStats = [player.name,dkd[0], dkd[1],(dkd[0]/dkd[1]).toFixed(2),dkd[2], dkd[3], (dkd[2]/dkd[3]).toFixed(2),dkd[4], dkd[5], (dkd[4]/dkd[5]).toFixed(2), player.kda[kdaTracker], ``];
			for (let i = 0; i < 12; i++) {
				cell[i] = row[currentRow].insertCell(i);
				cell[i].innerHTML = playerStats[i];
			}
		}
		else{
			player.kda[kdaTracker]= (((dkd[0]/dkd[1])+(dkd[2]/dkd[3]))/2).toFixed(2);
			let playerStats = [player.name,dkd[0], dkd[1],(dkd[0]/dkd[1]).toFixed(2),dkd[2], dkd[3],(dkd[2]/dkd[3]).toFixed(2),``, ``, ``, player.kda[kdaTracker], ``];
			for (let i = 0; i < 12; i++) {
				cell[i] = row[currentRow].insertCell(i);
				cell[i].innerHTML = playerStats[i];
		}
		
		}
	}
	
	currentRow += 1;
	
	if (dj) {
		let player = players[1];
		let playerStats = [player.name];
		for (let i = 0; i < 12; i++) {
			cell[i] = row[currentRow].insertCell(i);
			cell[i].innerHTML = playerStats[i];
		}
		currentRow += 1;
		
	}
	kdaTracker += 1;
}
gameStats(`Test opponent`, `Test Date`, `test score`, `Test map 1`, `Map 1 score test`, `Test Map 2`, `Map 2 score Test`, `Test Map 3`, `Map 3 score Test`, false, true, [2,3,1,2,2,3] , false, true, true, true, false,false);
gameStats(`Test opponent`, `Test Date`, `test score`, `Test map 1`, `Map 1 score test`, `Test Map 2`, `Map 2 score Test`, `Test Map 3`, `Map 3 score Test`, false, true, [2,3,1,2,2,3] , false, true, true, true, false,false);



