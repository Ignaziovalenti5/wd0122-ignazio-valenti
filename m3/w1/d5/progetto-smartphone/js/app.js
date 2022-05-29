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
// ---------------------------------------------
// GLOBAL VARIABLES ----------------------------------------------
let smartphone = document.querySelector('.smartphone');
let screenSaver = document.querySelector('#screen-saver');
let lockSmartphone = document.querySelector('.lock-smartphone');
let firstPage = document.querySelector('#first-page');
let pageSaldo = document.querySelector('#page-saldo');
let pageRicarica = document.querySelector('#page-ricarica');
let pageChiamate = document.querySelector('#page-chiamate');
let recentCalls = document.querySelector('.recent-calls');
let azzeraBtn = document.querySelector('#azzera');
let timeMini = document.querySelector('#time-mini');
let dateMini = document.querySelector('#date-mini');
let appChiamate = document.querySelector('#app-chiamate');
let appRicarica = document.querySelector('#app-ricarica');
let appSaldo = document.querySelector('#app-saldo');
let callBtn = document.querySelector('#call');
let contatti = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolf",
    "Glenna Reichert",
    "Clementina DuBuque"
];
// ---------------------------------------------
// TIME & DATE SETUP ----------------------------------------------
function setTime(_date, _time) {
    let targetDate = document.querySelector(_date);
    let targetTime = document.querySelector(_time);
    let now = new Date().toLocaleString('it-IT');
    let date = '';
    let time = '';
    if (now.length == 19) {
        date = now.slice(0, 9);
        time = now.slice(11, 16);
    }
    else if (now.length == 20) {
        date = now.slice(0, 10);
        time = now.slice(12, 17);
    }
    targetDate.innerText = date;
    targetTime.innerText = time;
}
setInterval(() => {
    setTime('#date', '#time');
}, 1000);
setInterval(() => {
    setTime('#p-date', '#p-time');
}, 1000);
// ---------------------------------------------
// UNLOCK BUTTON ---------------------------------------------------
let unlockBtn = document.querySelector('.unlock');
let lock = document.querySelector('#lock');
unlockBtn === null || unlockBtn === void 0 ? void 0 : unlockBtn.addEventListener('click', function () {
    lock.classList.remove('bi-lock-fill');
    lock.classList.add('bi-unlock-fill');
    appChiamate === null || appChiamate === void 0 ? void 0 : appChiamate.classList.remove('d-none');
    appRicarica === null || appRicarica === void 0 ? void 0 : appRicarica.classList.remove('d-none');
    appSaldo === null || appSaldo === void 0 ? void 0 : appSaldo.classList.remove('d-none');
    setTimeout(() => {
        timeMini.classList.remove('d-none');
        dateMini.classList.remove('d-none');
        lockSmartphone === null || lockSmartphone === void 0 ? void 0 : lockSmartphone.classList.remove('d-none');
        firstPage.classList.remove('d-none');
        screenSaver.classList.add('d-none');
    }, 800);
});
// ---------------------------------------------
// LOCK BUTTON ---------------------------------------------------
lockSmartphone === null || lockSmartphone === void 0 ? void 0 : lockSmartphone.addEventListener('click', function lockSmart() {
    lockSmartphone === null || lockSmartphone === void 0 ? void 0 : lockSmartphone.classList.add('d-none');
    smartphone === null || smartphone === void 0 ? void 0 : smartphone.classList.add('img-bg');
    timeMini.classList.add('d-none');
    dateMini.classList.add('d-none');
    lock.classList.add('bi-lock-fill');
    lock.classList.remove('bi-unlock-fill');
    screenSaver.classList.remove('d-none');
    firstPage.classList.add('d-none');
    firstPage.classList.remove('filter-blur');
    pageSaldo.classList.add('d-none');
    pageRicarica.classList.add('d-none');
    pageChiamate.classList.add('d-none');
});
// ---------------------------------------------
// APP SALDO ---------------------------------------------------
appSaldo === null || appSaldo === void 0 ? void 0 : appSaldo.addEventListener('click', function () {
    callBtn === null || callBtn === void 0 ? void 0 : callBtn.removeEventListener('click', call);
    pageSaldo === null || pageSaldo === void 0 ? void 0 : pageSaldo.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let closeBtn = document.querySelector('.btn-close');
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener('click', call);
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
    pageChiamate === null || pageChiamate === void 0 ? void 0 : pageChiamate.classList.remove('d-none');
    smartphone === null || smartphone === void 0 ? void 0 : smartphone.classList.remove('img-bg');
    smartphone === null || smartphone === void 0 ? void 0 : smartphone.classList.add('bg-dark');
    appChiamate === null || appChiamate === void 0 ? void 0 : appChiamate.classList.add('d-none');
    appRicarica === null || appRicarica === void 0 ? void 0 : appRicarica.classList.add('d-none');
    appSaldo === null || appSaldo === void 0 ? void 0 : appSaldo.classList.add('d-none');
    callBtn === null || callBtn === void 0 ? void 0 : callBtn.classList.add('d-none');
    let callTitle = document.querySelector('.chiamate-title');
    callTitle.innerText = `N° chiamate effettuate: ${user.numeroChiamate}`;
    let closeBtn = document.querySelector('.close-chiamate');
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        smartphone === null || smartphone === void 0 ? void 0 : smartphone.classList.add('img-bg');
        smartphone === null || smartphone === void 0 ? void 0 : smartphone.classList.remove('bg-dark');
        appChiamate === null || appChiamate === void 0 ? void 0 : appChiamate.classList.remove('d-none');
        appRicarica === null || appRicarica === void 0 ? void 0 : appRicarica.classList.remove('d-none');
        appSaldo === null || appSaldo === void 0 ? void 0 : appSaldo.classList.remove('d-none');
        callBtn === null || callBtn === void 0 ? void 0 : callBtn.classList.remove('d-none');
        pageChiamate === null || pageChiamate === void 0 ? void 0 : pageChiamate.classList.add('d-none');
    });
    azzeraBtn === null || azzeraBtn === void 0 ? void 0 : azzeraBtn.addEventListener('click', function () {
        user.azzeraChiamate();
        recentCalls.innerHTML = '';
        callTitle.innerText = `N° chiamate effettuate: ${user.numeroChiamate}`;
    });
});
// ---------------------------------------------
// APP RICARICA ---------------------------------------------------
appRicarica === null || appRicarica === void 0 ? void 0 : appRicarica.addEventListener('click', () => {
    callBtn === null || callBtn === void 0 ? void 0 : callBtn.removeEventListener('click', call);
    let selectRicarica = document.querySelector('#select-ricarica');
    selectRicarica === null || selectRicarica === void 0 ? void 0 : selectRicarica.classList.remove('d-none');
    let ricaricaBtn = document.querySelector('#ricarica');
    ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.classList.remove('d-none');
    let closeBtn = document.querySelector('.close-ricarica');
    pageRicarica.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let ricaricaTitle = document.querySelector('.ricarica-title');
    ricaricaTitle.innerText = 'Ricarica da:';
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener('click', call);
        pageRicarica.classList.add('d-none');
        firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.remove('filter-blur');
    });
    ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.addEventListener('submit', function ricarica() {
        ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.removeEventListener('submit', ricarica);
        let valoreRicarica = Number(selectRicarica.value);
        user.ricarica(valoreRicarica);
        ricaricaTitle.innerText = 'Hai effettuato una ricarica da: ' + valoreRicarica + ' €';
        selectRicarica === null || selectRicarica === void 0 ? void 0 : selectRicarica.classList.add('d-none');
        ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.classList.add('d-none');
    });
});
// ---------------------------------------------
// CALL BUTTON ---------------------------------------------------
function call() {
    callBtn === null || callBtn === void 0 ? void 0 : callBtn.removeEventListener('click', call);
    pageSaldo === null || pageSaldo === void 0 ? void 0 : pageSaldo.classList.remove('d-none');
    firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.add('filter-blur');
    let randomNum2 = Math.floor((Math.random() * 10));
    let randomContact = contatti[randomNum2];
    let nameCallerElement = document.createElement('h1');
    nameCallerElement.innerText = randomContact;
    let closeBtn = document.querySelector('.btn-close');
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
        callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener('click', call);
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
        title === null || title === void 0 ? void 0 : title.append(nameCallerElement);
        saldoText.innerHTML = '';
        saldoText.innerHTML = `Durata: ${random} minuti`;
        let callerDiv = document.createElement('div');
        callerDiv.classList.add('caller');
        let pTime = document.createElement('p');
        pTime.innerText = timeMini.innerText;
        let pContact = document.createElement('p');
        pContact.innerText = randomContact;
        let pMinutes = document.createElement('p');
        pMinutes.innerText = random + ' min';
        callerDiv.append(pTime, pContact, pMinutes);
        recentCalls === null || recentCalls === void 0 ? void 0 : recentCalls.prepend(callerDiv);
    }
}
callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener('click', call);
let e;
firstPage === null || firstPage === void 0 ? void 0 : firstPage.addEventListener('click', function (e) {
    if (e.target == firstPage) {
        pageSaldo.classList.add('d-none');
        pageRicarica.classList.add('d-none');
        firstPage === null || firstPage === void 0 ? void 0 : firstPage.classList.remove('filter-blur');
        callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener('click', call);
    }
});
//# sourceMappingURL=app.js.map