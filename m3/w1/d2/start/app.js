var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
        this.balanceInit = 0;
    }
    Account.prototype.deposit = function (deposit) {
        this.balanceInit += deposit;
        return deposit;
    };
    Account.prototype.withdraw = function (withdraw) {
        this.balanceInit -= withdraw;
        return withdraw;
    };
    Account.prototype.totalBalance = function () {
        return this.balanceInit;
    };
    Account.prototype.addInterest = function (interest) {
        return this.balanceInit - ((this.balanceInit * interest) / 100);
    };
    return Account;
}());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(interest) {
        return _super.call(this) || this;
    }
    return SonAccount;
}(Account));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(interest) {
        return _super.call(this) || this;
    }
    return MotherAccount;
}(Account));
var son = new SonAccount();
console.log('--------------SON ACCOUNT-------------------------------------' + '\n');
// set della proprietà  al costruttore
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('Deposit: +' + son.deposit(1000));
console.log('Withdraw: -' + son.withdraw(500));
console.log('Deposit: +' + son.deposit(300));
console.log('Withdraw: -' + son.withdraw(400));
console.log('Total Balance: ' + son.totalBalance());
var mother = new MotherAccount(10);
console.log('--------------MOTHER ACCOUNT----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('Deposit: +' + mother.deposit(1000));
console.log('Withdraw: -' + mother.withdraw(500));
console.log('Deposit: +' + mother.deposit(200));
console.log('Withdraw: -' + mother.withdraw(400));
console.log('Total Balance: ' + mother.totalBalance());
console.log('Total Balance with interest: ' + mother.addInterest(10));
//# sourceMappingURL=app.js.map