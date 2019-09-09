
let rollButtons = document.getElementsByClassName('roll-button');

function roll(e) {
	let max = Number(e.target.innerHTML.slice(1));
	console.log(`You're rolling a d${max},`);
	let result = Math.floor(Math.random() * Math.floor(max)+1);
	console.log(`the result is: ${result}!`);
	let resultBox = document.getElementsByClassName('result-box');
	e.target.nextElementSibling.innerHTML = `<i class="basic-result">${result}</i>`;
	
};

function reset(e) {
	e.target.nextElementSibling.innerHTML = '<i class="fas fa-dice-d20"></i>';
};

for (var i = 0 ; i < rollButtons.length; i++) {
   rollButtons[i].addEventListener('mouseup' , roll , false );
   rollButtons[i].addEventListener('mousedown', reset, false);
};