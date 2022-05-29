
// ---------------------------------------------
// GLOBAL VARIABLES ----------------------------------------------

let smartphone:HTMLElement|null = document.querySelector('.smartphone')
let screenSaver:HTMLElement|null = document.querySelector('#screen-saver')
let lockSmartphone:HTMLElement|null = document.querySelector('.lock-smartphone')
let firstPage:HTMLElement|null = document.querySelector('#first-page')
let pageSaldo:HTMLElement|null = document.querySelector('#page-saldo')
let pageRicarica:HTMLElement|null = document.querySelector('#page-ricarica')
let pageChiamate:HTMLElement|null = document.querySelector('#page-chiamate')
let recentCalls:HTMLElement|null = document.querySelector('.recent-calls')
let azzeraBtn:HTMLButtonElement|null = document.querySelector('#azzera')


let timeMini:HTMLElement|null = document.querySelector('#time-mini')
let dateMini:HTMLElement|null = document.querySelector('#date-mini')

let appChiamate:HTMLElement|null = document.querySelector('#app-chiamate')
let appRicarica:HTMLElement|null = document.querySelector('#app-ricarica')
let appSaldo:HTMLElement|null = document.querySelector('#app-saldo')

let callBtn:HTMLElement|null = document.querySelector('#call')

let contatti:string[] = [
    "Leanne",
    "Ervin",
    "Clementine",
    "Patricia",
    "Chelsey",
    "Dennis",
    "Kurtis",
    "Nicholas",
    "Glenna",
    "Clementina",
    'John',
    'Richard',
    'Joe',
    'Melissa',
    'Joanna'
]




// ---------------------------------------------
// TIME & DATE SETUP ----------------------------------------------

function setTime(_date:string, _time:string):void{

    let targetDate:HTMLElement|null = document.querySelector(_date);
    let targetTime:HTMLElement|null = document.querySelector(_time);

    let now:string = new Date().toLocaleString('it-IT');
    let date:string = ''
    let time:string = ''
    
    if(now.length == 19){
        date = now.slice(0,9);
        time = now.slice(11, 16);
    }else if(now.length == 20){
        date = now.slice(0,10);
        time = now.slice(12, 17);
    }
    
    targetDate!.innerText = date;
    targetTime!.innerText = time;

}

setInterval(() => {

    setTime('#date', '#time')
    
}, 1000)

setInterval(() => {

    setTime('#p-date', '#p-time')
    
}, 1000)




// ---------------------------------------------
// UNLOCK BUTTON ---------------------------------------------------

let unlockBtn:HTMLButtonElement|null = document.querySelector('.unlock')
let lock:Element|null = document.querySelector('#lock')

unlockBtn?.addEventListener('click', function():void{
    
    lock!.classList.remove('bi-lock-fill')
    lock!.classList.add('bi-unlock-fill')

    appChiamate?.classList.remove('d-none')
    appRicarica?.classList.remove('d-none')
    appSaldo?.classList.remove('d-none')
    callBtn?.classList.remove('d-none')
    
    setTimeout(() => {
        timeMini!.classList.remove('d-none')
        dateMini!.classList.remove('d-none')
        
        lockSmartphone?.classList.remove('d-none')
        firstPage!.classList.remove('d-none')
        screenSaver!.classList.add('d-none')
        
    }, 800);
    
})    



// ---------------------------------------------
// LOCK BUTTON ---------------------------------------------------

lockSmartphone?.addEventListener('click', function lockSmart():void {

    lockSmartphone?.classList.add('d-none')
    smartphone?.classList.add('img-bg')

    timeMini!.classList.add('d-none')
    dateMini!.classList.add('d-none')
    
    lock!.classList.add('bi-lock-fill')
    lock!.classList.remove('bi-unlock-fill')
    
    screenSaver!.classList.remove('d-none')
    firstPage!.classList.add('d-none')
    firstPage!.classList.remove('filter-blur')
    pageSaldo!.classList.add('d-none')
    pageRicarica!.classList.add('d-none')
    pageChiamate!.classList.add('d-none')

})



// ---------------------------------------------
// APP SALDO ---------------------------------------------------

appSaldo?.addEventListener('click', function(): void {
    callBtn?.removeEventListener('click', call)

    pageSaldo?.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')
    
    let closeBtn:HTMLElement|null = document.querySelector('.btn-close')
    
    closeBtn?.addEventListener('click', function(): void {
        callBtn?.addEventListener('click', call)
        pageSaldo!.classList.add('d-none')
        firstPage?.classList.remove('filter-blur')
    
    })

    let saldoText:HTMLElement|null = document.querySelector('#saldo')
    let title:HTMLElement|null = document.querySelector('.title')
    title!.innerText = 'Il tuo saldo è di:'
    let saldo = user.numero404()
    saldoText!.innerHTML = String('<span class="fs-2">' + saldo + ' €<span>')

})


