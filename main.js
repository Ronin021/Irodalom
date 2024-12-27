// Adatok tömbje, amely tartalmazza a költők adatait (szerző, korszak, szerelmek)
const array = [
    { szerzo: 'Balassi Bálint', korszak: 'reformáció', szerelem1: 'Losonczy Anna', szerelem2: 'Dobó Krisztina' },
    { szerzo: 'Csokonai Vitéz Mihály', korszak: 'felvilágosodás', szerelem1: 'Vajda Juliána' },
    { szerzo: 'Petőfi Sándor', korszak: 'magyar romantika', szerelem1: 'Mednyánszky Berta', szerelem2: 'Szendrey Júlia' },
    { szerzo: 'Ady Endre', korszak: '20. század', szerelem1: 'Léda' },
];

// Létrehozzuk a táblázatot
const table = document.createElement('table');
document.body.appendChild(table); // A táblázat hozzáadása az oldalhoz

// Fejléc sor létrehozása
const fejlecSor = document.createElement('tr');
table.appendChild(fejlecSor); // Fejléc sor hozzáadása a táblázathoz

// Fejléc szövegek iterációval történő beállítása
for (var key in fejlecobjekt) {
    var fejlecSzoveg = fejlecobjekt[key]; // Objektum adott kulcsának értéke
    const fejlecCella = document.createElement('th');
    fejlecCella.innerHTML = fejlecSzoveg; // Fejléc szövegének beállítása
    fejlecSor.appendChild(fejlecCella); // Fejléc cella hozzáadása a sorhoz
}


// Táblázat törzs létrehozása
const torzs = document.createElement('tbody');
table.appendChild(torzs); // Törzs hozzáadása a táblázathoz

formGenerate(); // Űrlap generálása


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
        Rendertorzs(); // Táblázat újrarenderelése
    }
});

Rendertorzs(); // Táblázat kezdeti renderelése
