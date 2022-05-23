
let targetRandom:HTMLElement|null = document.querySelector('#target-random');
let result:HTMLElement|null = document.querySelector('#result');
let resultDesc:HTMLElement|null = document.querySelector('#result-desc');
let input1:HTMLInputElement|null = document.querySelector('#player-1')
let input2:HTMLInputElement|null = document.querySelector('#player-2')
let button = document.querySelector('#confronta');
let tableHistory = document.querySelector('#history')
let titoloResult = document.querySelector('#titolo-result')


let i = 0

button!.addEventListener('click', function (e) {
    e.preventDefault();
    i++
    
    let casualNumber:number = Math.floor(Math.random() * (100 -1) + 1);
    
    targetRandom!.innerText = String(casualNumber);
    
    let condition1:number = Math.abs((casualNumber - Number(input1!.value)))
    let condition2:number = Math.abs((casualNumber - Number(input2!.value)))
    
    if (condition1 == 0 && !(input2!.value == '')) {
        titoloResult!.innerHTML = 'Ha vinto il:'
        result!.innerText = 'Giocatore 1 😎'
        resultDesc!.innerText = 'Il giocatore 1 ha azzeccato il numero!'
    }else if(condition1 < condition2 && !(input1!.value == '' || input2!.value == '')){
        titoloResult!.innerHTML = 'Ha vinto il:'
        result!.innerText = 'Giocatore 1'
        resultDesc!.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!'
    }
    
    if (condition2 == 0 && !(input1!.value == '')) {
        titoloResult!.innerHTML = 'Ha vinto il:'
        result!.innerText = 'Giocatore 2 😎'
        resultDesc!.innerText = 'Il giocatore 2 ha azzeccato il numero!'
    }else if(condition1 > condition2 && !(input1!.value == '')){
        titoloResult!.innerHTML = 'Ha vinto il:'
        result!.innerText = 'Giocatore 2'
        resultDesc!.innerText = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!'
    }

    if(input1!.value == input2!.value){
        result!.innerText = 'Pareggio!'
        resultDesc!.innerText = 'Entrambi i giocatori hanno scelto lo stesso numero!'
    }
    
    if(input1!.value == '' || input2!.value == ''){
        i--
        titoloResult!.innerHTML = ''
        targetRandom!.innerText = ''
        result!.innerText = 'Attenzione!'
        resultDesc!.innerText = 'Entrambi i giocatori devono scegliere un numero!'
    }else{
        button!.classList.add('d-none')

        let playerChoise1 = input1!.value
        let playerChoise2 = input2!.value
        let winner = result!.innerText
    
        setTimeout(() => {
            button!.classList.remove('d-none')
            input1!.value = ''
            input2!.value = ''
            result!.innerText = ''
            resultDesc!.innerText = ''
            targetRandom!.innerText = ''
            titoloResult!.innerHTML = ''
        }, 2000);

            let tr = document.createElement('tr')
            tr.classList.add('border-bottom')
            
            let tdNum = document.createElement('td')
            tdNum!.innerText = String(i)
            let tdPlayer1 = document.createElement('td')
            tdPlayer1!.innerText = playerChoise1
            let tdPlayer2 = document.createElement('td')
            tdPlayer2!.innerText = playerChoise2
            let tdRandom = document.createElement('td')
            tdRandom!.innerText = String(casualNumber)
            let tdWinner = document.createElement('td')
            tdWinner!.innerText = winner

            tr.append(tdNum, tdPlayer1, tdPlayer2, tdRandom, tdWinner)
            tableHistory!.append(tr)
            

    }
    
})

	