// ---------------------------------------------
// APP CHIAMATE ---------------------------------------------------

appChiamate?.addEventListener('click', function(): void {

    pageChiamate?.classList.remove('d-none')

    smartphone?.classList.remove('img-bg')
    smartphone?.classList.add('bg-dark')

    appChiamate?.classList.add('d-none')
    appRicarica?.classList.add('d-none')
    appSaldo?.classList.add('d-none')
    callBtn?.classList.add('d-none')

    let callTitle:HTMLElement|null = document.querySelector('.chiamate-title')
    callTitle!.innerText = `N° chiamate effettuate: ${user.numeroChiamate}`

    let closeBtn:HTMLElement|null = document.querySelector('.close-chiamate')
    
    closeBtn?.addEventListener('click', function(): void {
        smartphone?.classList.add('img-bg')
        smartphone?.classList.remove('bg-dark')
        appChiamate?.classList.remove('d-none')
        appRicarica?.classList.remove('d-none')
        appSaldo?.classList.remove('d-none')
        callBtn?.classList.remove('d-none')
        pageChiamate?.classList.add('d-none')
            
    })

    azzeraBtn?.addEventListener('click', function(){
        user.azzeraChiamate()
        recentCalls!.innerHTML = ''
        callTitle!.innerText = `N° chiamate effettuate: ${user.numeroChiamate}`
    })


})



// ---------------------------------------------
// APP RICARICA ---------------------------------------------------


appRicarica?.addEventListener('click', () => {
    callBtn?.removeEventListener('click', call)

    let selectRicarica:HTMLSelectElement|null = document.querySelector('#select-ricarica')
    selectRicarica?.classList.remove('d-none')

    let ricaricaBtn:HTMLButtonElement|null = document.querySelector('#ricarica')
    ricaricaBtn?.classList.remove('d-none')
    
    let closeBtn:HTMLElement|null = document.querySelector('.close-ricarica')
    pageRicarica!.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')

    let ricaricaTitle:HTMLElement|null = document.querySelector('.ricarica-title')
    ricaricaTitle!.innerText = 'Ricarica da:'

    
    closeBtn?.addEventListener('click', function(): void {
        callBtn?.addEventListener('click', call)
        pageRicarica!.classList.add('d-none')
        firstPage?.classList.remove('filter-blur')
    
    })

    ricaricaBtn?.addEventListener('submit', function ricarica(): void {
        ricaricaBtn?.removeEventListener('submit', ricarica)

        let valoreRicarica:number = Number(selectRicarica!.value)
        
        user.ricarica(valoreRicarica)

        ricaricaTitle!.innerText = 'Hai effettuato una ricarica da: ' + valoreRicarica + ' €'
        selectRicarica?.classList.add('d-none')
        ricaricaBtn?.classList.add('d-none')

    })

})





// ---------------------------------------------
// CALL BUTTON ---------------------------------------------------

function call(): void {
    callBtn?.removeEventListener('click', call)
    pageSaldo?.classList.remove('d-none')
    firstPage?.classList.add('filter-blur')

    let randomNum2:number = Math.floor((Math.random()*15))
    let randomContact = contatti[randomNum2]
    let nameCallerElement:HTMLHeadingElement = document.createElement('h1')
    nameCallerElement!.innerText = randomContact
    
    let closeBtn:HTMLElement|null = document.querySelector('.btn-close')
    
    closeBtn?.addEventListener('click', function(): void {
        callBtn?.addEventListener('click', call)
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
        title?.append(nameCallerElement)
        saldoText!.innerHTML = ''
        saldoText!.innerHTML = `Durata: ${random} minuti`

        let callerDiv:HTMLDivElement|null = document.createElement('div')
        callerDiv.classList.add('caller')
        let pTime:HTMLParagraphElement|null = document.createElement('p')
        pTime!.innerText = timeMini!.innerText
        let pContact:HTMLParagraphElement|null = document.createElement('p')
        pContact.innerText = randomContact
        let pMinutes:HTMLParagraphElement|null = document.createElement('p')
        pMinutes.innerText = random + ' min'

        callerDiv.append(pTime, pContact, pMinutes)
        recentCalls?.prepend(callerDiv)
        
    }


}

callBtn?.addEventListener('click', call)

let e:EventTarget|null

firstPage?.addEventListener('click', function(e):void{
    if (e.target == firstPage){
        
        pageSaldo!.classList.add('d-none')
        pageRicarica!.classList.add('d-none')

        firstPage?.classList.remove('filter-blur')
        callBtn?.addEventListener('click', call)
    }

})



