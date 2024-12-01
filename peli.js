function script1(){
// Arvotaan satunnainen luku väliltä 0-100
const arvattavaLuku = Math.floor(Math.random() * 101);

// Funktio pelin pelaamiseen
function arvauspeli() {
    let arvaus;
    
    while (true) {
        arvaus = prompt("Arvaa luku (0-100):");
        
        // Tarkista, onko käyttäjä halunnut lopettaa pelin
        if (arvaus === null) {
            alert("Kiitos pelaamisesta. Näkemiin!");
            break;
        }
        
        arvaus = parseInt(arvaus);
        
        // Tarkista, onko arvaus kelvollinen
        if (isNaN(arvaus) || arvaus < 0 || arvaus > 100) {
            alert("Virheellinen syöte. Syötä luku väliltä 0-100.");
            continue;
        }
        
        // Tarkista arvaus
        if (arvaus < arvattavaLuku) {
            alert("Liian vähän.");
        } else if (arvaus > arvattavaLuku) {
            alert("Liian paljon.");
        } else {
            alert("Onnittelut, arvasit oikein!");
            break;
        }
    }
}

// Käynnistä peli
arvauspeli();
}