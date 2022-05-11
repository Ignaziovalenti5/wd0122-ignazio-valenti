
class Person{

    constructor(_nome, _eta){
        this.nome = _nome,
        this.eta = _eta
    }

    calcEta(x){

        if(this.eta == x.eta){
            return `${this.nome} ha la stessa età di ${x.nome}`
        }else if(this.eta < x.eta){
            return `${this.nome} è più piccolo di ${x.nome}`
        }else if(this.eta > x.eta){
            return `${this.nome} è più grande di ${x.nome}`
        }
    }

}

let p1 = new Person('Mario Rossi', 25)
let p2 = new Person('Carlo Bianchi', 30)
let p3 = new Person('Luigi Verdi', 27)
console.log(p1, p2, p3);


console.log(p1.calcEta(p2))
console.log(p2.calcEta(p3))
console.log(p3.calcEta(p1))