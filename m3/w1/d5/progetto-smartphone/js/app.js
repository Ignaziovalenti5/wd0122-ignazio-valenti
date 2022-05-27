"use strict";
// INTERFACE -------------------------------------------------------
// CLASSES ---------------------------------------------------------
class firstUser {
    constructor(carica) {
        this.numeroChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamataAlMin = 0.2;
        let costoChiamata = minutiDurata * costoChiamataAlMin;
        if (this.carica >= costoChiamata) {
            this.numeroChiamate++;
            this.carica = Math.round((this.carica - costoChiamata) * 100) / 100;
        }
        else {
            console.log('%cCredito insufficiente!', 'color:red; font-size:20px');
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class secondUser {
    constructor(carica) {
        this.numeroChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamataAlMin = 0.2;
        let costoChiamata = minutiDurata * costoChiamataAlMin;
        if (this.carica >= costoChiamata) {
            this.numeroChiamate++;
            this.carica = Math.round((this.carica - costoChiamata) * 100) / 100;
        }
        else {
            console.log('%cCredito insufficiente!', 'color:red; font-size:20px');
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class thirdUser {
    constructor(carica) {
        this.numeroChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamataAlMin = 0.2;
        let costoChiamata = minutiDurata * costoChiamataAlMin;
        if (this.carica >= costoChiamata) {
            this.numeroChiamate++;
            this.carica = Math.round((this.carica - costoChiamata) * 100) / 100;
        }
        else {
            console.log('%cCredito insufficiente!', 'color:red; font-size:20px');
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// TEST ON CONSOLE -------------------------------------------------
let userOne = new firstUser(5);
console.log('--- PRIMO UTENTE ---');
console.log('Saldo iniziale: ' + userOne.carica + '€');
userOne.ricarica(10); //ricarica 10 €
console.log('Saldo dopo ricarica: ' + userOne.carica + '€');
userOne.chiamata(5); //chiamata da 5 minuti
userOne.chiamata(3); //chiamata da 3 minuti
userOne.chiamata(2); //chiamata da 2 minuti
userOne.chiamata(4); //chiamata da 4 minuti
console.log('Saldo dopo chiamata: ' + userOne.numero404() + '€');
console.log('Numero chiamate effettuate: ' + userOne.getNumeroChiamate());
userOne.azzeraChiamate(); // azzeramento chiamate
console.log('N° chiamate dopo azzeramento: ' + userOne.numeroChiamate);
console.log('----------------------------------------');
let userTwo = new secondUser(10);
console.log('--- SECONDO UTENTE ---');
console.log('Saldo iniziale: ' + userTwo.carica + '€');
userTwo.ricarica(10); //ricarica 10 €
console.log('Saldo dopo ricarica: ' + userTwo.carica + '€');
userTwo.chiamata(5); //chiamata da 5 minuti
userTwo.chiamata(3); //chiamata da 3 minuti
console.log('Saldo dopo chiamata: ' + userTwo.numero404() + '€');
console.log('Numero chiamate effettuate: ' + userTwo.getNumeroChiamate());
userTwo.azzeraChiamate(); // azzeramento chiamate
console.log('N° chiamate dopo azzeramento: ' + userTwo.numeroChiamate);
console.log('----------------------------------------');
let userThree = new thirdUser(0);
console.log('--- TERZO UTENTE ---');
console.log('Saldo iniziale: ' + userThree.carica + '€');
userThree.ricarica(10); //ricarica 10 €
console.log('Saldo dopo ricarica: ' + userThree.carica + '€');
userThree.chiamata(3); //chiamata da 3 minuti
userThree.chiamata(2); //chiamata da 2 minuti
userThree.chiamata(4); //chiamata da 4 minuti
console.log('Saldo dopo chiamata: ' + userThree.numero404() + '€');
console.log('Numero chiamate effettuate: ' + userThree.getNumeroChiamate());
userThree.azzeraChiamate(); // azzeramento chiamate
console.log('N° chiamate dopo azzeramento: ' + userThree.numeroChiamate);
console.log('----------------------------------------');
let user = new firstUser(5);
let random = Math.floor((Math.random() * 10) + 1);
// let costo = user.chiamata(random)
// user.chiamata(random)
// user.chiamata(random)
// console.log(user.carica)
// ---------------------------------------------
// GLOBAL VARIABLES ----------------------------------------------
let screenSaver = document.querySelector('#screen-saver');
let lockSmartphone = document.querySelector('.lock-smartphone');
let firstPage = document.querySelector('#first-page');
let pageSaldo = document.querySelector('#page-saldo');
let pageRicarica = document.querySelector('#page-ricarica');
let appChiamate = document.querySelector('#app-chiamate');
let appRicarica = document.querySelector('#app-ricarica');
let appSaldo = document.querySelector('#app-saldo');
let callBtn = document.querySelector('#call');
// ---------------------------------------------
// TIME & DATE SETUP ----------------------------------------------
setInterval(() => {
    function setTime(_date, _time) {
        let targetDate = document.querySelector(_date);
        let targetTime = document.querySelector(_time);
        let now = new Date().toLocaleString('it-IT');
        let date;
        let time;
        if (now.length == 19) {
            date = now.slice(0, 9);
            time = now.slice(11, 16);
        }
        else if (now.length == 20) {
            date = now.slice(0, 10);
            time = now.slice(12, 17);
        }
        targetDate.innerText = String(date);
        targetTime.innerText = String(time);
    }
    setTime('#date', '#time');
}, 1000);
// ---------------------------------------------
// UNLOCK BUTTON ---------------------------------------------------
let unlockBtn = document.querySelector('.unlock');
let lock = document.querySelector('#lock');
unlockBtn === null || unlockBtn === void 0 ? void 0 : unlockBtn.addEventListener('click', function () {
    lock.classList.remove('bi-lock-fill');
    lock.classList.add('bi-unlock-fill');
    setTimeout(() => {
        lockSmartphone === null || lockSmartphone === void 0 ? void 0 : lockSmartphone.classList.remove('d-none');
        firstPage.classList.remove('d-none');
        screenSaver.classList.add('d-none');
    }, 800);
});
// ---------------------------------------------
// LOCK BUTTON ---------------------------------------------------
lockSmartphone === null || lockSmartphone === void 0 ? void 0 : lockSmartphone.addEventListener('click', function () {
    lockSmartphone === null || lockSmartphone === void 0 ? void 0 : lockSmartphone.classList.add('d-none');
    lock.classList.add('bi-lock-fill');
    lock.classList.remove('bi-unlock-fill');
    screenSaver.classList.remove('d-none');
    firstPage.classList.add('d-none');
    firstPage.classList.remove('filter-blur');
    pageSaldo.classList.add('d-none');
    pageRicarica.classList.add('d-none');
});
// ---------------------------------------------
// APP SALDO ---------------------------------------------------
appSaldo === null || appSaldo === void 0 ? void 0 : appSaldo.addEventListener('click', function () {
    pageSaldo === null || pageSaldo === void 0 ? void 0 : pageSaldo.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let closeBtn = document.querySelector('.btn-close');
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        pageSaldo.classList.add('d-none');
        firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.remove('filter-blur');
    });
    let saldoText = document.querySelector('#saldo');
    let title = document.querySelector('.title');
    title.innerText = 'Il tuo saldo è di:';
    let saldo = user.numero404();
    saldoText.innerText = String(saldo + ' €');
});
// ---------------------------------------------
// APP CHIAMATE ---------------------------------------------------
appChiamate === null || appChiamate === void 0 ? void 0 : appChiamate.addEventListener('click', function () {
    pageSaldo === null || pageSaldo === void 0 ? void 0 : pageSaldo.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let title = document.querySelector('.title');
    let closeBtn = document.querySelector('.btn-close');
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        pageSaldo.classList.add('d-none');
        firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.remove('filter-blur');
    });
    let saldoText = document.querySelector('#saldo');
    title.innerText = '';
    title.innerText = `N° chiamate effettuate: ${user.numeroChiamate}`;
    saldoText.innerText = '';
});
// ---------------------------------------------
// APP RICARICA ---------------------------------------------------
appRicarica === null || appRicarica === void 0 ? void 0 : appRicarica.addEventListener('click', () => {
    let inputRicarica = document.querySelector('#input-ricarica');
    inputRicarica === null || inputRicarica === void 0 ? void 0 : inputRicarica.classList.remove('d-none');
    inputRicarica.value = '';
    let ricaricaBtn = document.querySelector('#ricarica');
    ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.classList.remove('d-none');
    let closeBtn = document.querySelector('.close-ricarica');
    pageRicarica.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let ricaricaTitle = document.querySelector('.ricarica-title');
    ricaricaTitle.innerText = 'Ricarica da:';
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        pageRicarica.classList.add('d-none');
        firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.remove('filter-blur');
    });
    ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.addEventListener('submit', function ricarica() {
        ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.removeEventListener('submit', ricarica);
        let inputRicarica = document.querySelector('#input-ricarica');
        let valoreRicarica = Number(inputRicarica.value);
        console.log(valoreRicarica);
        user.ricarica(valoreRicarica);
        ricaricaTitle.innerText = 'Hai effettuato una ricarica da: ' + valoreRicarica + ' €';
        inputRicarica === null || inputRicarica === void 0 ? void 0 : inputRicarica.classList.add('d-none');
        ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.classList.add('d-none');
    });
});
// ---------------------------------------------
// CALL BUTTON ---------------------------------------------------
callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener('click', function () {
    pageSaldo === null || pageSaldo === void 0 ? void 0 : pageSaldo.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let closeBtn = document.querySelector('.btn-close');
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        pageSaldo.classList.add('d-none');
        firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.remove('filter-blur');
    });
    let saldoText = document.querySelector('#saldo');
    let title = document.querySelector('.title');
    saldoText.style.fontSize = '15px';
    let random = Math.floor((Math.random() * 10) + 1);
    let costo = Math.round((random * 0.2) * 100) / 100;
    user.chiamata(random);
    if (costo > user.numero404()) {
        title.innerText = '';
        saldoText.innerHTML = '';
        saldoText.innerHTML = 'Impossibile effettuare la Chiamata <br> Controllare il credito!';
    }
    else {
        title.innerText = '';
        title.innerText = 'Chiamata...';
        saldoText.innerHTML = '';
        saldoText.innerHTML = `Durata: ${random} minuti <br> Costo chiamata: ${costo} € <br> Saldo Attuale: ${user.numero404()}`;
    }
});
//# sourceMappingURL=app.js.map