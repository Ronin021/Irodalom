

// Létrehozzuk a táblázatot
const table = document.createElement('table'); // Új táblázat létrehozása
document.body.appendChild(table); // A táblázat hozzáadása a body elemhez

// Fejléc sor létrehozása
const fejlecSor = document.createElement('tr'); // Új sor létrehozása a fejléchez
table.appendChild(fejlecSor); // Fejléchez tartozó sor hozzáadása a táblázathoz

// Fejléc szövegek iterációval történő beállítása
for (const fejlecSzoveg of [fejlecobjekt.szerzo, fejlecobjekt.korszak, fejlecobjekt.szerelem]) { 
    // Fejléc szövegek hozzáadása a megfelelő cellákhoz
    const fejlecCella = document.createElement('th'); // Új fejléc cella létrehozása
    fejlecCella.innerHTML = fejlecSzoveg; // Fejléc szövegének beállítása
    fejlecSor.appendChild(fejlecCella); // Fejléc cella hozzáadása a sorhoz
}

// Táblázat törzs létrehozása
const torzs = document.createElement('tbody'); // Új táblázat törzs létrehozása
table.appendChild(torzs); // Táblázat törzsének hozzáadása a táblázathoz





formGenerate(); // Űrlap megjelenítése

// Submit esemény figyelése az űrlapon
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Alapértelmezett viselkedés megakadályozása

    const isValid = validateForm(); // Validáció meghívása

    if (isValid) {
        // Új költő adatok lekérése az űrlapból
        const szerzoValue = document.getElementById('kolto_nev').value;
        const korszakValue = document.getElementById('korszak').value;
        const szerelem1Value = document.getElementById('szerelem1').value;
        const szerelem2Value = document.getElementById('szerelem2').value;

        const newSzerzo = {
            szerzo: szerzoValue,
            korszak: korszakValue,
            szerelem1: szerelem1Value,
            szerelem2: szerelem2Value || undefined, // Ha nincs második szerelem, undefined lesz
        };

        array.push(newSzerzo); // Új költő hozzáadása az adatokhoz
        torzs.innerHTML = ''; // Táblázat törzs kiürítése
        Rendertorzs(array); // Táblázat újrarenderelése
    }
});

Rendertorzs(array); // Táblázat kezdeti renderelése