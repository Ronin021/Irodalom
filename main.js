
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

// Táblázat törzsének létrehozása
const torzs = document.createElement('tbody'); // <tbody> elem létrehozása
table.appendChild(torzs); // A táblázat törzsének hozzáfűzése a táblázathoz

// Ciklus a szerzők adatai alapján
for (const currentElement of array) { // Végigmegyünk a `array` tömb elemein
    const aktivsor = document.createElement('tr'); // Új sor létrehozása
    torzs.appendChild(aktivsor); // Sor hozzáfűzése a táblázat törzséhez

    const szerzoCella = document.createElement('td'); // Első oszlop cellájának létrehozása
    szerzoCella.innerHTML = currentElement.szerzo; // Cellatartalom beállítása
    aktivsor.appendChild(szerzoCella); // Első cella hozzáfűzése az aktuális sorhoz

    const korszakCella = document.createElement('td'); // Második oszlop cellájának létrehozása
    korszakCella.innerHTML = currentElement.korszak; // Cellatartalom beállítása
    aktivsor.appendChild(korszakCella); // Második cella hozzáfűzése az aktuális sorhoz

    const szerelem1Cella = document.createElement('td'); // Harmadik oszlop cellájának létrehozása
    szerelem1Cella.innerHTML = currentElement.szerelem1; // Cellatartalom beállítása
    aktivsor.appendChild(szerelem1Cella); // Harmadik cella hozzáfűzése az aktuális sorhoz

    const szerelem2Cella = document.createElement('td'); // Negyedik oszlop cellájának létrehozása
    szerelem2Cella.innerHTML = currentElement.szerelem2 || ''; // Cellatartalom beállítása (üres, ha nincs adat)
    aktivsor.appendChild(szerelem2Cella); // Negyedik cella hozzáfűzése az aktuális sorhoz
}
