var kmPercorsi = prompt("Quanti km vuoi percorrere?");

var etaPasseggero = prompt("Quanti anni hai?");

var prezzoKm = 0.21;

var prezzoTotale = kmPercorsi * prezzoKm;
console.log("il prezzo totale è " + prezzoTotale);

prezzoTotale = prezzoTotale.toFixed(2);

var sconto = 0;



if ( etaPasseggero > 65) {
    console.log("il passeggero riceverà lo sconto del 40%");
    sconto = (prezzoTotale / 100) * 40; 
    sconto = sconto.toFixed(2)
} else if (etaPasseggero > 0 && etaPasseggero < 18 ) {
    sconto = (prezzoTotale / 100) * 20;
    sconto = sconto.toFixed(2)
    console.log("il passeggero riceverà lo sconto del 20% " + sconto);
} else {
    console.log("il passeggero non riceverà nessuno sconto");
}

var prezzoScontato = prezzoTotale - sconto;
console.log ("il prezzo scontato è " + prezzoScontato);

prezzoScontato = prezzoScontato.toFixed(2);

document.getElementById("kmPercorsi").innerHTML = "I km che il passegero desidera percorrere: " + kmPercorsi;
document.getElementById("etaPasseggero").innerHTML = "Gli anni che il passegero ha: " + etaPasseggero;

document.getElementById("prezzoKm").innerHTML = prezzoKm + "centesimi è il prezzo del biglietto al km";


document.getElementById("prezzoTotale").innerHTML = prezzoTotale + " è il prezzo totale dato da i km Percorsi * prezzo al Km 0.21";

document.getElementById("scontoOver").innerHTML = prezzoScontato + " il passeggero riceverà lo sconto del 40% se è over 65enne";
document.getElementById("scontoMinorenne").innerHTML = prezzoScontato + " il passeggero riceverà lo sconto del 20% se è minorenne";








