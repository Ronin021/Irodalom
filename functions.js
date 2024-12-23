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

// Fejléc objektum, ami a táblázat oszlopainak nevét tárolja
const fejlecobjekt = {
    szerzo: 'Szerző neve', // Az első oszlop neve
    korszak: 'Korszak', // A második oszlop neve
    szerelem: 'Szerelmek', // A harmadik oszlop neve
};


// Általános függvény mezők létrehozására az ismétlődő kód elkerülésére
function createField(id, labelText, type = 'text') {
    const div = document.createElement('div'); // Létrehozunk egy div-et az adott mezőhöz
    div.classList.add('field'); // A divhez hozzárendeljük a "field" osztályt

    const label = document.createElement('label'); // Létrehozunk egy címkét (label)
    label.htmlFor = id; // Címke kapcsolása a mezőhöz
    label.innerText = labelText; // Címkéhez megadjuk a szöveget

    const input = document.createElement('input'); // Létrehozunk egy input mezőt
    input.type = type; // Beállítjuk a mező típusát
    input.id = id; // Azonosító beállítása
    input.name = id; // Név beállítása

    div.appendChild(label); // A címke hozzáadása a div-hez
    div.appendChild(input); // A mező hozzáadása a div-hez

    const errorDiv = document.createElement('div'); // Hibaüzenetekhez div
    errorDiv.classList.add('error'); // Hozzáadjuk az "error" osztályt
    div.appendChild(errorDiv); // Hiba div hozzáadása

    return div; // Visszaadjuk az elkészült mezőt
}


// Űrlap generálása az általános függvénnyel
function formGenerate() {
    const form = document.createElement('form'); // Űrlap létrehozása
    form.id = 'form'; // Azonosító beállítása

    // Mezők létrehozása és hozzáadása
    const fields = [
        createField('kolto_nev', 'Költő neve:'),
        createField('korszak', 'Korszak:'),
        createField('szerelem1', 'Szerelmek:'),
        createField('masodik', 'Volt másik szerelme?', 'checkbox'),
        createField('szerelem2', 'Második Szerelem neve:'),
    ];

    fields.forEach(field => form.appendChild(field)); // Mezők hozzáadása az űrlaphoz

    const gomb = document.createElement('button'); // Beküldés gomb
    gomb.type = 'submit'; // Gomb típusa
    gomb.innerText = 'Hozzáadás'; // Gomb szövege
    form.appendChild(gomb); // Gomb hozzáadása

    document.body.appendChild(form); // Az űrlap hozzáadása a dokumentumhoz
}

// Funkció a táblázat törzsének renderelésére
function Rendertorzs() {
    torzs.innerHTML = ''; // A táblázat törzsének kiürítése a duplikációk elkerülése érdekében
    // Az adatok tömbjén végighaladva létrehozzuk a táblázat sorait
    for (const currentElement of array) {
        const aktivsor = document.createElement('tr'); // Új sor létrehozása
        torzs.appendChild(aktivsor); // Az új sort hozzáadjuk a táblázat törzséhez

        // Szerző cella létrehozása és hozzáadása
        const szerzoCella = document.createElement('td'); // Új cella létrehozása a szerzőnek
        szerzoCella.innerHTML = currentElement.szerzo; // A cellába beírjuk a költő nevét
        aktivsor.appendChild(szerzoCella); // A cella hozzáadása a sorhoz

        // Korszak cella létrehozása és hozzáadása
        const korszakCella = document.createElement('td'); // Új cella létrehozása a korszaknak
        korszakCella.innerHTML = currentElement.korszak; // A cellába beírjuk a korszakot
        aktivsor.appendChild(korszakCella); // A cella hozzáadása a sorhoz

        // Szerelem cella létrehozása (első szerelem)
        const szerelemCella = document.createElement('td'); // Új cella létrehozása az első szerelemnek
        szerelemCella.innerHTML = currentElement.szerelem1; // A cellába beírjuk az első szerelmet

        // Ha nincs második szerelem, a cella szélességét kétszeresre állítjuk
        if (currentElement.szerelem2 === undefined) {
            szerelemCella.colSpan = 2; // A második szerelem celláját kihagyjuk, ha nincs
        }
        aktivsor.appendChild(szerelemCella); // A szerelem cella hozzáadása a sorhoz

        // Ha van második szerelem, új cellát hozunk létre és hozzáadjuk
        if (currentElement.szerelem2 !== undefined) {
            const szerelem2Cella = document.createElement('td'); // Új cella a második szerelemnek
            szerelem2Cella.innerHTML = currentElement.szerelem2; // A cellába beírjuk a második szerelmet
            aktivsor.appendChild(szerelem2Cella); // A második szerelem cellájának hozzáadása
        }
    }
}

// Validációs függvény az űrlap mezőinek ellenőrzésére
function validateForm() {
    let validation = true; // A validációs változó alapértelmezett értéke igaz

    // Az input mezők értékeinek lekérése
    const szerzoValue = document.getElementById('kolto_nev').value; // Költő neve
    const korszakValue = document.getElementById('korszak').value; // Korszak
    const szerelem1Value = document.getElementById('szerelem1').value; // Első szerelem
    const szerelem2Value = document.getElementById('szerelem2').value; // Második szerelem
    const checkboxChecked = document.getElementById('masodik').checked; // Checkbox értéke, hogy van-e második szerelem

    // Hibák törlése előzőleg
    const errorElement = document.querySelectorAll('.error'); // Az összes hibaüzenet keresése
    for (const errorok of errorElement) {
        errorok.innerHTML = ''; // A hibák eltüntetése
    }

    // Validációs ellenőrzések az űrlap mezőkön
    if (szerzoValue === '') {
        const parent = document.getElementById('kolto_nev').parentElement; // A költő név mező szülő elemének keresése
        const place_of_error = parent.querySelector('.error'); // Hibajelzés helyének keresése
        place_of_error.innerHTML = 'A név megadása kötelező'; // Hibajelzés, ha a név üres
        validation = false; // A validáció hamisra állítása
    }
    if (korszakValue === '') {
        const parent = document.getElementById('korszak').parentElement; // A korszak mező szülő elemének keresése
        const place_of_error = parent.querySelector('.error'); // Hibajelzés helyének keresése
        place_of_error.innerHTML = 'A korszak megadása kötelező'; // Hibajelzés, ha a korszak üres
        validation = false; // A validáció hamisra állítása
    }
    if (szerelem1Value === '') {
        const parent = document.getElementById('szerelem1').parentElement; // Az első szerelem mező szülő elemének keresése
        const place_of_error = parent.querySelector('.error'); // Hibajelzés helyének keresése
        place_of_error.innerHTML = 'Az első szerelem megadása kötelező'; // Hibajelzés, ha az első szerelem üres
        validation = false; // A validáció hamisra állítása
    }
    if (checkboxChecked && szerelem2Value === '') {
        const parent = document.getElementById('szerelem2').parentElement; // A második szerelem mező szülő elemének keresése
        const place_of_error = parent.querySelector('.error'); // Hibajelzés helyének keresése
        place_of_error.innerHTML = 'A költőnek kötelező megadni a szerelmeit'; // Hibajelzés, ha a második szerelem üres és a checkbox be van pipálva
        validation = false; // A validáció hamisra állítása
    }

    return validation; // Visszaadja, hogy az űrlap érvényes-e
}
