
// INTERFACE -------------------------------------------------------

interface iSmartphone{
    carica:number;
    numeroChiamate:number;

    ricarica(unaRicarica:number):void;
    chiamata(minutiDurata:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}


// CLASSES ---------------------------------------------------------

class firstUser implements iSmartphone{
    public carica:number;
    public numeroChiamate:number = 0;

    constructor(carica:number){
        this.carica = carica
    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata:number):void{
        let costoChiamataAlMin:number = 0.2
        let costoChiamata:number = minutiDurata * costoChiamataAlMin;

        if (this.carica >= costoChiamata) {
            this.numeroChiamate++;
            this.carica = Math.round((this.carica - costoChiamata) * 100) / 100
        }else{
            console.log('%cCredito insufficiente!', 'color:red; font-size:20px');
        }
    }

    public numero404():number{
        return this.carica;
    }

    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }

    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
}

class secondUser implements iSmartphone{
    public carica:number;
    public numeroChiamate:number = 0;

    constructor(carica:number){
        this.carica = carica
    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata:number):void{
        let costoChiamataAlMin:number = 0.2
        let costoChiamata:number = minutiDurata * costoChiamataAlMin;

        if (this.carica >= costoChiamata) {
            this.numeroChiamate++;
            this.carica = Math.round((this.carica - costoChiamata) * 100) / 100
        }else{
            console.log('%cCredito insufficiente!', 'color:red; font-size:20px');
        }
    }

    public numero404():number{
        return this.carica;
    }

    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }

    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
}

class thirdUser implements iSmartphone{
    public carica:number;
    public numeroChiamate:number = 0;

    constructor(carica:number){
        this.carica = carica
    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata:number):void{
        let costoChiamataAlMin:number = 0.2
        let costoChiamata:number = minutiDurata * costoChiamataAlMin;

        if (this.carica >= costoChiamata) {
            this.numeroChiamate++;
            this.carica = Math.round((this.carica - costoChiamata) * 100) / 100
        }else{
            console.log('%cCredito insufficiente!', 'color:red; font-size:20px');
        }
    }

    public numero404():number{
        return this.carica;
    }

    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }

    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
}


// TEST ON CONSOLE -------------------------------------------------

let userOne = new firstUser(5)
console.log('--- PRIMO UTENTE ---');
console.log('Saldo iniziale: ' + userOne.carica + '€');
userOne.ricarica(10) //ricarica 10 €
console.log('Saldo dopo ricarica: ' + userOne.carica + '€');
userOne.chiamata(5) //chiamata da 5 minuti
userOne.chiamata(3) //chiamata da 3 minuti
userOne.chiamata(2) //chiamata da 2 minuti
userOne.chiamata(4) //chiamata da 4 minuti
console.log('Saldo dopo chiamata: ' + userOne.numero404() + '€');
console.log('Numero chiamate effettuate: ' + userOne.getNumeroChiamate());
userOne.azzeraChiamate(); // azzeramento chiamate
console.log('N° chiamate dopo azzeramento: ' + userOne.numeroChiamate);
console.log('----------------------------------------');


let userTwo = new secondUser(10)
console.log('--- SECONDO UTENTE ---');
console.log('Saldo iniziale: ' + userTwo.carica + '€');
userTwo.ricarica(10) //ricarica 10 €
console.log('Saldo dopo ricarica: ' + userTwo.carica + '€');
userTwo.chiamata(5) //chiamata da 5 minuti
userTwo.chiamata(3) //chiamata da 3 minuti
console.log('Saldo dopo chiamata: ' + userTwo.numero404() + '€');
console.log('Numero chiamate effettuate: ' + userTwo.getNumeroChiamate());
userTwo.azzeraChiamate(); // azzeramento chiamate
console.log('N° chiamate dopo azzeramento: ' + userTwo.numeroChiamate);
console.log('----------------------------------------');


let userThree = new thirdUser(0)
console.log('--- TERZO UTENTE ---');
console.log('Saldo iniziale: ' + userThree.carica + '€');
userThree.ricarica(10) //ricarica 10 €
console.log('Saldo dopo ricarica: ' + userThree.carica + '€');
userThree.chiamata(3) //chiamata da 3 minuti
userThree.chiamata(2) //chiamata da 2 minuti
userThree.chiamata(4) //chiamata da 4 minuti
console.log('Saldo dopo chiamata: ' + userThree.numero404() + '€');
console.log('Numero chiamate effettuate: ' + userThree.getNumeroChiamate());
userThree.azzeraChiamate(); // azzeramento chiamate
console.log('N° chiamate dopo azzeramento: ' + userThree.numeroChiamate);
console.log('----------------------------------------');


let user = new firstUser(5)

let random:number = Math.floor((Math.random()*10)+1)
// let costo = user.chiamata(random)
// user.chiamata(random)
// user.chiamata(random)
// console.log(user.carica)

