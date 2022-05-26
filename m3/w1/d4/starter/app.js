"use strict";
class CapoAbbigliamento {
    constructor(id, codProd, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codProd = codProd;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.saldo;
    }
    getAcquistoCapo() {
        this.saldo = this.saldo - this.prezzoivainclusa;
        return this.saldo;
    }
}
const url = 'json/Abbigliamento.json';
fetch(url)
    .then(res => res.json())
    .then(res => {
    let arrUser = [];
    for (let user of res) {
        user = new CapoAbbigliamento(user.id, user.codProd, user.collezione, user.capo, user.modello, user.quantita, user.colore, user.prezzoivaesclusa, user.prezzoivainclusa, user.disponibile, user.saldo);
        arrUser.push(user);
        console.log('Capo: ' + user.capo);
        console.log('Saldo capo: ' + user.getSaldoCapo() + ' €');
        console.log('Saldo dopo acquisto capo: ' + user.getAcquistoCapo() + ' €');
        console.log('________________________________________');
    }
    // ESEMPIO
    // console.log(arrUser[2].getSaldoCapo())
});
//# sourceMappingURL=app.js.map