
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
Rendertorzs(); // Táblázat először történő megjelenítése