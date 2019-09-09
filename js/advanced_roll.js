
let advancedRollSubmit = document.getElementById('advanced-roll-submit');

let valOf = (term) => {
	return document.getElementById(term).value;
};

let rollDice = () => {
	let numOfDie = valOf('num-of-die');
	let sidesOfDie = valOf('sides-of-die');
	console.log(numOfDie);
	console.log(sidesOfDie);
	// let result = Math.floor(Math.random() * Math.floor(sidesOfDie)+1);
	let i=1; 
	let result = 0;
	for(i = 0; i < numOfDie; i++) {
		roll = Math.floor(Math.random() * Math.floor(sidesOfDie)+1);
		console.log(`This is roll number ${i+1}: ${roll}!`)
		result += roll;
	};
	console.log(result);
};










advancedRollSubmit.addEventListener('click', rollDice, false);
