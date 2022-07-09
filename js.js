const ball = document.querySelector('img');
const ask = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = [
	'Nie wiem, ale się dowiem.',
	'Z całą pewnością moge powiedzieć, że nie mam pojęcia.',
	'Wierze że tak.',
	'Kiedyś na pewno',
	'Raczej nie...',
	'Pewnie, że tak',
	'Przemyśle to...',
];

const checkMark = () => {
	const re = /\?/g;
	if(re.test(ask.value)) {
		setTimeout(showAnswer, 1500);
		error.textContent = ''
		
	} else {
		error.textContent = 'Na końcu pytania musi być znak znapytania (?)'
		ball.classList.remove('shake-animation')
	}
};

const animationStart = () => {
	ball.classList.toggle('shake-animation');

	if(ask.value == '') {
		answer.textContent = ''
		question();
	}else if (ask.value != ''){
		checkMark();

	}else  {
		error.textContent = ''
		setTimeout(showAnswer, 1500);
		
		
	}
    
};

const question = () => {
	if (ask.value == '') {
		error.textContent = 'Zadaj pytanie';
		ball.classList.remove('shake-animation')
	} else {
		checkMark()
		error.textContent = '';
		
	}
};

const showAnswer = () => {
	if (animationStart) {
	    let a = Math.floor(Math.random() * answers.length)
         answer.textContent = answers[a]
		
	} else {
        answer.textContent = ''
		
    }
};


ball.addEventListener('click', animationStart);
