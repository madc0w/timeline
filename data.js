const data = [
	{
		name: 'Richard Feynman',
		born: 1918,
		died: 1988,
		category: 'scientists',
	},
	{
		name: 'Dante Alighieri',
		born: 1265,
		died: 1321,
		category: 'artists',
	},
	{
		name: 'Leonhard Euler',
		born: 1707,
		died: 1783,
		category: 'scientists',
	},
	{
		name: 'Antoine Lavoisier',
		born: 1743,
		died: 1794,
		category: 'scientists',
	},
	{
		name: 'Carl Friedrich Gauss',
		born: 1777,
		died: 1855,
		category: 'scientists',
	},
	{
		name: 'Fritz Haber',
		born: 1868,
		died: 1934,
		category: 'scientists',
	},
	{
		name: 'Carl Sagan',
		born: 1934,
		died: 1996,
		category: 'scientists',
	},
	{
		name: 'James Watt',
		born: 1736,
		died: 1819,
		category: 'scientists',
	},
	{
		name: 'George Washington',
		born: 1732,
		died: 1799,
		category: 'politicians',
	},
	{
		name: 'Thomas Jefferson',
		born: 1743,
		died: 1826,
		category: 'politicians',
	},
	{
		name: 'Thomas Paine',
		born: 1737,
		died: 1809,
		category: 'politicians',
	},
	{
		name: 'Albert Einstein',
		born: 1879,
		died: 1955,
		category: 'scientists',
	},
	{
		name: 'Benjamin Franklin',
		born: 1706,
		died: 1790,
		category: 'politicians',
	},
	{
		name: 'Kurt G&ouml;del',
		born: 1906,
		died: 1978,
		category: 'philosophers',
	},
	{
		name: 'Franz Kafka',
		born: 1883,
		died: 1924,
		category: 'artists',
	},
	{
		name: 'Amelia Earhart',
		born: 1897,
		died: 1939,
		category: 'explorers',
	},
	{
		name: 'Elizabeth I of England',
		born: 1533,
		died: 1603,
		category: 'politicians',
	},
	{
		name: 'Elizabeth II of England',
		born: 1926,
		died: 2022,
		category: 'politicians',
	},
	{
		name: 'Charles Lindbergh',
		born: 1902,
		died: 1974,
		category: 'explorers',
	},
	{
		name: 'Sir Edmund Hillary',
		born: 1919,
		died: 2008,
		category: 'explorers',
	},
	{
		name: 'Thor Heyerdahl',
		born: 1914,
		died: 2002,
		category: 'explorers',
	},
	{
		name: 'David Livingstone',
		born: 1813,
		died: 1873,
		category: 'explorers',
	},
	{
		name: 'Charlie Chaplin',
		born: 1889,
		died: 1977,
		category: 'artists',
	},
	{
		name: 'Cary Grant',
		born: 1904,
		died: 1986,
		category: 'artists',
	},
	{
		name: 'Grace Kelly',
		born: 1929,
		died: 1982,
		category: 'artists',
	},
	{
		name: 'Mahatma Gandhi',
		born: 1869,
		died: 1948,
		category: 'politicians',
	},
	{
		name: 'Ginger Rogers',
		born: 1911,
		died: 1995,
		category: 'artists',
	},
	{
		name: 'Fred Astaire',
		born: 1899,
		died: 1987,
		category: 'artists',
	},
	{
		name: 'Groucho Marx',
		born: 1890,
		died: 1977,
		category: 'artists',
	},
	{
		name: 'Karl Marx',
		born: 1818,
		died: 1883,
		category: 'politicians',
	},
	{
		name: 'Vladimir Lenin',
		born: 1870,
		died: 1924,
		category: 'politicians',
	},
	{
		name: 'Catherine the Great (Catherine II)',
		born: 1729,
		died: 1796,
		category: 'politicians',
	},
	{
		name: 'Nikolai II Alexandrovich Romanov',
		born: 1868,
		died: 1918,
		category: 'politicians',
	},
	{
		name: 'Anne Frank',
		born: 1929,
		died: 1945,
		category: 'artists',
	},
	{
		name: 'Nikola Tesla',
		born: 1856,
		died: 1943,
		category: 'scientists',
	},
	{
		name: 'Igor Stravinsky',
		born: 1882,
		died: 1971,
		category: 'artists',
	},
	{
		name: 'Ernest Hemingway',
		born: 1899,
		died: 1961,
		category: 'artists',
	},
	{
		name: 'Tennessee Williams',
		born: 1911,
		died: 1983,
		category: 'artists',
	},
	{
		name: 'George Orwell',
		born: 1903,
		died: 1950,
		category: 'artists',
	},
	{
		name: 'Jane Austen',
		born: 1775,
		died: 1817,
		category: 'artists',
	},
	{
		name: 'Franklin D. Roosevelt',
		born: 1882,
		died: 1945,
		category: 'politicians',
	},
	{
		name: 'Theodore Roosevelt',
		born: 1858,
		died: 1919,
		category: 'politicians',
	},
	{
		name: 'John F. Kennedy',
		born: 1917,
		died: 1963,
		category: 'politicians',
	},
	{
		name: 'Abraham Lincoln',
		born: 1809,
		died: 1865,
		category: 'politicians',
	},
	{
		name: 'Queen Victoria',
		born: 1819,
		died: 1901,
		category: 'politicians',
	},
	{
		name: 'Napoleon Bonaparte',
		born: 1769,
		died: 1821,
		category: 'politicians',
	},
	{
		name: 'Greta Garbo',
		born: 1905,
		died: 1990,
		category: 'artists',
	},
	{
		name: 'James Dean',
		born: 1931,
		died: 1955,
		category: 'artists',
	},
	{
		name: 'Voltaire (Fran&ccedil;ois-Marie Arouet)',
		born: 1694,
		died: 1778,
		category: 'artists',
	},
	{
		name: 'Pierre-Auguste Renoir',
		born: 1841,
		died: 1919,
		category: 'artists',
	},
	{
		name: 'Pablo Picasso',
		born: 1881,
		died: 1973,
		category: 'artists',
	},
	{
		name: 'Claude Monet',
		born: 1840,
		died: 1926,
		category: 'artists',
	},
	{
		name: 'Claude Debussy',
		born: 1862,
		died: 1918,
		category: 'artists',
	},
	{
		name: 'Audrey Hepburn',
		born: 1929,
		died: 1993,
		category: 'artists',
	},
	{
		name: 'Louis XVI',
		born: 1754,
		died: 1793,
		category: 'politicians',
	},
	{
		name: 'Jonas Salk',
		born: 1914,
		died: 1995,
		category: 'scientists',
	},
	{
		name: 'Alan Turing',
		born: 1912,
		died: 1954,
		category: 'scientists',
	},
	{
		name: 'Marcel Proust',
		born: 1871,
		died: 1922,
		category: 'artists',
	},
	{
		name: 'Henri Poincar&eacute;',
		born: 1854,
		died: 1912,
		category: 'scientists',
	},
	{
		name: 'Henry David Thoreau',
		born: 1817,
		died: 1862,
		category: 'artists',
	},
	{
		name: 'Johann Wolfgang von Goethe',
		born: 1749,
		died: 1832,
		category: 'scientists',
	},
	{
		name: 'Bertrand Russell',
		born: 1872,
		died: 1970,
		category: 'scientists',
	},
	{
		name: 'Sigmund Freud',
		born: 1856,
		died: 1939,
		category: 'scientists',
	},
	{
		name: 'Marie Curie',
		born: 1867,
		died: 1934,
		category: 'artists',
	},
	{
		name: 'Andrew Jackson',
		born: 1767,
		died: 1845,
		category: 'politicians',
	},
	{
		name: 'Margaret Thatcher',
		born: 1925,
		died: 2013,
		category: 'politicians',
	},
	{
		name: 'Joseph Stalin',
		born: 1878,
		died: 1953,
		category: 'politicians',
	},
	{
		name: 'Adolf Hitler',
		born: 1889,
		died: 1945,
		category: 'politicians',
	},
	{
		name: 'Mao Zedong',
		born: 1893,
		died: 1976,
		category: 'politicians',
	},
	{
		name: 'Pol Pot',
		born: 1925,
		died: 1998,
		category: 'politicians',
	},
	{
		name: 'Hirohito (Emperor Sh&omacr;wa)',
		born: 1901,
		died: 1989,
		category: 'politicians',
	},
	{
		name: 'Sim&oacute;n Bol&iacute;var',
		born: 1783,
		died: 1830,
		category: 'politicians',
	},
	{
		name: 'Charles de Gaulle',
		born: 1890,
		died: 1970,
		category: 'politicians',
	},
	{
		name: 'Ulysses S. Grant',
		born: 1822,
		died: 1885,
		category: 'politicians',
	},
	{
		name: 'John von Neumann',
		born: 1903,
		died: 1957,
		category: 'scientists',
	},
	{
		name: 'Thomas Edison',
		born: 1847,
		died: 1931,
		category: 'scientists',
	},
	{
		name: 'Winston Churchill',
		born: 1874,
		died: 1965,
		category: 'politicians',
	},
	{
		name: '&Eacute;variste Galois',
		born: 1811,
		died: 1832,
		category: 'scientists',
	},
	{
		name: 'Charles Darwin',
		born: 1809,
		died: 1882,
		category: 'scientists',
	},
	{
		name: 'Gary Cooper',
		born: 1901,
		died: 1961,
		category: 'artists',
	},
	{
		name: 'John Lennon',
		born: 1940,
		died: 1980,
		category: 'artists',
	},
	{
		name: 'Woodrow Wilson',
		born: 1856,
		died: 1924,
		category: 'politicians',
	},
	{
		name: 'St. Thomas Aquinas',
		born: 1225,
		died: 1274,
		category: 'philosophers',
	},
	{
		name: 'Georges Clemenceau',
		born: 1841,
		died: 1929,
		category: 'politicians',
	},
	{
		name: 'Neil Armstrong',
		born: 1930,
		died: 2012,
		category: 'explorers',
	},
	{
		name: 'Isaac Newton',
		born: 1643,
		died: 1727,
		category: 'scientists',
	},
	{
		name: 'Sir Ernest Henry Shackleton',
		born: 1874,
		died: 1922,
		category: 'explorers',
	},
	{
		name: 'Marilyn Monroe',
		born: 1926,
		died: 1962,
		category: 'artists',
	},
	{
		name: 'Sarah Bernhardt',
		born: 1844,
		died: 1923,
		category: 'artists',
	},
	{
		name: 'Franz Liszt',
		born: 1811,
		died: 1886,
		category: 'artists',
	},
	{
		name: 'Fr&eacute;d&eacute;ric Chopin',
		born: 1810,
		died: 1849,
		category: 'artists',
	},
	{
		name: 'Michael Jackson',
		born: 1958,
		died: 2009,
		category: 'artists',
	},
	{
		name: 'Wolfgang Amadeus Mozart',
		born: 1756,
		died: 1791,
		category: 'artists',
	},
	{
		name: 'Louis Armstrong',
		born: 1901,
		died: 1971,
		category: 'artists',
	},
	{
		name: 'Ludwig van Beethoven',
		born: 1770,
		died: 1827,
		category: 'artists',
	},
	{
		name: 'Camille Saint-Sa&euml;ns',
		born: 1835,
		died: 1921,
		category: 'artists',
	},
	{
		name: 'Jimi Hendrix',
		born: 1942,
		died: 1970,
		category: 'artists',
	},
	{
		name: 'Friedrich Nietzsche',
		born: 1844,
		died: 1900,
		category: 'scientists',
	},
	{
		name: 'Dmitri Mendeleev',
		born: 1834,
		died: 1907,
		category: 'scientists',
	},
	{
		name: 'Louis Pasteur',
		born: 1822,
		died: 1895,
		category: 'scientists',
	},
	{
		name: 'James Clerk Maxwell',
		born: 1831,
		died: 1879,
		category: 'scientists',
	},
	{
		name: 'Guglielmo Marconi',
		born: 1874,
		died: 1937,
		category: 'scientists',
	},
	{
		name: 'Michael Faraday',
		born: 1791,
		died: 1867,
		category: 'scientists',
	},
	{
		name: 'Salvador Dal&iacute;',
		born: 1904,
		died: 1989,
		category: 'artists',
	},
	{
		name: 'Nathaniel Hawthorne',
		born: 1804,
		died: 1864,
		category: 'artists',
	},
	{
		name: 'Leo Tolstoy',
		born: 1828,
		died: 1910,
		category: 'artists',
	},
	{
		name: 'Fyodor Dostoevsky',
		born: 1821,
		died: 1881,
		category: 'artists',
	},
	{
		name: 'Chiang Kai-shek',
		born: 1887,
		died: 1975,
		category: 'politicians',
	},
	{
		name: 'Christopher Columbus',
		born: 1451,
		died: 1506,
		category: 'explorers',
	},
	{
		name: 'Marco Polo',
		born: 1254,
		died: 1324,
		category: 'explorers',
	},
	{
		name: 'Ferdinand Magellan',
		born: 1480,
		died: 1521,
		category: 'explorers',
	},
	{
		name: 'Leonardo da Vinci',
		born: 1452,
		died: 1519,
		category: 'artists',
	},
	{
		name: 'William Shakespeare',
		born: 1564,
		died: 1616,
		category: 'artists',
	},
	{
		name: 'Edwin Hubble',
		born: 1889,
		died: 1953,
		category: 'artists',
	},
	{
		name: 'Pierre de Fermat',
		born: 1607,
		died: 1655,
		category: 'scientists',
	},
	{
		name: 'Immanuel Kant',
		born: 1724,
		died: 1804,
		category: 'philosophers',
	},
	{
		name: 'Friedrich Nietzsche',
		born: 1844,
		died: 1900,
		category: 'philosophers',
	},
	{
		name: 'Ren&eacute; Descartes',
		born: 1596,
		died: 1650,
		category: 'philosophers',
	},
	{
		name: 'John Locke',
		born: 1632,
		died: 1704,
		category: 'philosophers',
	},
	{
		name: 'Gottfried Wilhelm Leibniz',
		born: 1646,
		died: 1716,
		category: 'philosophers',
	},
	{
		name: 'Blaise Pascal',
		born: 1623,
		died: 1662,
		category: 'philosophers',
	},
	{
		name: 'David Hume',
		born: 1711,
		died: 1776,
		category: 'philosophers',
	},
	{
		name: 'Karl Marx',
		born: 1818,
		died: 1883,
		category: 'philosophers',
	},
	{
		name: 'Jean-Jacques Rousseau',
		born: 1712,
		died: 1778,
		category: 'philosophers',
	},
	{
		name: 'Niccol&ograve; Machiavelli',
		born: 1469,
		died: 1527,
		category: 'philosophers',
	},
	{
		name: 'Baruch Spinoza',
		born: 1632,
		died: 1677,
		category: 'philosophers',
	},
	{
		name: 'Georg Wilhelm Friedrich Hegel',
		born: 1770,
		died: 1831,
		category: 'philosophers',
	},
	{
		name: 'Arthur Schopenhauer',
		born: 1788,
		died: 1860,
		category: 'philosophers',
	},
	{
		name: 'S&oslash;ren Kierkegaard',
		born: 1813,
		died: 1855,
		category: 'philosophers',
	},
	{
		name: 'Simone de Beauvoir',
		born: 1908,
		died: 1986,
		category: 'philosophers',
	},
	{
		name: 'Sim&oacute;n Bol&iacute;var',
		born: 1783,
		died: 1830,
		category: 'politicians',
	},
	{
		name: 'Edgar Allan Poe',
		born: 1809,
		died: 1849,
		category: 'artists',
	},
	{
		name: 'Michel Foucault',
		born: 1926,
		died: 1984,
		category: 'philosophers',
	},
	{
		name: 'Michelangelo',
		born: 1475,
		died: 1564,
		category: 'artists',
	},
	{
		name: 'Louis XIV of France',
		born: 1643,
		died: 1715,
		category: 'politicians',
	},
	{
		name: 'Amerigo Vespucci',
		born: 1451,
		died: 1512,
		category: 'explorers',
	},
	{
		name: 'Bertrand Russell',
		born: 1872,
		died: 1970,
		category: 'philosophers',
	},
	{
		name: 'Ludwig Wittgenstein',
		born: 1889,
		died: 1951,
		category: 'philosophers',
	},
	{
		name: 'Thomas Aquinas',
		born: 1225,
		died: 1274,
		category: 'philosophers',
	},
	{
		name: 'Thomas Hobbes',
		born: 1588,
		died: 1679,
		category: 'philosophers',
	},
	{
		name: 'John Stuart Mill',
		born: 1806,
		died: 1873,
		category: 'philosophers',
	},
	{
		name: 'William James',
		born: 1842,
		died: 1910,
		category: 'philosophers',
	},
	{
		name: 'Jean-Paul Sartre',
		born: 1905,
		died: 1980,
		category: 'philosophers',
	},
	{
		name: 'Albert Camus',
		born: 1913,
		died: 1960,
		category: 'philosophers',
	},
	{
		name: 'James Cook',
		born: 1728,
		died: 1779,
		category: 'explorers',
	},
	{
		name: 'Sir Francis Drake',
		born: 1540,
		died: 1596,
		category: 'explorers',
	},
	{
		name: 'Hern&aacute;n Cort&eacute;s',
		born: 1485,
		died: 1547,
		category: 'explorers',
	},
	{
		name: 'Meriwether Lewis',
		born: 1774,
		died: 1809,
		category: 'explorers',
	},
	{
		name: 'William Clark',
		born: 1770,
		died: 1838,
		category: 'explorers',
	},
	{
		name: 'Zheng He',
		born: 1371,
		died: 1433,
		category: 'explorers',
	},
	{
		name: 'Robert Falcon Scott',
		born: 1868,
		died: 1912,
		category: 'explorers',
	},
	{
		name: 'Ernest Shackleton',
		born: 1874,
		died: 1922,
		category: 'explorers',
	},
	{
		name: 'John Cabot',
		born: 1450,
		died: 1499,
		category: 'explorers',
	},
	{
		name: 'Juan Ponce de León',
		born: 1474,
		died: 1521,
		category: 'explorers',
	},
	{
		name: 'Francisco Pizarro',
		born: 1478,
		died: 1541,
		category: 'explorers',
	},
	{
		name: 'Oscar Wilde',
		born: 1854,
		died: 1900,
		category: 'artists',
	},
	{
		name: 'Herman Melville',
		born: 1819,
		died: 1891,
		category: 'artists',
	},
	{
		name: 'Gustave Eiffel',
		born: 1832,
		died: 1923,
		category: 'artists',
	},
];
