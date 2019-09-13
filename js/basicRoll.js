
let rollButtons = document.getElementsByClassName('roll-button');

function basicRoll(e) {
	let max = Number(e.target.innerHTML.slice(1));
	console.log(`You're rolling a d${max},`);
	let result = Math.floor(Math.random() * Math.floor(max)+1);
	console.log(`the result is: ${result}!`);
	let resultBox = document.getElementsByClassName('result-box');
	e.target.nextElementSibling.innerHTML = `<h3>${result}</h3>`;
	
};

function reset(e) {
	e.target.nextElementSibling.innerHTML = '<h3 class="col fas fa-dice-d20 fa-2x"></h3>';
};

for (var i = 0 ; i < rollButtons.length; i++) {
   rollButtons[i].addEventListener('mouseup' , basicRoll , false );
   rollButtons[i].addEventListener('mousedown', reset, false);
};

