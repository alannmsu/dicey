





const rollDice = (numOfDie, sidesOfDie, rerollDie) => {

	console.log(numOfDie);
	console.log(sidesOfDie);
	console.log(rerollDie);
	let stat = [];
	for(i = 0, roll = 0; i < numOfDie;) {

		roll = Math.floor(Math.random() * Math.floor(sidesOfDie)+1);

		console.log(`This is roll number ${i+1}: ${roll}!`)

		if (rerollDie == 0) {
			stat.push(roll);
			i++;

		} else if (rerollDie == 1) {

			if (roll != 1) {
				stat.push(roll);
				i++;

			} else if (roll == 1) {

				while (roll == 1 ) {

					roll = Math.floor(Math.random() * Math.floor(sidesOfDie)+1);
					console.log(`This is an extra roll: ${roll}!`)
				}
				
				stat.push(roll);
				i++;				
			}
		}

		console.log(stat);

	};
}

export default rollDice;