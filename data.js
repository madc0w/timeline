const data = [
	{
		name: 'Richard Feynman',
		born: 1918,
		died: 1988,
		img: 'richard-feynman.jpg',
		category: 'science',
	},
	{
		name: 'Leonhard Euler',
		born: 1707,
		died: 1783,
		img: 'Leonhard_Euler.jpg',
		category: 'science',
	},
	{
		name: 'Carl Friedrich Gauss',
		born: 1777,
		died: 1855,
		img: 'Carl_Friedrich_Gauss.jpg',
		category: 'science',
	},
	{
		name: 'Fritz Haber',
		born: 1868,
		died: 1934,
		img: 'Fritz_Haber.png',
		category: 'science',
	},
	{
		name: 'Carl Sagan',
		born: 1934,
		died: 1996,
		img: 'Carl_Sagan.png',
		category: 'science',
	},
	{
		name: 'George Washington',
		born: 1732,
		died: 1799,
		img: 'George_Washington.jpg',
		category: 'politics',
	},
	{
		name: 'Thomas Jefferson',
		born: 1743,
		died: 1826,
		img: 'Thomas_Jefferson.jpg',
		category: 'politics',
	},
	{
		name: 'Thomas Paine',
		born: 1737,
		died: 1809,
		img: 'Thomas_Paine.jpg',
		category: 'politics',
	},
	{
		name: 'Albert Einstein',
		born: 1879,
		died: 1955,
		img: 'Albert Einstein.jpg',
		category: 'science',
	},
	{
		name: 'Benjamin Franklin',
		born: 1706,
		died: 1790,
		img: 'Benjamin Franklin.jpg',
		category: 'politics',
	},
	{
		name: 'Kurt G&ouml;del',
		born: 1906,
		died: 1978,
		img: 'Kurt_godel.jpg',
		category: 'science',
	},
	{
		name: 'Franz Kafka',
		born: 1883,
		died: 1924,
		img: 'Franz_Kafka.jpg',
		category: 'writers',
	},
	{
		name: 'Amelia Earhart',
		born: 1897,
		died: 1939,
		img: 'Amelia_Earhart.jpg',
		category: 'explorers',
	},
	{
		name: 'Charles Lindbergh',
		born: 1902,
		died: 1974,
		img: 'Charles Lindbergh.jpg',
		category: 'explorers',
	},
	{
		name: 'Sir Edmund Hillary',
		born: 1919,
		died: 2008,
		img: 'Edmund_Hillary.jpg',
		category: 'explorers',
	},
	{
		name: 'Thor Heyerdahl',
		born: 1914,
		died: 2002,
		img: 'ThorHeyerdahl.jpg',
		category: 'explorers',
	},
	{
		name: 'David Livingstone',
		born: 1813,
		died: 1873,
		img: 'david-livingstone.jpg',
		category: 'explorers',
	},
	{
		name: 'Charlie Chaplin',
		born: 1889,
		died: 1977,
		img: 'Charlie_Chaplin.jpg',
		category: 'arts',
	},
	{
		name: 'Cary Grant',
		born: 1904,
		died: 1986,
		img: 'Cary Grant.jpg',
		category: 'arts',
	},
	{
		name: 'Mahatma Gandhi',
		born: 1869,
		died: 1948,
		img: 'mahatma-gandhi.jpg',
		category: 'politics',
	},
	{
		name: 'Ginger Rogers',
		born: 1911,
		died: 1995,
		img: 'Ginger_Rogers.jpg',
		category: 'arts',
	},
	{
		name: 'Fred Astaire',
		born: 1899,
		died: 1987,
		img: 'Fred Astaire.jpg',
		category: 'arts',
	},
	{
		name: 'Groucho Marx',
		born: 1890,
		died: 1977,
		img: 'Groucho_Marx.jpg',
		category: 'arts',
	},
	{
		name: 'Karl Marx',
		born: 1818,
		died: 1883,
		img: 'Karl_Marx.jpg',
		category: 'politics',
	},
	{
		name: 'Vladimir Lenin',
		born: 1870,
		died: 1924,
		img: 'vladimir-lenin.jpg',
		category: 'politics',
	},
	{
		name: 'Catherine the Great (Catherine II)',
		born: 1729,
		died: 1796,
		img: 'catherine-the-great.jpg',
		category: 'politics',
	},
	{
		name: 'Nikolai II Alexandrovich Romanov',
		born: 1868,
		died: 1918,
		img: 'Nikolai II Alexandrovich Romanov.jpg',
		category: 'politics',
	},
	{
		name: 'Anne Frank',
		born: 1929,
		died: 1945,
		img: 'Anne_Frank.jpg',
		category: 'arts',
	},
	{
		name: 'Nikola Tesla',
		born: 1856,
		died: 1943,
		img: 'Nikola Tesla.jpeg',
		category: 'science',
	},
	{
		name: 'Igor Stravinsky',
		born: 1882,
		died: 1971,
		img: 'Igor_Stravinsky.jpg',
		category: 'arts',
	},
	{
		name: 'Ernest Hemingway',
		born: 1899,
		died: 1961,
		img: 'hemingway-800x800.jpg',
		category: 'arts',
	},
	{
		name: 'Tennessee Williams',
		born: 1911,
		died: 1983,
		img: 'Tennessee_Williams.jpgs',
		category: 'arts',
	},
	{
		name: 'George Orwell',
		born: 1903,
		died: 1950,
		img: 'George_Orwell.jpg',
		category: 'arts',
	},
	{
		name: 'Jane Austen',
		born: 1775,
		died: 1817,
		img: 'Jane-Austen.jpg',
		category: 'arts',
	},
	{
		name: 'Franklin D. Roosevelt',
		born: 1882,
		died: 1945,
		img: 'FDR.jpg',
		category: 'politics',
	},
	{
		name: 'John F. Kennedy',
		born: 1917,
		died: 1963,
		img: 'JFK.jpg',
		category: 'politics',
	},
	{
		name: 'Abraham Lincoln',
		born: 1809,
		died: 1865,
		img: 'Abraham_Lincoln.jpg',
		category: 'politics',
	},
	{
		name: 'Queen Victoria',
		born: 1819,
		died: 1901,
		img: 'Queen_Victoria.jpg',
		category: 'politics',
	},
	{
		name: 'Napoleon Bonaparte',
		born: 1769,
		died: 1821,
		img: 'Napoleon Bonaparte.jpg',
		category: 'politics',
	},
	{
		name: 'Greta Garbo',
		born: 1905,
		died: 1990,
		img: 'Greta_Garbo.jpg',
		category: 'arts',
	},
	{
		name: 'James Dean',
		born: 1931,
		died: 1955,
		img: 'James_Dean.jpg',
		category: 'arts',
	},
	// {
	// 	name: 'Voltaire (Fran&ccedil;ois-Marie Arouet)',
	// 	born: 1694,
	// 	died: 0,
	// 	img: '',
	// 	category: 'arts',
	// },
	{
		name: 'Pierre-Auguste Renoir',
		born: 1841,
		died: 1919,
		img: 'Pierre_Auguste_Renoir.jpg',
		category: 'arts',
	},
	{
		name: 'Pablo Picasso',
		born: 1881,
		died: 1973,
		img: 'Pablo-Picasso.jpg',
		category: 'arts',
	},
	{
		name: 'Claude Monet',
		born: 1840,
		died: 1926,
		img: 'Claude_Monet.jpg',
		category: 'arts',
	},
	{
		name: 'Claude Debussy',
		born: 1862,
		died: 1918,
		img: 'Claude_Debussy.jpg',
		category: 'arts',
	},
	{
		name: 'Audrey Hepburn',
		born: 1929,
		died: 1993,
		img: 'Audrey_Hepburn.jpg',
		category: 'arts',
	},
	{
		name: 'Louis XVI',
		born: 1754,
		died: 1793,
		img: 'louis-xvi.jpg',
		category: 'politics',
	},
	{
		name: 'Jonas Salk',
		born: 1914,
		died: 1995,
		img: 'Jonas_Salk.jpg',
		category: 'science',
	},
	{
		name: 'Alan Turing',
		born: 1912,
		died: 1954,
		img: 'Alan_Turing.jpg',
		category: 'science',
	},
	{
		name: 'Marcel Proust',
		born: 1871,
		died: 1922,
		img: 'Marcel_Proust.jpg',
		category: 'arts',
	},
	{
		name: 'Henri Poincar&eacute;',
		born: 1854,
		died: 1912,
		img: 'Henri_Poincare.png',
		category: 'science',
	},
	{
		name: 'Henry David Thoreau',
		born: 1817,
		died: 1862,
		img: 'Henry_David_Thoreau.jpg',
		category: 'arts',
	},
	{
		name: 'Johann Wolfgang von Goethe',
		born: 1749,
		died: 1832,
		img: 'Goethe.jpg',
		category: 'science',
	},
	{
		name: 'Bertrand Russell',
		born: 1872,
		died: 1970,
		img: 'Bertrand_Russell.jpg',
		category: 'science',
	},
	{
		name: 'Sigmund Freud',
		born: 1856,
		died: 1939,
		img: 'Sigmund-Freud.jpg',
		category: 'science',
	},
	{
		name: 'Marie Curie',
		born: 1867,
		died: 1934,
		img: 'Marie_Curie.jpg',
		category: 'arts',
	},
	{
		name: 'Andrew Jackson',
		born: 1767,
		died: 1845,
		img: 'andrew_jackson.jpg',
		category: 'politics',
	},
	{
		name: 'Margaret Thatcher',
		born: 1925,
		died: 2013,
		img: 'Margaret Thatcher.jpg',
		category: 'politics',
	},
	{
		name: 'Joseph Stalin',
		born: 1878,
		died: 1953,
		img: 'Stalin.jpg',
		category: 'politics',
	},
	{
		name: 'Adolf Hitler',
		born: 1889,
		died: 1945,
		img: 'Hitler.jpg',
		category: 'politics',
	},
	{
		name: 'Mao Zedong',
		born: 1893,
		died: 1976,
		img: 'Mao_Zedong.jpg',
		category: 'politics',
	},
	{
		name: 'Hirohito (Emperor Sh&omacr;wa)',
		born: 1901,
		died: 1989,
		img: 'Hirohito.jpg',
		category: 'politics',
	},
	{
		name: 'Sim&oacute;n Bol&iacute;var',
		born: 1783,
		died: 1830,
		img: 'simon-bolivar.jpg',
		category: 'politics',
	},
	{
		name: 'Charles de Gaulle',
		born: 1890,
		died: 1970,
		img: 'De_Gaulle.jpg',
		category: 'politics',
	},
	{
		name: 'Ulysses S. Grant',
		born: 1822,
		died: 1885,
		img: 'Ulysses_S._Grant.jpg',
		category: 'politics',
	},
	{
		name: 'John von Neumann',
		born: 1903,
		died: 1957,
		img: 'JohnvonNeumann.jpg',
		category: 'science',
	},
	{
		name: 'Thomas Edison',
		born: 1847,
		died: 1931,
		img: 'Thomas_Edison.jpg',
		category: 'science',
	},
];
