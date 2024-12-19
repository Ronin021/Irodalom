// Táblázat létrehozása
const table = document.createElement('table'); // Létrehoz egy <table> elemet
document.body.appendChild(table); // A <table> elemet hozzáadja a <body>-hoz

// Táblázat fejléce
const fejlecObjekt = {
    fejlecCella1: 'Szerző neve',
    fejlecCella2: 'Korszak',
    fejlecCella3: 'Szerelmek'
};

const tableHeader = document.createElement('tr'); // Létrehoz egy <tr> sort a fejléchez
table.appendChild(tableHeader); // Hozzáadja a sort a táblázathoz

const headerSzerzo = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) az első oszlophoz
headerSzerzo.innerHTML = fejlecObjekt.fejlecCella1;
tableHeader.appendChild(headerSzerzo); // A cellát hozzáadja a fejléc sorhoz

const headerKorszak = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a második oszlophoz
headerKorszak.innerHTML = fejlecObjekt.fejlecCella2;
tableHeader.appendChild(headerKorszak); // Hozzáadja a cellát a fejléc sorhoz

const headerSzerelem = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a "Szerelmek" oszlophoz
headerSzerelem.innerHTML = fejlecObjekt.fejlecCella3;
headerSzerelem.colSpan = 2; // A "Szerelmek" cella két oszlopot ölel fel
tableHeader.appendChild(headerSzerelem); // Hozzáadja a cellát a fejléc sorhoz

// Táblázat első sor
const elsosorObjekt = {
    cella1Sor1: 'Balassi Bálint',
    cella2Sor1: 'reformáció',
    cella3Sor1: 'Losonczy Anna',
    cella4sor1: 'Dobó Krisztina'
};

const firstRow = document.createElement('tr'); // Létrehoz egy <tr> sort az első adatsorhoz
table.appendChild(firstRow);  // Hozzáadja a sort a táblázathoz

const firstRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát (<td>)
firstRowSzerzo.innerHTML = elsosorObjekt.cella1Sor1;
firstRow.appendChild(firstRowSzerzo); // Hozzáadja a cellát az első sorhoz

const firstRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
firstRowKorszak.innerHTML = elsosorObjekt.cella2Sor1;
firstRow.appendChild(firstRowKorszak); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
firstRowSzerelem1.innerHTML = elsosorObjekt.cella3Sor1;
firstRow.appendChild(firstRowSzerelem1); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
firstRowSzerelem2.innerHTML = elsosorObjekt.cella4sor1;
firstRow.appendChild(firstRowSzerelem2); // Hozzáadja a cellát az első sorhoz

// Táblázat második sor

const masodiksorObjekt = {
    cella1Sor2: 'Csokonai Vitéz Mihály',
    cella2Sor2: 'felvilágosodás',
    cella3Sor2: 'Vajda Juliána',
    
};

const secondRow = document.createElement('tr'); // Létrehoz egy <tr> sort a második adatsorhoz
table.appendChild(secondRow); // Hozzáadja a sort a táblázathoz

const secondRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
secondRowSzerzo.innerHTML = masodiksorObjekt.cella1Sor2
secondRow.appendChild(secondRowSzerzo); // Hozzáadja a cellát a második sorhoz

const secondRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
secondRowKorszak.innerHTML = masodiksorObjekt.cella2Sor2
secondRow.appendChild(secondRowKorszak); // Hozzáadja a cellát a második sorhoz

const secondRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
secondRowSzerelem1.innerHTML = masodiksorObjekt.cella3Sor2
secondRowSzerelem1.colSpan = 2
secondRow.appendChild(secondRowSzerelem1); // Hozzáadja a cellát a második sorhoz

// Táblázat harmadik sor

const harmadiksorObjekt = {
    cella1Sor3: 'Petőfi Sándor',
    cella2Sor3: 'magyar romantika',
    cella3Sor3: 'Mednyánszky Berta',
    cella4sor3: 'Szendrey Júlia'
};

const thirdRow = document.createElement('tr'); // Létrehoz egy <tr> sort a harmadik adatsorhoz
table.appendChild(thirdRow); // Hozzáadja a sort a táblázathoz

const thirdRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
thirdRowSzerzo.innerHTML = harmadiksorObjekt.cella1Sor3
thirdRow.appendChild(thirdRowSzerzo); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
thirdRowKorszak.innerHTML = harmadiksorObjekt.cella2Sor3
thirdRow.appendChild(thirdRowKorszak); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
thirdRowSzerelem1.innerHTML = harmadiksorObjekt.cella3Sor3
thirdRow.appendChild(thirdRowSzerelem1); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
thirdRowSzerelem2.innerHTML = harmadiksorObjekt.cella4sor3
thirdRow.appendChild(thirdRowSzerelem2); // Hozzáadja a cellát a harmadik sorhoz

// Táblázat negyedik sor

const negyediksorObjekt = {
    cella1Sor4: 'Ady Endre',
    cella2Sor4: '20. század',
    cella3Sor4: 'Léda',
    
};

const fourthRow = document.createElement('tr'); // Létrehoz egy <tr> sort a negyedik adatsorhoz
table.appendChild(fourthRow); // Hozzáadja a sort a táblázathoz

const fourthRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
fourthRowSzerzo.innerHTML =negyediksorObjekt.cella1Sor4
fourthRow.appendChild(fourthRowSzerzo); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
fourthRowKorszak.innerHTML = negyediksorObjekt.cella2Sor4
fourthRow.appendChild(fourthRowKorszak); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
fourthRowSzerelem1.innerHTML =negyediksorObjekt.cella3Sor4
fourthRowSzerelem1.colSpan = 2
fourthRow.appendChild(fourthRowSzerelem1); // Hozzáadja a cellát a negyedik sorhoz

