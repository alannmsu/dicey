import finalCut from './finalCut.js';
import valOf from './valOf.js';


//ADVANCED ROLL LOGIC
let advancedRollSubmit = document.getElementById('advanced-roll-submit');
//The onClick handler for advanced rolls
let advancedRoll = () => {

	var form = document.getElementById('advanced-roll');
	var isValidForm = form.checkValidity();
	var sidesOfDie = valOf('sides-of-die');
	var rerollDie = valOf('reroll-die');

	var advancedResults = document.getElementById('advanced-results');

	if(isValidForm == true) {

		if (rerollDie == 1 && sidesOfDie < 2) {
			var final = 'ROLLING AN INFINITE LOOP';
		} else if (rerollDie == 2 && sidesOfDie < 3) {
			var final = 'ROLLING AN INFINITE LOOP';
		} else {
			var final = finalCut().join(', ');
		}
		advancedResults.innerHTML = final;
	} else {
		console.log('error');
	}
};



advancedRollSubmit.addEventListener('click', advancedRoll, false);
