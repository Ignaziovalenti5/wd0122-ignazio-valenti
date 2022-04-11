//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
document.write(_pet2);

//var 12 = 'numero';

var container = document.getElementById('container');
var arg = document.getElementsByClassName('arg');
var result = document.getElementById('result')

container.style.backgroundColor = '#c0d7e0';

arg[0].style.backgroundColor = 'white'
arg[0].style.borderRadius = '20px'

result.innerHTML = '<h3>' + petPreferito + '</h3>';