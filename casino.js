function casino(){
// Alustetaan käyttäjän saldo
let saldo = 100;

// Funktio pelin pelaamiseen
function pelaaKasinopelia() {
    // Peli jatkuu kunnes saldo loppuu
    while (saldo > 0) {
        // Kysytään käyttäjältä panosta
        let panos = parseInt(prompt("Syötä panoksesi (saldo: " + saldo + "):"));
        
        // Tarkistetaan, onko annettu panos kelvollinen
        if (isNaN(panos) || panos <= 0 || panos > saldo) {
            alert("Virheellinen panos. Syötä kelvollinen panos.");
            continue;
        }

        // Arvotaan satunnainen luku väliltä 1-10
        let arvattavaNumero = Math.floor(Math.random() * 2) + 1;

        // Kysytään käyttäjältä arvaus
        let arvaus = parseInt(prompt("valitse luku 1 tai 2:"));

        // Tarkistetaan arvaus
        if (arvaus === arvattavaNumero) {
            saldo += panos; // Voitto, lisätään panos saldon
            alert("Onnittelut, arvasit oikein! Voitit " + panos + "!");
        } else {
            saldo -= panos; // Häviö, vähennetään panos saldosta
            alert("Väärin! Oikea numero oli " + arvattavaNumero + ". Menetit " + panos + ".");
        }

        // Näytetään uusi saldo
        alert("Uusi saldo: " + saldo);
    }

    // Kun saldo on 0, peli päättyy
    alert("Saldo on nolla. Peli päättyy!");
}

// Käynnistetään peli
pelaaKasinopelia();

}