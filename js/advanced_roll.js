import rollDice from './rollDice.js';



//ADVANCED ROLL LOGIC
let advancedRollSubmit = document.getElementById('advanced-roll-submit');

//The onClick handler for advanced rolls
let advancedRoll = () => {
	//Saves the values of user input into variables
	let valOf = (term) => {return document.getElementById(term).value;};
	let numOfRolls = valOf('num-of-rolls'); //The total number of results to obtain
	let numOfDie = valOf('num-of-die'); //The number of dice to roll for each result
	let sidesOfDie = valOf('sides-of-die'); //The max value of the die being rolled
	let rerollDie = valOf('reroll-die'); //0 for no rerolls, 1 for rerolling 1s, and 2 for rerolling 2s
	let dieDrop = valOf('die-drop'); //0 for no drop, 1 for dropping lowest values, 2 for dropping highest values
	let dieDropCount = valOf('die-drop-count'); //How many dice to drop according to the dieDrop variable
	let bonus = valOf('bonus'); //0 for subtraction, 1 for addition of bonus
	let bonusCount = valOf('bonus-count'); //Amount of bonus to add or subtract according to bonus variable
	let rollDrop = valOf('roll-drop'); //0 for no drop, 1 for dropping lowest values, 2 for dropping highest values
	let rollDropCount = valOf('roll-drop-count'); //How many results to drop according to the rollDrop variable

	rollDice(numOfDie, sidesOfDie, rerollDie);


};



advancedRollSubmit.addEventListener('click', advancedRoll, false);
