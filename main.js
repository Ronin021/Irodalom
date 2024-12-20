// Adatok tömbje, minden sor egy objektumként
const array = [
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

const fejlecobjekt = {
    szerzo: 'Szerző neve', // Fejléc címe az első oszlophoz
    korszak: 'Korszak', // Fejléc címe a második oszlophoz
    szerelem: 'Szerelmek', // Fejléc címe a harmadik oszlophoz
};

// Fejléc sor létrehozása
const tableHeader = document.createElement('tr'); // Létrehoz egy <tr> sort a fejléchez
table.appendChild(tableHeader); // Hozzáadja a sort a táblázathoz

// Fejléc cellák létrehozása
const headerSzerzo = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) az első oszlophoz
headerSzerzo.innerHTML = fejlecobjekt.szerzo; // Fejléc cellájának beállítása a "Szerző neve" szöveggel
tableHeader.appendChild(headerSzerzo); // A cellát hozzáadja a fejléc sorhoz

const headerKorszak = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a második oszlophoz
headerKorszak.innerHTML = fejlecobjekt.korszak; // Fejléc cellájának beállítása a "Korszak" szöveggel
tableHeader.appendChild(headerKorszak); // Hozzáadja a cellát a fejléc sorhoz

const headerSzerelem = document.createElement('th'); // Létrehoz egy fejléc cellát (<th>) a "Szerelmek" oszlophoz
headerSzerelem.innerHTML = fejlecobjekt.szerelem; // Fejléc cellájának beállítása a "Szerelmek" szöveggel
tableHeader.appendChild(headerSzerelem); // Hozzáadja a cellát a fejléc sorhoz

// Táblázat törzsének létrehozása
const torzs = document.createElement('tbody'); // <tbody> elem létrehozása
table.appendChild(torzs); // A táblázat törzsének hozzáfűzése a táblázathoz

// A táblázat törzsét renderelő függvény
function Rendertorzs() {
    // Ciklus a szerzők adatai alapján
    for (const currentElement of array) { // Végigmegyünk az `array` tömb elemein
        const aktivsor = document.createElement('tr'); // Új sor (<tr>) létrehozása
        torzs.appendChild(aktivsor); // Sor hozzáfűzése a táblázat törzséhez

        const szerzoCella = document.createElement('td'); // Első oszlop cellájának (<td>) létrehozása
        szerzoCella.innerHTML = currentElement.szerzo; // Cellatartalom beállítása a szerző nevével
        aktivsor.appendChild(szerzoCella); // Első cella hozzáfűzése az aktuális sorhoz

        const korszakCella = document.createElement('td'); // Második oszlop cellájának (<td>) létrehozása
        korszakCella.innerHTML = currentElement.korszak; // Cellatartalom beállítása a korszak nevével
        aktivsor.appendChild(korszakCella); // Második cella hozzáfűzése az aktuális sorhoz

        const szerelemCella = document.createElement('td'); // Harmadik oszlop cellájának (<td>) létrehozása
        szerelemCella.innerHTML = currentElement.szerelem1; // Cellatartalom beállítása az első szerelem nevével
        if (currentElement.szerelem2 === undefined) {
            // Ha nincs második szerelem, a cella két oszlopot foglal el
            szerelemCella.colSpan = 2; // A cella két oszlopot foglal
        }
        aktivsor.appendChild(szerelemCella); // Harmadik cella hozzáfűzése az aktuális sorhoz

        if (currentElement.szerelem2 !== undefined) {
            // Ha van második szerelem, új cella készül
            const szerelem2Cella = document.createElement('td'); // Új cella (<td>) a második szerelemhez
            szerelem2Cella.innerHTML = currentElement.szerelem2; // Cellatartalom beállítása a második szerelem nevével
            aktivsor.appendChild(szerelem2Cella); // Cellának hozzáfűzése az aktuális sorhoz
        }
    }
}

// A form elemen való submit esemény figyelése
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Alapértelmezett form viselkedésének megakadályozása (pl. oldal újratöltése)

    // Szerző mező értékének lekérése
    const szerzoHTMLelement = document.getElementById('kolto_nev'); // Input mező kiválasztása ID alapján
    const szerzoValue = szerzoHTMLelement.value; // Input mező értékének lekérése

    // Korszak mező értékének lekérése
    const korszakHTMLelement = document.getElementById('korszak'); // Input mező kiválasztása ID alapján
    const korszakValue = korszakHTMLelement.value; // Input mező értékének lekérése

    // Első szerelem mező értékének lekérése
    const szerelem1HTMLelement = document.getElementById('szerelem1'); // Input mező kiválasztása ID alapján
    const szerelem1Value = szerelem1HTMLelement.value; // Input mező értékének lekérése

    // Második szerelem mező értékének lekérése
    const szerelem2HTMLelement = document.getElementById('szerelem2'); // Input mező kiválasztása ID alapján
    const szerelem2Value = szerelem2HTMLelement.value; // Input mező értékének lekérése

    // Új objektum létrehozása az űrlap mezőinek értékeiből
    const newSzerzo = {
        szerzo: szerzoValue, // Szerző értékének hozzárendelése
        korszak: korszakValue, // Korszak értékének hozzárendelése
        szerelem1: szerelem1Value, // Első szerelem értékének hozzárendelése
        szerelem2: szerelem2Value === '' ? undefined : szerelem2Value, // Második szerelem csak akkor, ha nem üres
    };

    array.push(newSzerzo); // Új objektum hozzáadása az array tömbhöz
    torzs.innerHTML = ''; // A táblázat törzs (tbody) tartalmának törlése
    Rendertorzs(); // A táblázat újrarenderelése a frissített adatokkal
});

// A táblázat kezdeti megjelenítése
Rendertorzs();
