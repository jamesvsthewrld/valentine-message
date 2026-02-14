const messages = [
	{
		text: 'I\'m still learning',
		subtext: 'how to stand on my own feet;'
	},
	{
		text: '',
		subtext: 'I don\'t have much in my pockets, and sometimes not much certainty in my plans'
	},
	{
		text: '',
		subtext: 'I can\'t promise fancy dinners or roses wrapped in silk'
	},
	{
		text: '',
		subtext: 'What I have is time, and hands that wants to care for you'
	},
	{
		text: '',
		subtext: 'I have patience to listen, even when the world feels too loud'
	},
	{
		text: '',
		subtext: 'I have effort to try again, even when I fail the first time'
	},
	{
		text: '',
		subtext: 'I\'ll cook for you when I can, even if it\'s simple'
	},
	{
		text: '',
		subtext: 'I\'ll fold paper into flowers, and pretend they grew just for you'
	},
	{
		text: '',
		subtext: 'I\'ll sit beside you in the dark, until your light finds its way back'
	},
	{
		text: '',
		subtext: 'I\'m not perfect, and I\'m not finished becoming who I want to be'
	},
	{
		text: '',
		subtext: 'But every day, I choose to grow, with you in my heart'
	},
	{
		text: '',
		subtext: 'Every dream I build, has your name written quietly inside it'
	},
	{
		text: '',
		subtext: 'Every step forward, I take hoping you\'re still beside me'
	},
	{
		text: '',
		subtext: 'One day, I\'ll give you more than promises'
	},
	{
		text: 'Until then,',
		subtext: 'I give you my love, my time, and my whole heart.'
	},
	{
		image: 'image/code.jpg',
		imageAlt: 'paper flowers',
		}

];

let currentIndex = 0;
let isTransitioning = false;

const messageDisplay = document.getElementById('messageDisplay');
const messageText = document.getElementById('messageText');
const messageSubtext = document.getElementById('messageSubtext');
const progressFill = document.getElementById('progressFill');
const counter = document.getElementById('counter');
const bottomMessage = document.getElementById('bottomMessage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateDisplay() {
	const currentMessage = messages[currentIndex];
	const progress = ((currentIndex + 1) / messages.length) * 100;

	messageText.textContent = currentMessage.text;
	// Render an image if present; otherwise show the subtext
	messageSubtext.innerHTML = '';
	if (currentMessage.image) {
		const img = document.createElement('img');
		img.src = currentMessage.image;
		img.alt = currentMessage.imageAlt || '';
		img.className = 'message-image';
		messageSubtext.appendChild(img);
	} else {
		messageSubtext.textContent = currentMessage.subtext;
	}
	progressFill.style.width = progress + '%';
	counter.textContent = (currentIndex + 1) + ' / ' + messages.length;

	if (currentIndex === messages.length - 1) {
		bottomMessage.textContent = 'with all my love';
		bottomMessage.classList.add('final');
	} else {
		bottomMessage.textContent = 'use arrows to continue';
		bottomMessage.classList.remove('final');
	}

	// Update button states
	prevBtn.disabled = currentIndex === 0;
	nextBtn.disabled = currentIndex === messages.length - 1;
}

function goToNext() {
	if (currentIndex < messages.length - 1 && !isTransitioning) {
		isTransitioning = true;
		messageDisplay.classList.remove('fade-in');
		messageDisplay.classList.add('fade-out');

		setTimeout(() => {
			currentIndex++;
			updateDisplay();
			messageDisplay.classList.remove('fade-out');
			messageDisplay.classList.add('fade-in');
			isTransitioning = false;
		}, 300);
	}
}

function goToPrev() {
	if (currentIndex > 0 && !isTransitioning) {
		isTransitioning = true;
		messageDisplay.classList.remove('fade-in');
		messageDisplay.classList.add('fade-out');

		setTimeout(() => {
			currentIndex--;
			updateDisplay();
			messageDisplay.classList.remove('fade-out');
			messageDisplay.classList.add('fade-in');
			isTransitioning = false;
		}, 300);
	}
}

prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowLeft') goToPrev();
	if (e.key === 'ArrowRight') goToNext();
});

// Initialize
updateDisplay();

