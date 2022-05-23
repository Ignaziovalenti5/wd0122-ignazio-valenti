var targetRandom = document.querySelector('#target-random');
var result = document.querySelector('#result');
var resultDesc = document.querySelector('#result-desc');
var input1 = document.querySelector('#player-1');
var input2 = document.querySelector('#player-2');
var button = document.querySelector('#confronta');
button.addEventListener('click', function (e) {
    e.preventDefault();
    var casualNumber = Math.floor(Math.random() * (100 - 1) + 1);
    targetRandom.innerText = String(casualNumber);
    var condition1 = Math.abs((casualNumber - Number(input1.value)));
    var condition2 = Math.abs((casualNumber - Number(input2.value)));
    if (input1.value == input2.value) {
        result.innerText = 'Pari!';
        resultDesc.innerText = 'Entrambi i giocatori hanno scelto lo stesso numero!';
    }
    if (condition1 == 0) {
        result.innerText = 'Giocatore 1';
        resultDesc.innerText = 'Il giocatore 1 ha azzeccato il numero!';
    }
    else if (condition1 < condition2) {
        result.innerText = 'Giocatore 1';
        resultDesc.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!';
    }
    if (condition2 == 0) {
        result.innerText = 'Giocatore 2';
        resultDesc.innerText = 'Il giocatore 2 ha azzeccato il numero!';
    }
    else if (condition1 > condition2) {
        result.innerText = 'Giocatore 2';
        resultDesc.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!';
    }
});
