// acquisizione input 
var kmPercorsi = parseInt(prompt("Quanti km vuoi percorrere?"));

var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
// validazione input 
if (Number.isNaN(etaPasseggero) || Number.isNaN(kmPercorsi))  {
    alert ("Il numero inserito non è valido");

} else  { 
// elaborazione input 
    var prezzoKm = 0.21;

    var prezzoTotale = kmPercorsi * prezzoKm;
    console.log("il prezzo totale è " + prezzoTotale + " €");

    prezzoTotale = prezzoTotale.toFixed(2);

    var sconto = 0;

    var prezzoScontato = prezzoTotale - sconto;
   
    prezzoScontato = prezzoScontato.toFixed(2);
    //console.log ("il prezzo scontato è " + prezzoScontato);

    if ( etaPasseggero > 65) {
        scontoOver = (prezzoTotale / 100) * 40; 
        scontoOver = scontoOver.toFixed(2)
        console.log("risparmi " + scontoOver + " €");
        var prezzoScontatoOver = prezzoTotale - scontoOver;
        prezzoScontatoOver = prezzoScontatoOver.toFixed(2);
        console.log("per gli over 65 il prezzo scontato del 40% è " + prezzoScontatoOver  + " €");

        document.getElementById("scontoOver").innerHTML = prezzoScontatoOver + " € è il prezzo scontato";
        
    } else if (etaPasseggero > 0 && etaPasseggero < 18 ) {
        scontoJunior = (prezzoTotale / 100) * 20;
        scontoJunior = scontoJunior.toFixed(2)
        console.log("risparmi " + scontoJunior + " €");

        var prezzoScontatoJunior = prezzoTotale - scontoJunior;
        prezzoScontatoJunior = prezzoScontatoJunior.toFixed(2);

        console.log("per i minorenni il prezzo scontato del 20% è " + prezzoScontatoJunior + " €");

        document.getElementById("scontoMinorenne").innerHTML = prezzoScontatoJunior + " € è il prezzo scontato";
        
    } else {
        console.log("il passeggero non riceverà nessuno sconto");
        document.getElementById("prezzoTotale").innerHTML = prezzoTotale + " € è il prezzo totale";
    }

    /*var prezzoScontato = prezzoTotale - sconto;

    prezzoScontato = prezzoScontato.toFixed(2);
    console.log ("il prezzo scontato è " + prezzoScontato);*/


    // visualizzazione output
    document.getElementById("kmPercorsi").innerHTML = "I km che il passeggero desidera percorrere: " + kmPercorsi;
    document.getElementById("etaPasseggero").innerHTML = "Gli anni che il passeggero ha: " + etaPasseggero;

    document.getElementById("prezzoKm").innerHTML = prezzoKm + " € è il prezzo del biglietto al km";

    /*document.getElementById("prezzoTotale").innerHTML = prezzoTotale + " € è il prezzo totale";

    document.getElementById("scontoOver").innerHTML = prezzoScontato + " € il passeggero riceverà lo sconto del 40% se è over 65enne";
    document.getElementById("scontoMinorenne").innerHTML = prezzoScontato + " € il passeggero riceverà lo sconto del 20% se è minorenne";*/

    
}











