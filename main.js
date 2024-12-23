// Adatok tömbje, amely tartalmazza a költők adatait (szerző, korszak, szerelmek)
const array = [
    { szerzo: 'Balassi Bálint', 
        korszak: 'reformáció', 
        szerelem1: 'Losonczy Anna', 
        szerelem2: 'Dobó Krisztina' },

    { szerzo: 'Csokonai Vitéz Mihály', 
        korszak: 'felvilágosodás', 
        szerelem1: 'Vajda Juliána' },
    { szerzo: 'Petőfi Sándor', 
        korszak: 'magyar romantika', 
        szerelem1: 'Mednyánszky Berta', 
        szerelem2: 'Szendrey Júlia' },
    { szerzo: 'Ady Endre', 
        korszak: '20. század', 
        szerelem1: 'Léda' },
];

// Táblázat létrehozása és hozzáadása a dokumentumhoz
const table = document.createElement('table');
document.body.appendChild(table);

// Fejléc objektum, ami a táblázat oszlopainak nevét tárolja
const fejlecobjekt = {
    szerzo: 'Szerző neve',
    korszak: 'Korszak',
    szerelem: 'Szerelmek',
};

// Fejléc sor létrehozása és hozzáadása a táblázathoz
const tableHeader = document.createElement('tr');
table.appendChild(tableHeader);

// Fejléc cellák létrehozása és hozzáadása
const headerSzerzo = document.createElement('th');
headerSzerzo.innerHTML = fejlecobjekt.szerzo; // Szerző neve oszlop
tableHeader.appendChild(headerSzerzo);

const headerKorszak = document.createElement('th');
headerKorszak.innerHTML = fejlecobjekt.korszak; // Korszak oszlop
tableHeader.appendChild(headerKorszak);

const headerSzerelem = document.createElement('th');
headerSzerelem.innerHTML = fejlecobjekt.szerelem; // Szerelmek oszlop
tableHeader.appendChild(headerSzerelem);

// Táblázat törzs létrehozása
const torzs = document.createElement('tbody');
table.appendChild(torzs);

// Funkció a táblázat törzsének renderelésére
function Rendertorzs() {
    torzs.innerHTML = ''; // Törzs kiürítése, hogy ne duplikálódjanak az adatok
    // Az adatok tömbjén végighaladva létrehozzuk a táblázat sorait
    for (const currentElement of array) {
        const aktivsor = document.createElement('tr'); // Új sor létrehozása a táblázatban
        torzs.appendChild(aktivsor);

        // Szerző cella létrehozása és hozzáadása
        const szerzoCella = document.createElement('td');
        szerzoCella.innerHTML = currentElement.szerzo;
        aktivsor.appendChild(szerzoCella);

        // Korszak cella létrehozása és hozzáadása
        const korszakCella = document.createElement('td');
        korszakCella.innerHTML = currentElement.korszak;
        aktivsor.appendChild(korszakCella);

        // Szerelem cella létrehozása (első szerelem)
        const szerelemCella = document.createElement('td');
        szerelemCella.innerHTML = currentElement.szerelem1;
        
        // Ha nincs második szerelem, a cella szélességét kétszeresre állítjuk
        if (currentElement.szerelem2 === undefined) {
            szerelemCella.colSpan = 2; // A második szerelem cellája nem jelenik meg
        }
        aktivsor.appendChild(szerelemCella);

        // Ha van második szerelem, új cellát hozunk létre és hozzáadjuk
        if (currentElement.szerelem2 !== undefined) {
            const szerelem2Cella = document.createElement('td');
            szerelem2Cella.innerHTML = currentElement.szerelem2;
            aktivsor.appendChild(szerelem2Cella);
        }
    }
}

// Validációs függvény az űrlap mezőinek ellenőrzésére
function validateForm() {
    let validation = true;

    // Az input mezők értékeinek lekérése
    const szerzoValue = document.getElementById('kolto_nev').value; // Költő neve
    const korszakValue = document.getElementById('korszak').value; // Korszak
    const szerelem1Value = document.getElementById('szerelem1').value; // Első szerelem
    const szerelem2Value = document.getElementById('szerelem2').value; // Második szerelem
    const checkboxChecked = document.getElementById('masodik').checked; // Checkbox értéke, hogy van-e második szerelem

    // Hibák törlése előzőleg
    const errorElement = document.querySelectorAll('.error');
    for (const errorok of errorElement) {
        errorok.innerHTML = '';
    }

    // Validációs ellenőrzések az űrlap mezőkön
    if (szerzoValue === '') {
        const parent = document.getElementById('kolto_nev').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'A név megadása kötelező'; // Hibajelzés, ha a név üres
        validation = false;
    }
    if (korszakValue === '') {
        const parent = document.getElementById('korszak').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'A korszak megadása kötelező'; // Hibajelzés, ha a korszak üres
        validation = false;
    }
    if (szerelem1Value === '') {
        const parent = document.getElementById('szerelem1').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'Az első szerelem megadása kötelező'; // Hibajelzés, ha az első szerelem üres
        validation = false;
    }
    if (checkboxChecked && szerelem2Value === '') {
        const parent = document.getElementById('szerelem2').parentElement;
        const place_of_error = parent.querySelector('.error');
        place_of_error.innerHTML = 'A költőnek kötelező megadni a szerelmeit'; // Hibajelzés, ha a második szerelem üres és a checkbox be van pipálva
        validation = false;
    }

    return validation; // Visszaadja, hogy az űrlap érvényes-e
}

// Submit esemény figyelése az űrlapon
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Az alapértelmezett form submit viselkedés letiltása

    // Összetett validáció meghívása
    const isValid = validateForm();

    // Ha az űrlap érvényes, új adat hozzáadása a tömbhöz
    if (isValid) {
        const szerzoValue = document.getElementById('kolto_nev').value; // Költő neve
        const korszakValue = document.getElementById('korszak').value; // Korszak
        const szerelem1Value = document.getElementById('szerelem1').value; // Első szerelem
        const szerelem2Value = document.getElementById('szerelem2').value; // Második szerelem

        const newSzerzo = {
            szerzo: szerzoValue, // Szerző neve
            korszak: korszakValue, // Korszak
            szerelem1: szerelem1Value, // Első szerelem
            szerelem2: szerelem2Value || undefined, // Ha nincs második szerelem, undefined értéket adunk
        };

        array.push(newSzerzo); // Új költő hozzáadása az adatokhoz
        torzs.innerHTML = '';  // A táblázat törzsének ürítése
        Rendertorzs(); // A táblázat újrarenderelése
    }
});

// Az első renderelés végrehajtása, amikor a script először betöltődik
Rendertorzs();
