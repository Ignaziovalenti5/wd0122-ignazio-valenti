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
var Lavoratore = /** @class */ (function () {
    function Lavoratore(cod, ral) {
        this.tasseInps = 9.19;
        this.tasseIrpef = 23;
        this.coddred = cod;
        this.redditoAnnoLordo = ral;
    }
    return Lavoratore;
}());
// ARTIGIANO
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getUtileTasse = function () {
        return this.redditoAnnoLordo * this.coddred / 100;
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseInps / 100;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnoLordo - this.getTasseInps() - this.getTasseIrpef();
    };
    return Artigiano;
}(Lavoratore));
// LIBERO PROFESSIONISTA
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getUtileTasse = function () {
        return this.redditoAnnoLordo * this.coddred / 100;
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseInps / 100;
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    };
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnoLordo - this.getTasseInps() - this.getTasseIrpef();
    };
    return LiberoProfessionista;
}(Lavoratore));
// COMMERCIANTE
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getUtileTasse = function () {
        return this.redditoAnnoLordo * this.coddred / 100;
    };
    Commerciante.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseInps / 100;
    };
    Commerciante.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    };
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnoLordo - this.getTasseInps() - this.getTasseIrpef();
    };
    return Commerciante;
}(Lavoratore));
var l1 = new Artigiano(5, 10000);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
console.log('');
var l2 = new LiberoProfessionista(8, 20000);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
console.log('');
var l3 = new Commerciante(14, 25000);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map