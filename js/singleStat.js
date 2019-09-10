import valOf from './valOf.js';
import rollDice from './rollDice.js';

let singleStat = () => {
	//Initialize variables
	//Query for drop none(0), low(1), or high(2)
	let dieDrop = valOf('die-drop');
	//Number of dice to drop
	let dieDropCount = valOf('die-drop-count');
	//Get stat array
	let fullArray = rollDice();

	if (dieDrop == 0) {

	} else if (dieDrop ==1) {

	} else if (dieDrop ==2) {

	}

	console.log(fullArray);

}

export default singleStat;