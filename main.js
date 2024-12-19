// Táblázat létrehozása
const table = document.createElement('table'); // Létrehoz egy <table> elemet
document.body.appendChild(table); // A <table> elemet hozzáadja a <body>-hoz

// Táblázat fejléce
const fejlecObjekt = { // Objektum a fejléc celláihoz
    fejlecCella1: 'Szerző neve', // Az első fejléc cella szövege
    fejlecCella2: 'Korszak', // A második fejléc cella szövege
    fejlecCella3: 'Szerelmek' // A harmadik fejléc cella szövege
};

// Fejléc sor létrehozása
const tableHeader = document.createElement('tr'); // Létrehoz egy <tr> sort a fejléchez
table.appendChild(tableHeader); // Hozzáadja a sort a táblázathoz

// Fejléc cellák létrehozása
const headerSzerzo = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) az első oszlophoz
headerSzerzo.innerHTML = fejlecObjekt.fejlecCella1; // Beállítja az első cella tartalmát
tableHeader.appendChild(headerSzerzo); // A cellát hozzáadja a fejléc sorhoz

const headerKorszak = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a második oszlophoz
headerKorszak.innerHTML = fejlecObjekt.fejlecCella2; // Beállítja a második cella tartalmát
tableHeader.appendChild(headerKorszak); // Hozzáadja a cellát a fejléc sorhoz

const headerSzerelem = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a "Szerelmek" oszlophoz
headerSzerelem.innerHTML = fejlecObjekt.fejlecCella3; // Beállítja a harmadik cella tartalmát
headerSzerelem.colSpan = 2; // A "Szerelmek" cella két oszlopot ölel fel
tableHeader.appendChild(headerSzerelem); // Hozzáadja a cellát a fejléc sorhoz

// Táblázat első sor
const elsosorObjekt = { // Objektum az első adatsorhoz
    cella1Sor1: 'Balassi Bálint', // Az első cella tartalma az első sorban
    cella2Sor1: 'reformáció', // A második cella tartalma az első sorban
    cella3Sor1: 'Losonczy Anna', // A harmadik cella tartalma az első sorban
    cella4sor1: 'Dobó Krisztina' // A negyedik cella tartalma az első sorban
};

const firstRow = document.createElement('tr'); // Létrehoz egy <tr> sort az első adatsorhoz
table.appendChild(firstRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása az első sorhoz
const firstRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát (<td>) az első sorhoz
firstRowSzerzo.innerHTML = elsosorObjekt.cella1Sor1; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowSzerzo); // Hozzáadja a cellát az első sorhoz

const firstRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
firstRowKorszak.innerHTML = elsosorObjekt.cella2Sor1; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowKorszak); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
firstRowSzerelem1.innerHTML = elsosorObjekt.cella3Sor1; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowSzerelem1); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
firstRowSzerelem2.innerHTML = elsosorObjekt.cella4sor1; // Beállítja a cella tartalmát
firstRow.appendChild(firstRowSzerelem2); // Hozzáadja a cellát az első sorhoz

// Táblázat második sor
const masodiksorObjekt = { // Objektum a második adatsorhoz
    cella1Sor2: 'Csokonai Vitéz Mihály', // Az első cella tartalma a második sorban
    cella2Sor2: 'felvilágosodás', // A második cella tartalma a második sorban
    cella3Sor2: 'Vajda Juliána', // A harmadik cella tartalma a második sorban
};

const secondRow = document.createElement('tr'); // Létrehoz egy <tr> sort a második adatsorhoz
table.appendChild(secondRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása a második sorhoz
const secondRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát a második sorhoz
secondRowSzerzo.innerHTML = masodiksorObjekt.cella1Sor2; // Beállítja a cella tartalmát
secondRow.appendChild(secondRowSzerzo); // Hozzáadja a cellát a második sorhoz

const secondRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
secondRowKorszak.innerHTML = masodiksorObjekt.cella2Sor2; // Beállítja a cella tartalmát
secondRow.appendChild(secondRowKorszak); // Hozzáadja a cellát a második sorhoz

const secondRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
secondRowSzerelem1.innerHTML = masodiksorObjekt.cella3Sor2; // Beállítja a cella tartalmát
secondRowSzerelem1.colSpan = 2; // A "Szerelmek" cella két oszlopot ölel fel
secondRow.appendChild(secondRowSzerelem1); // Hozzáadja a cellát a második sorhoz

// Táblázat harmadik sor
const harmadiksorObjekt = { // Objektum a harmadik adatsorhoz
    cella1Sor3: 'Petőfi Sándor', // Az első cella tartalma a harmadik sorban
    cella2Sor3: 'magyar romantika', // A második cella tartalma a harmadik sorban
    cella3Sor3: 'Mednyánszky Berta', // A harmadik cella tartalma a harmadik sorban
    cella4sor3: 'Szendrey Júlia' // A negyedik cella tartalma a harmadik sorban
};

const thirdRow = document.createElement('tr'); // Létrehoz egy <tr> sort a harmadik adatsorhoz
table.appendChild(thirdRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása a harmadik sorhoz
const thirdRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
thirdRowSzerzo.innerHTML = harmadiksorObjekt.cella1Sor3; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowSzerzo); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
thirdRowKorszak.innerHTML = harmadiksorObjekt.cella2Sor3; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowKorszak); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
thirdRowSzerelem1.innerHTML = harmadiksorObjekt.cella3Sor3; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowSzerelem1); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
thirdRowSzerelem2.innerHTML = harmadiksorObjekt.cella4sor3; // Beállítja a cella tartalmát
thirdRow.appendChild(thirdRowSzerelem2); // Hozzáadja a cellát a harmadik sorhoz

// Táblázat negyedik sor
const negyediksorObjekt = { // Objektum a negyedik adatsorhoz
    cella1Sor4: 'Ady Endre', // Az első cella tartalma a negyedik sorban
    cella2Sor4: '20. század', // A második cella tartalma a negyedik sorban
    cella3Sor4: 'Léda', // A harmadik cella tartalma a negyedik sorban
};

const fourthRow = document.createElement('tr'); // Létrehoz egy <tr> sort a negyedik adatsorhoz
table.appendChild(fourthRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása a negyedik sorhoz
const fourthRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
fourthRowSzerzo.innerHTML = negyediksorObjekt.cella1Sor4; // Beállítja a cella tartalmát
fourthRow.appendChild(fourthRowSzerzo); // Hozzáadja a cellát a negyedik sorhoz
