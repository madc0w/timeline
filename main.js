const minYear = 1700;
const maxYear = 2020;
const defaultAge = 60;
const maxAge = 100;
const minAge = 10;

function onLoad() {
	setData();

	document.getElementById('data-slider').setAttribute('min', minAge);
	document.getElementById('data-slider').setAttribute('max', maxAge);
	document
		.getElementById('data-slider')
		.addEventListener('input', setAgeValue);
	onResize();
}

function onResize() {
	const width = parseInt(
		getComputedStyle(document.getElementById('timeline')).width
	);
	document.getElementById('data-slider-container').style.width = `${
		(width * maxAge) / (maxYear - minYear)
	}px`;
	drawTimeline();
}

function setData() {
	const selected = data[Math.floor(Math.random() * data.length)];
	document.getElementById('data-image').src = `img/${selected.img}`;
	document.getElementById('data-slider').value = defaultAge;
	setAgeValue();
	document.getElementById('data-name').innerHTML = selected.name;
}

function setAgeValue() {
	const value = document.getElementById('data-slider').value;
	// console.log(value);
	document.getElementById('lifespan-input').style.width = `${
		(value - minAge) / ((maxAge - minAge) / maxAge)
	}%`;
	document.getElementById('data-age').innerHTML = value;
}

function drawTimeline() {
	const canvas = document.getElementById('timeline');
	canvas.width = innerWidth;
	// console.log('width', canvas.width);
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.style = '#000';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.stroke();

	ctx.lineWidth = 1;
	ctx.font = '12px Lato';
	ctx.fillStyle = '#000';
	for (let year = minYear; year <= maxYear; year += 50) {
		ctx.beginPath();
		// console.log((year - minYear) / (maxYear - minYear));
		const x = (canvas.width * (year - minYear)) / (maxYear - minYear);
		ctx.moveTo(x, canvas.height / 2 - 10);
		ctx.lineTo(x, canvas.height / 2 + 10);
		ctx.stroke();

		ctx.fillText(year, x, canvas.height / 2 + 20);
	}
}
