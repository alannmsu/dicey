import finalCut from './finalCut.js';
import valOf from './valOf.js';


//ADVANCED ROLL LOGIC
let advancedRollSubmit = document.getElementById('advanced-roll-submit');

//The onClick handler for advanced rolls
let advancedRoll = () => {

	var form = document.getElementById('advanced-roll');
	var isValidForm = form.checkValidity();

	if(isValidForm == true) {
		var final = finalCut().join(', ');
	let advancedResults = document.getElementById('advanced-results');
	advancedResults.innerHTML = final;
	} else {
		console.log('error');
	}

};



advancedRollSubmit.addEventListener('click', advancedRoll, false);
