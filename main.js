const minYear = 1200;
const maxYear = 2020;
const defaultAge = 60;
const maxAge = 100;
const minAge = 10;
const maxGameLength = 8;

let timelineBars = [];
let initLifespanBarPos = {};
let offset, selectedData, selectedCategory;

function onLoad() {
	selectedCategory = new URL(location.href).searchParams.get('category');
	setData();

	document.getElementById('data-slider').setAttribute('min', minAge);
	document.getElementById('data-slider').setAttribute('max', maxAge);
	document.getElementById('data-slider').addEventListener('input', setAgeValue);

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

			let isTimelineDrop;
			for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
				if (el.id == 'timeline') {
					timelineBars.push({
						pos: parseInt(getComputedStyle(lifespanBar).left) / innerWidth,
						lifespan: parseInt(document.getElementById('data-slider').value),
						data: selectedData,
					});
					setScore();
					setData();
					isTimelineDrop = true;
					break;
				}
			}
			drawTimeline();
			if (isTimelineDrop) {
				lifespanBar.style.left = initLifespanBarPos.x;
				lifespanBar.style.top = initLifespanBarPos.y;
			} else {
				$('#lifespan-bar').animate({
					left: initLifespanBarPos.x,
					top: initLifespanBarPos.y,
				});
			}
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

	const categories = [];
	for (const d of data) {
		if (!categories.includes(d.category)) {
			categories.push(d.category);
		}
	}
	categories.sort();
	categories.unshift('all');
	const categorySelect = document.getElementById('category-select');
	for (const c of categories) {
		let label = c[0].toUpperCase() + c.substring(1);
		let n;
		if (c == 'all') {
			n = data.length;
		} else {
			n = data.filter((d) => d.category == c).length;
		}
		label += ` (${n})`;
		categorySelect.options[categorySelect.options.length] = new Option(
			label,
			c
		);
	}

	if (selectedCategory && selectedCategory != 'all') {
		for (let i = 0; i < categorySelect.options.length; i++) {
			// categorySelect.options[i].defaultSelected =
			// console.log(
			// 	'categorySelect.options[i].value',
			// 	categorySelect.options[i].value
			// );
			if (categorySelect.options[i].value == selectedCategory) {
				categorySelect.options[i].selected = true;
			}
		}
	}
}

function onResize() {
	const width = `${(innerWidth * maxAge) / (maxYear - minYear)}px`;
	// console.log('width', width);
	const dataSliderContainer = document.getElementById('data-slider-container');
	if (dataSliderContainer) {
		dataSliderContainer.style.width = width;
	}
	// document.getElementById('lifespan-bar').style.width = width;
	const dataSlider = document.getElementById('data-slider');
	if (dataSlider) {
		dataSlider.style.width = width;
	}

	setAgeValue();
	drawTimeline();
	const lifespanBar = document.getElementById('lifespan-bar');
	if (lifespanBar) {
		initLifespanBarPos.x = getComputedStyle(lifespanBar).left;
		initLifespanBarPos.y = getComputedStyle(lifespanBar).top;
	}

	document.getElementById('score-panel').style.left = `${innerWidth - 120}px`;
}

function setData() {
	const filteredData = data.filter(
		(d) => !selectedCategory || d.category == selectedCategory
	);
	if (timelineBars.length >= Math.min(filteredData.length, maxGameLength)) {
		document.getElementById('input-panel').innerHTML =
			'<div id="game-over">GAME OVER<div id="play-again" onClick="reset()">Play Again</div></div>';
	} else {
		do {
			selectedData =
				filteredData[Math.floor(Math.random() * filteredData.length)];
		} while (timelineBars.find((t) => t.data.name == selectedData.name));

		// document.getElementById('data-image').src = `img/${selectedData.img}`;
		document.getElementById('data-slider').value = defaultAge;
		setAgeValue();
		document.getElementById('data-name').firstChild.href =
			selectedData.link ||
			'https://en.wikipedia.org/wiki/' + selectedData.name.replace(/\s/g, '_');
		document.getElementById('data-name').firstChild.innerHTML =
			selectedData.name;
		document.getElementById('data-category').innerHTML = selectedData.category;
	}
}

function setAgeValue() {
	const dataSlider = document.getElementById('data-slider');
	if (dataSlider) {
		const value = dataSlider.value;
		// console.log(value);
		// const canvas = document.getElementById('timeline');
		const width = (innerWidth * value) / (maxYear - minYear);
		document.getElementById('lifespan-bar').style.width = `${width}px`;
		// console.log('width', width);
		// console.log(
		// 	'(value - minAge)) / ((maxAge - minAge) / maxAge)',
		// 	(value - minAge) / (maxAge - minAge)
		// );
		document.getElementById('data-age').innerHTML = value;
	}
}

