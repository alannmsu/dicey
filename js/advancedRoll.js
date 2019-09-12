import finalCut from './finalCut.js';
import valOf from './valOf.js';


//ADVANCED ROLL LOGIC
let advancedRollSubmit = document.getElementById('advanced-roll-submit');

//The onClick handler for advanced rolls
let advancedRoll = () => {
	var final = finalCut().join(', ');
	let advancedResults = document.getElementById('advanced-results');
	advancedResults.innerHTML = final;
};



advancedRollSubmit.addEventListener('click', advancedRoll, false);
