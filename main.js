const minYear = 1700;
const maxYear = 2020;
const defaultAge = 60;
const maxAge = 100;
const minAge = 10;

const timelineBars = [];

let offset, selectedData;

function onLoad() {
	setData();

	document.getElementById('data-slider').setAttribute('min', minAge);
	document.getElementById('data-slider').setAttribute('max', maxAge);
	document
		.getElementById('data-slider')
		.addEventListener('input', setAgeValue);

	const lifespanBar = document.getElementById('lifespan-bar');

	lifespanBar.style.zIndex = 1000;
	lifespanBar.ondragstart = () => {
		return false;
	};
	lifespanBar.addEventListener('mousedown', (e) => {
		// console.log('mousedown');
		const top = parseInt(getComputedStyle(lifespanBar).top);
		const left = parseInt(getComputedStyle(lifespanBar).left);
		offset = {
			top: e.clientY - top,
			left: e.clientX - left,
		};
	});
	document.addEventListener('mouseup', (e) => {
		// console.log('mouseup');
		if (offset) {
			offset = null;

			for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
				if (el.id == 'timeline') {
					timelineBars.push(selectedData);
				}
			}
		}
	});
	document.addEventListener('mousedrag', (e) => {
		console.log('mousedrag');
		offset = null;
	});
	document.addEventListener('mousemove', (e) => {
		if (offset) {
			lifespanBar.style.top = `${e.clientY - offset.top}px`;
			lifespanBar.style.left = `${e.clientX - offset.left}px`;
			// console.log(lifespanBar.style.top);
		}
	});
	onResize();
}

function onResize() {
	const width = `${(innerWidth * maxAge) / (maxYear - minYear)}px`;
	// console.log('width', width);
	document.getElementById('data-slider-container').style.width = width;
	// document.getElementById('lifespan-bar').style.width = width;
	document.getElementById('data-slider').style.width = width;
	setAgeValue();

	drawTimeline();
}

function setData() {
	selectedData = data[Math.floor(Math.random() * data.length)];
	document.getElementById('data-image').src = `img/${selectedData.img}`;
	document.getElementById('data-slider').value = defaultAge;
	setAgeValue();
	document.getElementById('data-name').innerHTML = selectedData.name;
}

function setAgeValue() {
	const value = document.getElementById('data-slider').value;
	// console.log(value);
	const width = (innerWidth * maxAge) / (maxYear - minYear);
	document.getElementById('lifespan-bar').style.width = `${
		(width * (value - minAge)) / (maxAge - minAge)
	}px`;
	// console.log('width', width);
	// console.log(
	// 	'(value - minAge)) / ((maxAge - minAge) / maxAge)',
	// 	(value - minAge) / (maxAge - minAge)
	// );
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

	ctx.font = '12px Lato';
	for (let year = minYear; year <= maxYear; year += 50) {
		const x = (canvas.width * (year - minYear)) / (maxYear - minYear);
		ctx.lineWidth = 3;
		ctx.strokeStyle = '#ddd';
		ctx.beginPath();
		// console.log((year - minYear) / (maxYear - minYear));
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvas.height);
		ctx.stroke();

		ctx.lineWidth = 1;
		ctx.strokeStyle = '#000';
		ctx.beginPath();
		// console.log((year - minYear) / (maxYear - minYear));
		ctx.moveTo(x, canvas.height / 2 - 10);
		ctx.lineTo(x, canvas.height / 2 + 10);
		ctx.stroke();

		ctx.fillStyle = '#000';
		ctx.fillText(year, x, canvas.height / 2 + 20);
	}

	for (const timelineBar of timelineBars) {
	}
}
