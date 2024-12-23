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
function Rendertorzs(array) {
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
// Általános függvény a hibaüzenetek beállítására
function setError(fieldId, errorMessage) {
    const parent = document.getElementById(fieldId).parentElement; // Mező szülője
    const errorElement = parent.querySelector('.error'); // Hibamező kiválasztása
    errorElement.innerHTML = errorMessage; // Hibaüzenet beállítása
}

// Validációs függvény az űrlap mezőinek ellenőrzésére
function validateForm() {
    let validation = true; // Kezdetben érvényes az űrlap

    const szerzoValue = document.getElementById('kolto_nev').value;
    const korszakValue = document.getElementById('korszak').value;
    const szerelem1Value = document.getElementById('szerelem1').value;
    const szerelem2Value = document.getElementById('szerelem2').value;
    const checkboxChecked = document.getElementById('masodik').checked;

    // Hibák törlése az ellenőrzés elején
    document.querySelectorAll('.error').forEach(error => (error.innerHTML = ''));

    // Mezők validációja
    if (szerzoValue === '') {
        setError('kolto_nev', 'A név megadása kötelező');
        validation = false;
    }
    if (korszakValue === '') {
        setError('korszak', 'A korszak megadása kötelező');
        validation = false;
    }
    if (szerelem1Value === '') {
        setError('szerelem1', 'Az első szerelem megadása kötelező');
        validation = false;
    }
    if (checkboxChecked && szerelem2Value === '') {
        setError('szerelem2', 'A költőnek kötelező megadni a szerelmeit');
        validation = false;
    }

    return validation; // Visszatérés az érvényességgel
}
