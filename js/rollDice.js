import valOf from './valOf.js';
import rollOne from './rollOne.js';

const rollDice = () => {
	//Initialize variables
	//The number of dice to roll for each result
	let numOfDie = valOf('num-of-die');
	let rerollDie = valOf('reroll-die');
	let stat = []; //Results array
	let extraRoll = 1; //Counter for extra rolls during rerolling
	let roll = 0; //Result variable

	//Iterate single rolls "numOfDie" times
	for(i = 0; i < numOfDie;) {
		//Roll a single dice of "sidesOfDie" size
		roll = rollOne();
		console.log(`This is roll number ${i+1}: ${roll}!`)
		//If not rerolling, push result to array
		if (rerollDie == 0) {
			stat.push(roll);
			i++;

		//If rerollling 1s...
	} else if (rerollDie == 1) {
			//If result is not a 1, push to array
			if (roll != 1) {
				stat.push(roll);
				i++;
			//If result is 1, reroll until no longer 1, push to array
		} else if (roll == 1) {
			while (roll == 1 ) {
				roll = rollOne();
				console.log(`This is extra roll number ${extraRoll}: ${roll}!`);
				extraRoll++;
			}
			stat.push(roll);
			i++;				
		}
	} else if (rerollDie == 2) {
			//If result is not a 1, push to array
			if (roll != 1 && roll != 2) {
				stat.push(roll);
				i++;
			//If result is 1, reroll until no longer 1, push to array
		} else if (roll == 1 || roll == 2) {
			while (roll == 1 || roll == 2) {
				roll = rollOne();
				console.log(`This is extra roll number ${extraRoll}: ${roll}!`);
				extraRoll++;
			}
			stat.push(roll);
			i++;				
		}
	}
};

return stat;
}

export default rollDice;