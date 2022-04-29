let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/

let arrayComparison = [];

//1. interval 
let interval

document.body.onload = startGame();

// mi serviranno alcune variabili 
//2. una agganciata alla classe find 
let iconsFind = document.querySelectorAll('.find')
// 3. una agganciata al'id modal 
let modal = document.querySelector("#modal");
//4. una agganciata alla classe timer
let timer = document.querySelector(".timer");

// NEL MODAL HO AGGIUNTO IL NUMERO DEI TENTATIVI EFFETTUATI PER RISOLVERE IL GAME
let tentativi = 0

//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// una funzione che rimuove la classe active e chiama la funzione startGame()
function playAgain(){
    modal.classList.remove("active");
    startGame();
}

function startGame() {
    // la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
    // (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia,
    clearInterval(interval)
    let arrayShuffle = shuffle(arrayAnimali);
    arrayComparison = []
    let lista = document.querySelector('#griglia')

    // pulisce tutti gli elementi che eventualmente contiene
    while (lista.hasChildNodes()) {  
        lista.removeChild(lista.firstChild)
    }

    // poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
    for(let i = 0; i < 24; i++){    
        let container = document.createElement('div');
        let div = document.createElement('div');
        div.className = 'icon';
        document.getElementById('griglia').appendChild(container).appendChild(div);
        div.innerHTML = arrayShuffle[i];
    }

    // chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto
    startTimer()

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    for (var i = 0; i < icons.length; i++){
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", openModal);
    }
}

function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    //mette/toglie la classe show
    this.classList.toggle("show");

    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        tentativi++
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
            iconsFind = document.querySelectorAll('.find')
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte
function openModal(){  
    if (iconsFind.length == 24){
        modal.classList.add("active");
        clearInterval(interval);
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
        document.getElementById("tentativi").innerHTML = tentativi;
    }
}
// una funzione che nasconde la modale alla fine e riavvia il gioco
function closeModal(){
    playAgain()
}

// una funzione che calcola il tempo e aggiorna il contenitore sotto
function startTimer(){
    let s = 0
    let m = 0
    interval = setInterval(function(){
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
        s++;
        if(s == 60){
            m++;
            s = 0;
        }
    },1000);
}