function drawTimeline() {
	const canvas = document.getElementById('timeline');
	canvas.height = 240;
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
		let x = (canvas.width * (year - minYear)) / (maxYear - minYear);
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

		if (canvas.width > 800) {
			const x2 = (canvas.width * (year + 10 - minYear)) / (maxYear - minYear);
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#000';
			ctx.beginPath();
			// console.log((year - minYear) / (maxYear - minYear));
			ctx.moveTo(x2, canvas.height / 2 - 6);
			ctx.lineTo(x2, canvas.height / 2 + 6);
			ctx.stroke();
		}

		if (year == minYear) {
			x += 14;
		} else if (year == maxYear) {
			x -= 24;
		}
		ctx.fillStyle = '#fff';
		ctx.fillRect(x - 14, canvas.height / 2 + 12, 30, 12);

		ctx.fillStyle = '#000';
		ctx.fillText(year, x - 14, canvas.height / 2 + 22);
	}

	const yOffsets = [-16, 28];
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
				(maxYear - minYear);
			const width =
				(canvas.width * (timelineBar.data.died - timelineBar.data.born) -
					minYear) /
					(maxYear - minYear) +
				4;
			ctx.fillRect(x, canvas.height / 2 + yOffset - 3, width, 16);
		}
		{
			ctx.fillStyle = '#22f';
			const x = canvas.width * timelineBar.pos - 4;
			const y = canvas.height / 2 + yOffset;
			const width = (canvas.width * timelineBar.lifespan) / (maxYear - minYear);
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
	let i = 0;
	for (const timelineBar of timelineBars) {
		const setBorn = minYear + timelineBar.pos * (maxYear - minYear);
		const setDied = setBorn + timelineBar.lifespan;
		// console.log(' timelineBar', timelineBar);
		// console.log('set ', setBorn, setDied);
		let overlap = 0;
		if (setBorn < timelineBar.data.died && setDied > timelineBar.data.born) {
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
		i++;
		if (i == timelineBars.length) {
			let html = '<div id="score-feedback-text">';
			if (overlap == 0) {
				html += 'No points for you!';
			} else if (overlap < 0.2) {
				html += 'Meh. Do better.';
			} else if (overlap < 0.6) {
				html += 'Pretty close...';
			} else if (overlap < 0.8) {
				html += 'Very nice!';
			} else {
				html += "Damn, you're good!";
			}
			html += '</div>';
			if (overlap > 0) {
				html += `<div id="score-increment">+ ${Math.round(
					overlap * 100
				)}</div>`;
			}
			const scoreFeedbackModal = $('#score-feedback-modal');
			scoreFeedbackModal.html(html);
			scoreFeedbackModal.removeClass('hidden');
			scoreFeedbackModal.fadeIn();
			setTimeout(() => {
				scoreFeedbackModal.fadeOut();
			}, 2000);
		}
	}
	// score /= timelineBars.length;
	score *= 100;

	if (score > hiScore()) {
		localStorage[`hiScore-${selectedCategory || 'all'}`] = score;
	}
	document.getElementById('score-value').innerHTML = score.toFixed(0);
	document.getElementById('hi-score-value').innerHTML = hiScore().toFixed(0);
}

function hiScore() {
	const s = localStorage[`hiScore-${selectedCategory || 'all'}`];
	return s == null ? 0 : parseFloat(s);
}

function reset() {
	location.href = location.href;
}

function setCategory() {
	const category = document.getElementById('category-select').value;
	// console.log(category);
	const url = new URL(location.href);
	if (category == 'all') {
		url.searchParams.delete('category');
	} else {
		url.searchParams.set('category', category);
	}
	location.href = url.toString();
}

// async function makeSPARQLQuery(endpointUrl, sparqlQuery) {
// 	const settings = {
// 		headers: { Accept: 'application/sparql-results+json' },
// 		data: { query: sparqlQuery },
// 	};
// 	return await $.ajax(endpointUrl, settings);
// }

// async function getWikidata() {
// 	const endpointUrl = 'https://query.wikidata.org/sparql',
// 		sparqlQuery =
// 			'#title: Astronauts\n' +
// 			'select distinct ?item ?itemLabel ?pobLabel ?pobcLabel ?dob ?dod ?itemDescription ?sitelinks where {\n' +
// 			'    ?item wdt:P31 wd:Q5;  # Any instance of a human.\n' +
// 			'          wdt:P106 wd:Q11631;   # Occupation astronaut\n' +
// 			'          wikibase:sitelinks ?sitelinks.\n' +
// 			'    ?item wdt:P19 ?pob;\n' +
// 			'          wdt:P27 ?coc;\n' +
// 			'          wdt:P569 ?dob;\n' +
// 			'          wdt:P570 ?dod.\n' +
// 			'    ?pob  wdt:P17  ?pobc.      \n' +
// 			'  \n' +
// 			'    SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }\n' +
// 			'}\n' +
// 			'ORDER BY ASC(?dob)';

// 	const data = await makeSPARQLQuery(endpointUrl, sparqlQuery);
// 	console.log(data);
// }

// getWikidata();
