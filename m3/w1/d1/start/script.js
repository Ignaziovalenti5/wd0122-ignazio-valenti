var targetRandom = document.querySelector('#target-random');
var result = document.querySelector('#result');
var resultDesc = document.querySelector('#result-desc');
var input1 = document.querySelector('#player-1');
var input2 = document.querySelector('#player-2');
var button = document.querySelector('#confronta');
var tableHistory = document.querySelector('#history');
var titoloResult = document.querySelector('#titolo-result');
var i = 0;
button.addEventListener('click', function (e) {
    e.preventDefault();
    i++;
    var casualNumber = Math.floor(Math.random() * (100 - 1) + 1);
    targetRandom.innerText = String(casualNumber);
    var condition1 = Math.abs((casualNumber - Number(input1.value)));
    var condition2 = Math.abs((casualNumber - Number(input2.value)));
    if (condition1 == 0 && !(input2.value == '')) {
        titoloResult.innerHTML = 'Ha vinto il:';
        result.innerText = 'Giocatore 1 😎';
        resultDesc.innerText = 'Il giocatore 1 ha azzeccato il numero!';
    }
    else if (condition1 < condition2 && !(input1.value == '' || input2.value == '')) {
        titoloResult.innerHTML = 'Ha vinto il:';
        result.innerText = 'Giocatore 1';
        resultDesc.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!';
    }
    if (condition2 == 0 && !(input1.value == '')) {
        titoloResult.innerHTML = 'Ha vinto il:';
        result.innerText = 'Giocatore 2 😎';
        resultDesc.innerText = 'Il giocatore 2 ha azzeccato il numero!';
    }
    else if (condition1 > condition2 && !(input1.value == '')) {
        titoloResult.innerHTML = 'Ha vinto il:';
        result.innerText = 'Giocatore 2';
        resultDesc.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!';
    }
    if (input1.value == input2.value) {
        result.innerText = 'Pareggio!';
        resultDesc.innerText = 'Entrambi i giocatori hanno scelto lo stesso numero!';
    }
    if (input1.value == '' || input2.value == '') {
        i--;
        titoloResult.innerHTML = '';
        targetRandom.innerText = '';
        result.innerText = 'Attenzione!';
        resultDesc.innerText = 'Entrambi i giocatori devono scegliere un numero!';
    }
    else {
        button.classList.add('d-none');
        var playerChoise1 = input1.value;
        var playerChoise2 = input2.value;
        var winner = result.innerText;
        setTimeout(function () {
            button.classList.remove('d-none');
            input1.value = '';
            input2.value = '';
            result.innerText = '';
            resultDesc.innerText = '';
            targetRandom.innerText = '';
            titoloResult.innerHTML = '';
        }, 2000);
        var tr = document.createElement('tr');
        tr.classList.add('border-bottom');
        var tdNum = document.createElement('td');
        tdNum.innerText = String(i);
        var tdPlayer1 = document.createElement('td');
        tdPlayer1.innerText = playerChoise1;
        var tdPlayer2 = document.createElement('td');
        tdPlayer2.innerText = playerChoise2;
        var tdRandom = document.createElement('td');
        tdRandom.innerText = String(casualNumber);
        var tdWinner = document.createElement('td');
        tdWinner.innerText = winner;
        tr.append(tdNum, tdPlayer1, tdPlayer2, tdRandom, tdWinner);
        tableHistory.append(tr);
    }
});
