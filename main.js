
// Adatok tömbje, minden sor egy objektumként
const array = [
    {
        szerzo: 'Szerző neve',
        korszak: 'Korszak',
        szerelem: 'Szerelmek'
    },
    {
        szerzo: 'Balassi Bálint',
        korszak: 'reformáció',
        szerelem1: 'Losonczy Anna',
        szerelem2: 'Dobó Krisztina',
    },
    {
        szerzo: 'Csokonai Vitéz Mihály',
        korszak: 'felvilágosodás',
        szerelem1: 'Vajda Juliána',
    },
    {
        szerzo: 'Petőfi Sándor',
        korszak: 'magyar romantika',
        szerelem1: 'Mednyánszky Berta',
        szerelem2: 'Szendrey Júlia',
    },
    {
        szerzo: 'Ady Endre',
        korszak: '20. század',
        szerelem1: 'Léda',
    },
];


// Táblázat létrehozása
const table = document.createElement('table'); // Létrehoz egy <table> elemet
document.body.appendChild(table); // A <table> elemet hozzáadja a <body>-hoz



// Fejléc sor létrehozása
const tableHeader = document.createElement('tr'); // Létrehoz egy <tr> sort a fejléchez
table.appendChild(tableHeader); // Hozzáadja a sort a táblázathoz

// Fejléc cellák létrehozása
const headerSzerzo = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) az első oszlophoz
headerSzerzo.innerHTML = array[0].szerzo
tableHeader.appendChild(headerSzerzo); // A cellát hozzáadja a fejléc sorhoz

const headerKorszak = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a második oszlophoz
headerKorszak.innerHTML = array[0].korszak
tableHeader.appendChild(headerKorszak); // Hozzáadja a cellát a fejléc sorhoz

const headerSzerelem = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a "Szerelmek" oszlophoz
headerSzerelem.innerHTML = array[0].szerelem
headerSzerelem.colSpan = 2; // A "Szerelmek" cella két oszlopot ölel fel
tableHeader.appendChild(headerSzerelem); // Hozzáadja a cellát a fejléc sorhoz

// Táblázat első sor


const firstRow = document.createElement('tr'); // Létrehoz egy <tr> sort az első adatsorhoz
table.appendChild(firstRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása az első sorhoz
const firstRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát (<td>) az első sorhoz
firstRowSzerzo.innerHTML = array[1].szerzo
firstRow.appendChild(firstRowSzerzo); // Hozzáadja a cellát az első sorhoz

const firstRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
firstRowKorszak.innerHTML = array[1].korszak
firstRow.appendChild(firstRowKorszak); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
firstRowSzerelem1.innerHTML = array[1].szerelem1
firstRow.appendChild(firstRowSzerelem1); // Hozzáadja a cellát az első sorhoz

const firstRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
firstRowSzerelem2.innerHTML =array[1].szerelem2
firstRow.appendChild(firstRowSzerelem2); // Hozzáadja a cellát az első sorhoz

// Táblázat második sor


const secondRow = document.createElement('tr'); // Létrehoz egy <tr> sort a második adatsorhoz
table.appendChild(secondRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása a második sorhoz
const secondRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát a második sorhoz
secondRowSzerzo.innerHTML = array[2].szerzo
secondRow.appendChild(secondRowSzerzo); // Hozzáadja a cellát a második sorhoz

const secondRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
secondRowKorszak.innerHTML = array[2].korszak
secondRow.appendChild(secondRowKorszak); // Hozzáadja a cellát a második sorhoz

const secondRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
secondRowSzerelem1.innerHTML = array[2].szerelem1
secondRowSzerelem1.colSpan = 2; // A "Szerelmek" cella két oszlopot ölel fel
secondRow.appendChild(secondRowSzerelem1); // Hozzáadja a cellát a második sorhoz



const thirdRow = document.createElement('tr'); // Létrehoz egy <tr> sort a harmadik adatsorhoz
table.appendChild(thirdRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása a harmadik sorhoz
const thirdRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
thirdRowSzerzo.innerHTML = array[3].szerzo
thirdRow.appendChild(thirdRowSzerzo); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
thirdRowKorszak.innerHTML = array[3].korszak
thirdRow.appendChild(thirdRowKorszak); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
thirdRowSzerelem1.innerHTML =array[3].szerelem1
thirdRow.appendChild(thirdRowSzerelem1); // Hozzáadja a cellát a harmadik sorhoz

const thirdRowSzerelem2 = document.createElement('td'); // Létrehoz egy negyedik adatcellát
thirdRowSzerelem2.innerHTML = array[3].szerelem2
thirdRow.appendChild(thirdRowSzerelem2); // Hozzáadja a cellát a harmadik sorhoz

// Táblázat negyedik sor
const fourthRow = document.createElement('tr'); // Létrehoz egy <tr> sort a negyedik adatsorhoz
table.appendChild(fourthRow); // Hozzáadja a sort a táblázathoz

// Adatcellák hozzáadása a negyedik sorhoz
const fourthRowSzerzo = document.createElement('td'); // Létrehoz egy adatcellát
fourthRowSzerzo.innerHTML = array[4].szerzo; // Beállítja a szerző nevét
fourthRow.appendChild(fourthRowSzerzo); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowKorszak = document.createElement('td'); // Létrehoz egy második adatcellát
fourthRowKorszak.innerHTML = array[4].korszak; // Beállítja a korszak nevét
fourthRow.appendChild(fourthRowKorszak); // Hozzáadja a cellát a negyedik sorhoz

const fourthRowSzerelem1 = document.createElement('td'); // Létrehoz egy harmadik adatcellát
fourthRowSzerelem1.innerHTML = array[4].szerelem1; // Beállítja az első szerelmet
fourthRowSzerelem1.colSpan = 2
fourthRow.appendChild(fourthRowSzerelem1); // Hozzáadja a cellát a negyedik sorhoz

