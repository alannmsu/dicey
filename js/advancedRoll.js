import singleStat from './singleStat.js';
import valOf from './valOf.js';


//ADVANCED ROLL LOGIC
let advancedRollSubmit = document.getElementById('advanced-roll-submit');

//The onClick handler for advanced rolls
let advancedRoll = () => {
	//Saves the values of user input into variables

	
	let bonus = valOf('bonus');
	//0 for subtraction, 1 for addition of bonus
	let bonusCount = valOf('bonus-count');
	//Amount of bonus to add or subtract according to bonus variable
	let rollDrop = valOf('roll-drop');
	//0 for no drop, 1 for dropping lowest values, 2 for dropping highest values
	let rollDropCount = valOf('roll-drop-count');
	//How many results to drop according to the rollDrop variable

	singleStat();


};



advancedRollSubmit.addEventListener('click', advancedRoll, false);
