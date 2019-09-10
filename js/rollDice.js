const rollDice = (numOfDie, sidesOfDie) => {
	let i=1; 
	let result = 0;
	for(i = 0; i < numOfDie; i++) {
		roll = Math.floor(Math.random() * Math.floor(sidesOfDie)+1);
		console.log(`This is roll number ${i+1}: ${roll}!`)
		result += roll;
	};
	console.log(result);
}

export default rollDice;