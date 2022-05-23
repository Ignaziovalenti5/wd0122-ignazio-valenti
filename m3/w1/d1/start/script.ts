
let targetRandom:HTMLElement|null = document.querySelector('#target-random');
let result:HTMLElement|null = document.querySelector('#result');
let resultDesc:HTMLElement|null = document.querySelector('#result-desc');
let input1:HTMLInputElement|null = document.querySelector('#player-1')
let input2:HTMLInputElement|null = document.querySelector('#player-2')
let button:HTMLButtonElement|null = document.querySelector('#confronta');


button!.addEventListener('click', function (e) {
    e.preventDefault();
    
    let casualNumber:number = Math.floor(Math.random() * (100 -1) + 1);

    targetRandom!.innerText = String(casualNumber);

    let condition1:number = Math.abs((casualNumber - Number(input1!.value)))
    let condition2:number = Math.abs((casualNumber - Number(input2!.value)))

    if(input1!.value == input2!.value){
        result!.innerText = 'Pari!'
        resultDesc!.innerText = 'Entrambi i giocatori hanno scelto lo stesso numero!'
    }
    
    if (condition1 == 0) {
        result!.innerText = 'Giocatore 1'
        resultDesc!.innerText = 'Il giocatore 1 ha azzeccato il numero!'
    }else if(condition1 < condition2){
        result!.innerText = 'Giocatore 1'
        resultDesc!.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!'
    }

    if (condition2 == 0) {
        result!.innerText = 'Giocatore 2'
        resultDesc!.innerText = 'Il giocatore 2 ha azzeccato il numero!'
    }else if(condition1 > condition2){
        result!.innerText = 'Giocatore 2'
        resultDesc!.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!'
    }
    
})

	