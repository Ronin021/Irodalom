// Adatok tömbje, amely tartalmazza a költők adatait (szerző, korszak, szerelmek)
const array = [
    { szerzo: 'Balassi Bálint', korszak: 'reformáció', szerelem1: 'Losonczy Anna', szerelem2: 'Dobó Krisztina' },
    { szerzo: 'Csokonai Vitéz Mihály', korszak: 'felvilágosodás', szerelem1: 'Vajda Juliána' },
    { szerzo: 'Petőfi Sándor', korszak: 'magyar romantika', szerelem1: 'Mednyánszky Berta', szerelem2: 'Szendrey Júlia' },
    { szerzo: 'Ady Endre', korszak: '20. század', szerelem1: 'Léda' },
];

// Fejléc objektum, ami a táblázat oszlopainak nevét tárolja
const fejlecobjekt = {
    szerzo: 'Szerző neve',
    korszak: 'Korszak',
    szerelem: 'Szerelmek',
};

/**
 * 
 * @param {*} id - A mező azonosítója, amely az input és a címke elemhez is társítva lesz
 * @param {*} labelText - A mezőhöz tartozó címke szövege
 * @param {*} type - A mező típusa, alapértelmezés szerint 'text' (pl. 'text', 'checkbox', stb.)
 * @returns - Visszaad egy div elemet, amely tartalmazza az input mezőt, a címkét és a hibaüzenet helyét
 */
// Általános függvény mezők létrehozására az ismétlődő kód elkerülésére
function createField(id, labelText, type = 'text') {
    const div = document.createElement('div');
    div.classList.add('field'); // Div konténer a mezőnek

    const label = document.createElement('label');
    label.htmlFor = id; // Label összekötése a mezővel
    label.innerText = labelText; // Label szövegének beállítása

    const input = document.createElement('input');
    input.type = type; // Mező típusa (szöveg vagy checkbox)
    input.id = id;
    input.name = id;

    div.appendChild(label); // Label hozzáadása a divhez
    div.appendChild(input); // Input mező hozzáadása a divhez

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error'); // Hibamező létrehozása
    div.appendChild(errorDiv); // Hibamező hozzáadása a divhez

    return div;
}


/**
 * 
 */
function formGenerate(){
    // Tömb a form mezőinek meghatározásához
    const formCellak = [
        { id: "kolto_nev", label: "Költő neve:", type: "text"}, // Az első mező
        { id: "korszak", label: "Korszak:", type: "text"}, // A második mező
        { id: "szerelem1", label: "Szerelme:", type: "text"}, // A harmadik mező
        { id: "masodik", label: "Volt másik szerelme?", type: "checkbox"}, // A negyedik mező (checkbox)
        { id: "szerelem2", label: "Második szerelem neve:", type: "text"} // Az ötödik mező
    ];
    
    // Új form létrehozása
    const form = document.createElement('form');
    form.id = 'form'; // Azonosító beállítása
    document.body.appendChild(form); // A form hozzáadása a body-hoz
    
   // Iteráció a formCellak tömb elemein
   for (const cella of formCellak) {
    // Mező létrehozása a createField függvény segítségével
    const fieldDiv = createField(cella.id, cella.label, cella.type);
    form.appendChild(fieldDiv); // A létrehozott mező hozzáadása a formhoz
}
    // Submit gomb létrehozása
    const gombe = document.createElement('button');
    gombe.type = 'submit'; // Gomb típusának beállítása
    gombe.innerText = 'Hozzáadás'; // Gomb felirata
    form.appendChild(gombe); // A gomb hozzáadása a formhoz
}


/**
 * 
 */
// Táblázat törzs renderelése
function Rendertorzs() {
    torzs.innerHTML = ''; // Táblázat törzs kiürítése
    for (const currentElement of array) {
        const aktivsor = document.createElement('tr');
        torzs.appendChild(aktivsor); // Új sor hozzáadása a törzshöz

        const szerzoCella = document.createElement('td');
        szerzoCella.innerHTML = currentElement.szerzo; // Szerző beállítása
        aktivsor.appendChild(szerzoCella); // Cella hozzáadása a sorhoz

        const korszakCella = document.createElement('td');
        korszakCella.innerHTML = currentElement.korszak; // Korszak beállítása
        aktivsor.appendChild(korszakCella); // Cella hozzáadása a sorhoz

        const szerelemCella = document.createElement('td');
        szerelemCella.innerHTML = currentElement.szerelem1; // Első szerelem beállítása

        if (currentElement.szerelem2 === undefined) {
            szerelemCella.colSpan = 2; // Oszlop összevonása, ha nincs második szerelem
        }
        aktivsor.appendChild(szerelemCella); // Cella hozzáadása a sorhoz

        if (currentElement.szerelem2 !== undefined) {
            const szerelem2Cella = document.createElement('td');
            szerelem2Cella.innerHTML = currentElement.szerelem2; // Második szerelem beállítása
            aktivsor.appendChild(szerelem2Cella); // Cella hozzáadása a sorhoz
        }
    }
}
/**
 * 
 * @param {string} fieldId - Az űrlap mezőjének azonosítója (ID), amelyhez a hibaüzenetet rendelhetjük.
 * @param {string} errorMessage - A megjelenítendő hibaüzenet szövege.
 */
// Általános függvény a hibaüzenetek beállítására
function setError(fieldId, errorMessage) {
    const parent = document.getElementById(fieldId).parentElement; // Mező szülője
    const errorElement = parent.querySelector('.error'); // Hibamező kiválasztása
    errorElement.innerHTML = errorMessage; // Hibaüzenet beállítása
}
/**
 * 
 * @returns {boolean} - A validációs eredmény: igaz, ha az űrlap érvényes, hamis, ha nem.
 */
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
