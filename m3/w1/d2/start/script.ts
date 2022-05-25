
class Account{
    public balanceInit:number = 0;

    public deposit(deposit:number):number{
        this.balanceInit += deposit
        return deposit
    }
    public withdraw(withdraw:number):number{
        this.balanceInit -= withdraw
        return withdraw
    }
    public totalBalance():number{
        return this.balanceInit
    }
    public addInterest(interest: number): number {
        return this.balanceInit - ((this.balanceInit * interest) / 100)
    }
}

class SonAccount extends Account{
    constructor(interest?:number){
        super()
    }
}
class MotherAccount extends Account {
    constructor(interest?:number){
        super()
    }
}

let son = new SonAccount()
console.log('--------------SON ACCOUNT-------------------------------------' + '\n');
// set della proprietà  al costruttore
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('Deposit: +' + son.deposit(1000));
console.log('Withdraw: -' + son.withdraw(500));
console.log('Deposit: +' + son.deposit(300));
console.log('Withdraw: -' + son.withdraw(400));
console.log('Total Balance: ' + son.totalBalance());

let mother = new MotherAccount(10)
console.log('--------------MOTHER ACCOUNT----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('Deposit: +' + mother.deposit(1000));
console.log('Withdraw: -' + mother.withdraw(500));
console.log('Deposit: +' + mother.deposit(200));
console.log('Withdraw: -' + mother.withdraw(400));
console.log('Total Balance: ' + mother.totalBalance());
console.log('Total Balance with interest: ' + mother.addInterest(10));