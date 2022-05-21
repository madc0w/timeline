const minYear = 1700;
const maxYear = 2020;
const defaultAge = 60;
const maxAge = 100;
const minAge = 10;

const timelineBars = [];
const initLifespanBarPos = {};

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
					timelineBars.push({
						pos:
							parseInt(getComputedStyle(lifespanBar).left) /
							innerWidth,
						lifespan: parseInt(
							document.getElementById('data-slider').value
						),
						data: selectedData,
					});
					setScore();
					setData();
					break;
				}
			}
			drawTimeline();
			lifespanBar.style.left = initLifespanBarPos.x;
			lifespanBar.style.top = initLifespanBarPos.y;
		}
	});
	document.addEventListener('mousemove', (e) => {
		if (offset) {
			lifespanBar.style.left = `${e.clientX - offset.left}px`;
			lifespanBar.style.top = `${e.clientY - offset.top}px`;
			// console.log(lifespanBar.style.top);
		}
	});
	onResize();
	document.getElementById('hi-score-value').innerHTML = hiScore().toFixed(0);
}

function onResize() {
	const width = `${(innerWidth * maxAge) / (maxYear - minYear)}px`;
	// console.log('width', width);
	document.getElementById('data-slider-container').style.width = width;
	// document.getElementById('lifespan-bar').style.width = width;
	document.getElementById('data-slider').style.width = width;
	setAgeValue();
	drawTimeline();
	const lifespanBar = document.getElementById('lifespan-bar');
	initLifespanBarPos.x = getComputedStyle(lifespanBar).left;
	initLifespanBarPos.y = getComputedStyle(lifespanBar).top;

	document.getElementById('score-panel').style.left = `${innerWidth - 120}px`;
}

function setData() {
	if (timelineBars.length >= data.length) {
		document.getElementById('input-panel').innerHTML =
			'<div id="game-over">GAME OVER</div>';
	} else {
		do {
			selectedData = data[Math.floor(Math.random() * data.length)];
		} while (timelineBars.find((t) => t.data.name == selectedData.name));

		document.getElementById('data-image').src = `img/${selectedData.img}`;
		document.getElementById('data-slider').value = defaultAge;
		setAgeValue();
		document.getElementById('data-name').innerHTML = selectedData.name;
	}
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
	canvas.height = 400;
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
	for (let year = minYear; year <= maxYear; year += 20) {
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

	const yOffsets = [-16, 8];
	for (let j = 0; j <= data.length / 2; j++) {
		yOffsets.push(yOffsets[yOffsets.length - 2] - 20);
		yOffsets.push(yOffsets[yOffsets.length - 2] + 20);
	}
	let i = 0;
	for (const timelineBar of timelineBars) {
		const yOffset = yOffsets[i++];
		{
			ctx.fillStyle = '#222';
			const x =
				(canvas.width * (timelineBar.data.born - minYear)) /
					(maxYear - minYear) -
				4;
			const width =
				(canvas.width *
					(timelineBar.data.died - timelineBar.data.born) -
					minYear) /
				(maxYear - minYear);
			ctx.fillRect(x, canvas.height / 2 + yOffset - 3, width, 16);
		}
		{
			ctx.fillStyle = '#22f';
			const x = canvas.width * timelineBar.pos - 4;
			const y = canvas.height / 2 + yOffset;
			const width =
				(canvas.width * timelineBar.lifespan) / (maxYear - minYear);
			ctx.fillRect(x, y, width, 10);

			const textX =
				(canvas.width * (timelineBar.data.born - minYear)) /
					(maxYear - minYear) -
				4;
			ctx.fillStyle = '#fff';
			ctx.font = '14px Lato';

			// Use a span to render html entities
			const textContainer = document.createElement('span');
			textContainer.innerHTML = timelineBar.data.name;
			ctx.fillText(
				`${textContainer.textContent} (${timelineBar.data.born} - ${timelineBar.data.died})`,
				textX + 4,
				y + 10
			);
		}
	}
}

function setScore() {
	let score = 0;
	for (const timelineBar of timelineBars) {
		const setBorn = minYear + timelineBar.pos * (maxYear - minYear);
		const setDied = setBorn + timelineBar.lifespan;
		// console.log(' timelineBar', timelineBar);
		// console.log('set ', setBorn, setDied);
		if (
			setBorn < timelineBar.data.died &&
			setDied > timelineBar.data.born
		) {
			let overlap;
			if (setBorn < timelineBar.data.born) {
				if (setDied > timelineBar.data.died) {
					overlap =
						(timelineBar.data.died - timelineBar.data.born) /
						(setDied - setBorn);
				} else {
					overlap =
						(setDied - timelineBar.data.born) /
						(timelineBar.data.died - setBorn);
				}
			} else {
				if (setDied > timelineBar.data.died) {
					overlap =
						(timelineBar.data.died - setBorn) /
						(setDied - timelineBar.data.born);
				} else {
					overlap =
						(setDied - setBorn) /
						(timelineBar.data.died - timelineBar.data.born);
				}
			}

			// console.log(`overlap ${timelineBar.data.name}`, overlap);
			score += overlap;
		}
	}
	// score /= timelineBars.length;
	score *= 100;

	if (score > hiScore()) {
		localStorage.hiScore = score;
	}
	document.getElementById('score-value').innerHTML = score.toFixed(0);
	document.getElementById('hi-score-value').innerHTML = hiScore().toFixed(0);
}

function hiScore() {
	return localStorage.hiScore == null ? 0 : parseFloat(localStorage.hiScore);
}
