var mostraData = new Date();
document.write(mostraData); // stampa Mon Jan 10 2022...

var data = new Date();

let giorno = data.getDate();
let anno = data.getFullYear();
let mese = data.getMonth();

document.write("<br><br>" + giorno); // stampa 10

document.write("<br><br> Oggi è il " + giorno + "-" + mese + "-" + anno); // stampa Oggi è il 10-0-2022


/* */

let nomeMese = new Date();

const meseItaliano = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

console.log('mese corrente = ' + meseItaliano[nomeMese.getMonth()]);


let meseCorretto = meseItaliano[nomeMese.getMonth()];

let dataCorretta = new Date();
let giornoCorretto = dataCorretta.getDate();
let annoCorretto = dataCorretta.getFullYear();

let dataItalia = giornoCorretto + " / " + meseCorretto + " / " + annoCorretto;

document.getElementById('mia_data').innerHTML = dataItalia;