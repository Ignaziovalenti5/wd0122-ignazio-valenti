
class CapoAbbigliamento{

    public id:number
    public codProd:number
    public collezione:string
    public capo:string
    public modello:number
    public quantita:number
    public colore:string
    public prezzoivaesclusa:number
    public prezzoivainclusa:number
    public disponibile:string
    public saldo:number

    constructor(id:number, codProd:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
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

    getSaldoCapo():number{
        return this.saldo
    }
    
    getAcquistoCapo():number{
        this.saldo = this.saldo - this.prezzoivainclusa
        return this.saldo
    }

}

const url:string = 'json/Abbigliamento.json'

fetch(url)
.then(res => res.json())
.then(res => {

    let arrUser = []
    
    for(let user of res){
        user = new CapoAbbigliamento(user.id, user.codProd, user.collezione, user.capo, user.modello, user.quantita, user.colore, user.prezzoivaesclusa, user.prezzoivainclusa, user.disponibile, user.saldo)
        
        arrUser.push(user)

        console.log('Capo: ' + user.capo);
        console.log('Saldo capo: ' + user.getSaldoCapo() + ' €');
        console.log('Saldo dopo acquisto capo: ' + user.getAcquistoCapo() + ' €');
        console.log('________________________________________');
        
    }
    

    // ESEMPIO
    // console.log(arrUser[2].getSaldoCapo())

    
    
})










