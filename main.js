// Táblázat létrehozása
const table = document.createElement('table'); // Létrehoz egy <table> elemet
document.body.appendChild(table); // A <table> elemet hozzáadja a <body>-hoz

// Táblázat fejléce
const tableHeader = document.createElement('tr'); // Létrehoz egy <tr> sort a fejléchez
table.appendChild(tableHeader); // Hozzáadja a sort a táblázathoz

const headerSzerzo = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>)
headerSzerzo.innerHTML = 'Szerző neve'; // Beállítja a cella tartalmát
tableHeader.appendChild(headerSzerzo); // A cellát hozzáadja a fejléc sorhoz

const headerKorszak = document.createElement('th'); // Létrehoz egy újabb fejléc cellát
headerKorszak.innerHTML = 'Korszak'; // Beállítja a cella tartalmát
tableHeader.appendChild(headerKorszak); // Hozzáadja a fejléc sorhoz

const headerSzerelem1 = document.createElement('th'); // Létrehoz egy újabb fejléc cellát
headerSzerelem1.innerHTML = 'Szerelmek'; // Beállítja a cella tartalmát
tableHeader.appendChild(headerSzerelem1); // Hozzáadja a fejléc sorhoz

const headerSzerelem2 = document.createElement('th'); // Létrehoz egy újabb fejléc cellát
headerSzerelem2.innerHTML = 'Szerelmek'; // Beállítja a cella tartalmát
tableHeader.appendChild(headerSzerelem2); // Hozzáadja a fejléc sorhoz

// Táblázat első sor
const firstRow = document.createElement('tr'); // Létrehoz egy <tr> sort az első adatsorhoz
table.appendChild(firstRow); // Hozzáadja a sort a táblázathoz

const firstRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát (<td>)
firstRowSzerzo.innerHTML = 'Balassi Bálint'; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowSzerzo); // Hozzáadja a cellát az első sorhoz

const firstRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
firstRowKorszak.innerHTML = 'reformáció'; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowKorszak); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
firstRowSzerelem1.innerHTML = 'Losonczy Anna'; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowSzerelem1); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
firstRowSzerelem2.innerHTML = 'Dobó Krisztina'; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowSzerelem2); // Hozzáadja a cellát az első sorhoz

// Táblázat második sor
const secondRow = document.createElement('tr'); // Létrehoz egy <tr> sort a második adatsorhoz
table.appendChild(secondRow); // Hozzáadja a sort a táblázathoz

const secondRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
secondRowSzerzo.innerHTML = 'Csokonai Vitéz Mihály'; // Beállítja a cella tartalmát
secondRow.appendChild(secondRowSzerzo); // Hozzáadja a cellát a második sorhoz

const secondRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
secondRowKorszak.innerHTML = 'felvilágosodás'; // Beállítja a cella tartalmát
secondRow.appendChild(secondRowKorszak); // Hozzáadja a cellát a második sorhoz

const secondRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
secondRowSzerelem1.innerHTML = 'Vajda Juliána'; // Beállítja a cella tartalmát
secondRow.appendChild(secondRowSzerelem1); // Hozzáadja a cellát a második sorhoz

const secondRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
secondRowSzerelem2.innerHTML = ''; // Üres cellát hoz létre
secondRow.appendChild(secondRowSzerelem2); // Hozzáadja a cellát a második sorhoz

// Táblázat harmadik sor
const thirdRow = document.createElement('tr'); // Létrehoz egy <tr> sort a harmadik adatsorhoz
table.appendChild(thirdRow); // Hozzáadja a sort a táblázathoz

const thirdRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
thirdRowSzerzo.innerHTML = 'Petőfi Sándor'; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowSzerzo); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
thirdRowKorszak.innerHTML = 'magyar romantika'; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowKorszak); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
thirdRowSzerelem1.innerHTML = 'Mednyánszky Berta'; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowSzerelem1); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
thirdRowSzerelem2.innerHTML = 'Szendrey Júlia'; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowSzerelem2); // Hozzáadja a cellát a harmadik sorhoz

// Táblázat negyedik sor
const fourthRow = document.createElement('tr'); // Létrehoz egy <tr> sort a negyedik adatsorhoz
table.appendChild(fourthRow); // Hozzáadja a sort a táblázathoz

const fourthRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
fourthRowSzerzo.innerHTML = 'Ady Endre'; // Beállítja a cella tartalmát
fourthRow.appendChild(fourthRowSzerzo); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
fourthRowKorszak.innerHTML = '20. század'; // Beállítja a cella tartalmát
fourthRow.appendChild(fourthRowKorszak); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
fourthRowSzerelem1.innerHTML = 'Léda'; // Beállítja a cella tartalmát
fourthRow.appendChild(fourthRowSzerelem1); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
fourthRowSzerelem2.innerHTML = 'Csinszka'; // Beállítja a cella tartalmát
fourthRow.appendChild(fourthRowSzerelem2); // Hozzáadja a cellát a negyedik sorhoz
