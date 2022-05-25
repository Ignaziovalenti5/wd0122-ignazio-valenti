
abstract class Lavoratore{

    coddred : number;
    redditoAnnoLordo : number;
    tasseInps : number = 9.19;
    tasseIrpef : number = 23;

    constructor(cod:number, ral:number){
        this.coddred = cod
        this.redditoAnnoLordo = ral
    }

    abstract getUtileTasse() : number
    abstract getTasseInps() : number
    abstract getTasseIrpef() : number
    abstract getRedditoAnnuoNetto() : number
}


// ARTIGIANO

class Artigiano extends Lavoratore{
    
    public getUtileTasse() : number {
        return this.redditoAnnoLordo * this.coddred / 100
    }
    
    public getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps / 100
    }
    
    public getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef / 100
    }
    
    public getRedditoAnnuoNetto(): number {
        return this.redditoAnnoLordo - this.getTasseInps() - this.getTasseIrpef()
    }


}


// LIBERO PROFESSIONISTA

class LiberoProfessionista extends Lavoratore{
    
    public getUtileTasse() : number {
        return this.redditoAnnoLordo * this.coddred / 100
    }
    
    public getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps / 100
    }
    
    public getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef / 100
    }
    
    public getRedditoAnnuoNetto(): number {
        return this.redditoAnnoLordo - this.getTasseInps() - this.getTasseIrpef()
    }

}


// COMMERCIANTE

class Commerciante extends Lavoratore{
    
    public getUtileTasse() : number {
        return this.redditoAnnoLordo * this.coddred / 100
    }
    
    public getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps / 100
    }
    
    public getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef / 100
    }
    
    public getRedditoAnnuoNetto(): number {
        return this.redditoAnnoLordo - this.getTasseInps() - this.getTasseIrpef()
    }


}


let l1 = new Artigiano(5, 10000);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
console.log('');


let l2 = new LiberoProfessionista(8, 20000);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
console.log('');


let l3 = new Commerciante(14, 25000);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');