// Adatok tömbje, minden sor egy objektumként
const array = [
    {
        szerzo: 'Balassi Bálint', // Az első szerző neve
        korszak: 'reformáció', // A korszak, amelyhez a szerző tartozik
        szerelem1: 'Losonczy Anna', // Az első szerelem neve
        szerelem2: 'Dobó Krisztina', // A második szerelem neve (opcionális)
    },
    {
        szerzo: 'Csokonai Vitéz Mihály', // Második szerző neve
        korszak: 'felvilágosodás', // Második szerző korszakának neve
        szerelem1: 'Vajda Juliána', // Második szerző első szerelme
    },
    {
        szerzo: 'Petőfi Sándor', // Harmadik szerző neve
        korszak: 'magyar romantika', // Harmadik szerző korszakának neve
        szerelem1: 'Mednyánszky Berta', // Harmadik szerző első szerelme
        szerelem2: 'Szendrey Júlia', // Harmadik szerző második szerelme
    },
    {
        szerzo: 'Ady Endre', // Negyedik szerző neve
        korszak: '20. század', // Negyedik szerző korszakának neve
        szerelem1: 'Léda', // Negyedik szerző első szerelme
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

    const ThisForm = e.currentTarget; // Az éppen aktuális form elem, amelyre az esemény vonatkozik
    const errorElement = ThisForm.querySelectorAll('.error'); // Kiválasztjuk az összes hibaüzenet megjelenítésére szolgáló elemet

    for (const errorok of errorElement) {
        errorok.innerHTML = ''; // Az összes hibaüzenet tartalmát töröljük
    }

    let validation = true; // Az űrlap érvényességét jelző változó

    // Szerző, korszak, szerelem mezők értékeinek lekérése
    const szerzoValue = document.getElementById('kolto_nev').value;
    const korszakValue = document.getElementById('korszak').value;
    const szerelem1Value = document.getElementById('szerelem1').value;
    const szerelem2Value = document.getElementById('szerelem2').value;

    // Érvényesség ellenőrzés
    if (szerzoValue === '') {
        const parent = document.getElementById('kolto_nev').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'A név megadása kötelező'; // Hibaüzenet, ha a szerző neve nincs kitöltve
        validation = false; // Az űrlap nem érvényes
    }
    if (korszakValue === '') {
        const parent = document.getElementById('korszak').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'A korszak megadása kötelező'; // Hibaüzenet, ha a korszak nincs kitöltve
        validation = false; // Az űrlap nem érvényes
    }
    if (szerelem1Value === '') {
        const parent = document.getElementById('szerelem1').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'Az első szerelem megadása kötelező'; // Hibaüzenet, ha az első szerelem nincs kitöltve
        validation = false; // Az űrlap nem érvényes
    }

    // Ha az űrlap érvényes, feldolgozzuk az adatokat
    if (validation) {
        const newSzerzo = {
            szerzo: szerzoValue, // Az új szerző neve
            korszak: korszakValue, // Az új korszak neve
            szerelem1: szerelem1Value, // Az új első szerelem neve
            szerelem2: szerelem2Value || undefined, // Az új második szerelem neve, ha van
        };

        array.push(newSzerzo); // Új objektum hozzáadása az array tömbhöz
        torzs.innerHTML = ''; // A táblázat törzs (tbody) tartalmának törlése
        Rendertorzs(); // A táblázat újrarenderelése a frissített adatokkal
    }
});

// A táblázat kezdeti megjelenítése
Rendertorzs();
