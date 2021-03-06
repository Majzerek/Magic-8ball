const ball = document.querySelector('img');
const ask = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = [
	"I don't know, but I'll find out.",
	'I can definitely say that I have no idea.',
	'I believe so.',
	'Some day for sure',
	"I don't think so...",
	'Sure',
	'Think over it...',
	'Better let it go ',
];

const checkMark = () => {
	const re = /\?/g;
	if (re.test(ask.value)) {
		setTimeout(showAnswer, 1000);
		error.textContent = '';
	} else {
		error.textContent =
			'There must be a question mark at the end of the question (?)';
		ball.classList.remove('shake-animation');
	}
};

const animationStart = () => {
	ball.classList.add('shake-animation');

	if (ask.value == '') {
		answer.textContent = '';
		setTimeout(question, 1000);
	} else if (ask.value != '') {
		setTimeout(checkMark, 1000);

	} else {
		error.textContent = '';
		
	}
};

const question = () => {
	if (ask.value == '') {
		error.textContent = 'Ask question';
	} else {
		checkMark();
		error.textContent = '';
	}
	ball.classList.remove('shake-animation');
};

const showAnswer = () => {
	if (animationStart) {
		let a = Math.floor(Math.random() * answers.length);
		answer.innerHTML = `<span>Answer:</span>${answers[a]}`;
	} else {
		answer.textContent = '';
	}
	ball.classList.remove('shake-animation');
	
};
const enterCheck = (e) => {
if (e.key === 'Enter') {
	animationStart()
	}
}
		ball.addEventListener('click', animationStart);
		ask.addEventListener('keyup', enterCheck);
