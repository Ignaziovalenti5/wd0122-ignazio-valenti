
// ---------------------------------------------
// GLOBAL VARIABLES ----------------------------------------------

let screenSaver:HTMLElement|null = document.querySelector('#screen-saver')
let lockSmartphone:HTMLElement|null = document.querySelector('.lock-smartphone')
let firstPage:HTMLElement|null = document.querySelector('#first-page')
let pageSaldo:HTMLElement|null = document.querySelector('#page-saldo')
let pageRicarica:HTMLElement|null = document.querySelector('#page-ricarica')

let appChiamate:HTMLElement|null = document.querySelector('#app-chiamate')
let appRicarica:HTMLElement|null = document.querySelector('#app-ricarica')
let appSaldo:HTMLElement|null = document.querySelector('#app-saldo')

let callBtn:HTMLElement|null = document.querySelector('#call')


// ---------------------------------------------
// TIME & DATE SETUP ----------------------------------------------

setInterval(() => {

    function setTime(_date:string, _time:string):void{

        let targetDate:HTMLElement|null = document.querySelector(_date);
        let targetTime:HTMLElement|null = document.querySelector(_time);
    
        let now:string = new Date().toLocaleString('it-IT');
        let date;
        let time;
        
        if(now.length == 19){
            date = now.slice(0,9);
            time = now.slice(11, 16);
        }else if(now.length == 20){
            date = now.slice(0,10);
            time = now.slice(12, 17);
        }
        
        targetDate!.innerText = String(date);
        targetTime!.innerText = String(time);

    }

    setTime('#date', '#time')
    
}, 1000)




// ---------------------------------------------
// UNLOCK BUTTON ---------------------------------------------------

let unlockBtn:HTMLButtonElement|null = document.querySelector('.unlock')
let lock:Element|null = document.querySelector('#lock')

unlockBtn?.addEventListener('click', function(){
    
    
    lock!.classList.remove('bi-lock-fill')
    lock!.classList.add('bi-unlock-fill')
    
    setTimeout(() => {
        
        lockSmartphone?.classList.remove('d-none')
        firstPage!.classList.remove('d-none')
        screenSaver!.classList.add('d-none')
        
    }, 800);
    
})    



// ---------------------------------------------
// LOCK BUTTON ---------------------------------------------------

lockSmartphone?.addEventListener('click', function(){

    lockSmartphone?.classList.add('d-none')
    
    lock!.classList.add('bi-lock-fill')
    lock!.classList.remove('bi-unlock-fill')
    
    screenSaver!.classList.remove('d-none')
    firstPage!.classList.add('d-none')
    firstPage!.classList.remove('filter-blur')
    pageSaldo!.classList.add('d-none')
    pageRicarica!.classList.add('d-none')

})



// ---------------------------------------------
// APP SALDO ---------------------------------------------------

appSaldo?.addEventListener('click', function(){
    pageSaldo?.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')
    
    let closeBtn:HTMLElement|null = document.querySelector('.btn-close')
    
    closeBtn?.addEventListener('click', function(){
        
        pageSaldo!.classList.add('d-none')
        firstPage?.classList.remove('filter-blur')
    
    })

    let saldoText:HTMLElement|null = document.querySelector('#saldo')
    let title:HTMLElement|null = document.querySelector('.title')
    title!.innerText = 'Il tuo saldo è di:'
    let saldo = user.numero404()
    saldoText!.innerText = String(saldo + ' €')

})


// ---------------------------------------------
// APP CHIAMATE ---------------------------------------------------

appChiamate?.addEventListener('click', function(){
    pageSaldo?.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')
    let title:HTMLElement|null = document.querySelector('.title')
    let closeBtn:HTMLElement|null = document.querySelector('.btn-close')
    
    closeBtn?.addEventListener('click', function(){
        
        pageSaldo!.classList.add('d-none')
        firstPage?.classList.remove('filter-blur')
    
    })

    let saldoText:HTMLElement|null = document.querySelector('#saldo')
    
    title!.innerText = ''
    title!.innerText = `N° chiamate effettuate: ${user.numeroChiamate}`
    saldoText!.innerText = ''

})



// ---------------------------------------------
// APP RICARICA ---------------------------------------------------


appRicarica?.addEventListener('click', () => {
    
    let inputRicarica:HTMLInputElement|null = document.querySelector('#input-ricarica')
    inputRicarica?.classList.remove('d-none')
    inputRicarica!.value = ''

    let ricaricaBtn:HTMLButtonElement|null = document.querySelector('#ricarica')
    ricaricaBtn?.classList.remove('d-none')
    
    let closeBtn:HTMLElement|null = document.querySelector('.close-ricarica')
    pageRicarica!.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')

    let ricaricaTitle:HTMLElement|null = document.querySelector('.ricarica-title')
    ricaricaTitle!.innerText = 'Ricarica da:'

    
    closeBtn?.addEventListener('click', function(){
        
        pageRicarica!.classList.add('d-none')
        firstPage?.classList.remove('filter-blur')
    
    })

    ricaricaBtn?.addEventListener('submit', function ricarica(){
        ricaricaBtn?.removeEventListener('submit', ricarica)

        let inputRicarica:HTMLInputElement|null = document.querySelector('#input-ricarica')
        
        let valoreRicarica = Number(inputRicarica!.value)

        console.log(valoreRicarica);
        
        user.ricarica(valoreRicarica)

        ricaricaTitle!.innerText = 'Hai effettuato una ricarica da: ' + valoreRicarica + ' €'
        inputRicarica?.classList.add('d-none')
        ricaricaBtn?.classList.add('d-none')


    })

})





// ---------------------------------------------
// CALL BUTTON ---------------------------------------------------

callBtn?.addEventListener('click', function(){

    pageSaldo?.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')
    
    let closeBtn:HTMLElement|null = document.querySelector('.btn-close')
    
    closeBtn?.addEventListener('click', function(){
        
        pageSaldo!.classList.add('d-none')
        firstPage?.classList.remove('filter-blur')
    
    })

    let saldoText:HTMLElement|null = document.querySelector('#saldo')
    let title:HTMLElement|null = document.querySelector('.title')
    
    saldoText!.style.fontSize = '15px'
    let random:number = Math.floor((Math.random()*10)+1)
    let costo:number = Math.round((random * 0.2) * 100) / 100
    user.chiamata(random)

    if (costo > user.numero404()) {
        title!.innerText = ''
        saldoText!.innerHTML = ''
        saldoText!.innerHTML = 'Impossibile effettuare la Chiamata <br> Controllare il credito!'
    }else{
        title!.innerText = ''
        title!.innerText = 'Chiamata...'
        saldoText!.innerHTML = ''
        saldoText!.innerHTML = `Durata: ${random} minuti <br> Costo chiamata: ${costo} € <br> Saldo Attuale: ${user.numero404()}`
    }

})







