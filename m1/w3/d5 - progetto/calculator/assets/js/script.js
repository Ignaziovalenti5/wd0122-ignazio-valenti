const DISPLAY = document.querySelector('#display-input')
const HISTORY = document.querySelector('#history p')

function addNumber(n) {
    number = n.getAttribute('data-number')
    
    if((number == ".") && (DISPLAY.value.includes("."))){
        DISPLAY.value =  '.'
        HISTORY.innerHTML = '.'
    }else{
        DISPLAY.value += number
        HISTORY.innerHTML += number
    }
}

function multiplication(o) {
    op = o.getAttribute('data-operation')
    HISTORY.innerHTML = eval(HISTORY.innerHTML) + op
    DISPLAY.value = HISTORY.innerHTML
    
    if(DISPLAY.value == undefined || HISTORY.innerHTML == (undefined + op)){
        DISPLAY.value = ''
        HISTORY.innerHTML = ''
    }
}

function division(o) {
    op = o.getAttribute('data-operation')
    HISTORY.innerHTML = eval(HISTORY.innerHTML) + op
    DISPLAY.value = HISTORY.innerHTML
    
    if(DISPLAY.value == undefined || HISTORY.innerHTML == (undefined + op)){
        DISPLAY.value = ''
        HISTORY.innerHTML = ''
    }
}

function subtraction(o) {
    op = o.getAttribute('data-operation')
    HISTORY.innerHTML = eval(HISTORY.innerHTML) + op
    DISPLAY.value = HISTORY.innerHTML
    
    // puoi iniziare un numero col segno " - "
    if(DISPLAY.value == undefined || HISTORY.innerHTML == (undefined + op)){
        DISPLAY.value = '-'
        HISTORY.innerHTML = '-'
    }
}

function addiction(o) {
    op = o.getAttribute('data-operation')
    HISTORY.innerHTML = eval(HISTORY.innerHTML) + op
    DISPLAY.value = HISTORY.innerHTML

    // puoi iniziare un numero col segno " + "
    if(DISPLAY.value == undefined || HISTORY.innerHTML == (undefined + op)){
        DISPLAY.value = '+'
        HISTORY.innerHTML = '+'
    }
}

function square() { // per elevare alla potenza
    let total = Math.pow(DISPLAY.value, 2)
    DISPLAY.value = total
    HISTORY.innerHTML = total
}

function result(){
    let total = eval(HISTORY.innerHTML)
    DISPLAY.value = total
    
    if(total == undefined){ // se si clicca su uguale allo start
        DISPLAY.value = ''
        HISTORY.innerHTML = ''
    }else if(total == Infinity){ // divisione per " 0 "
        DISPLAY.value = 'Non si può!'
    }
}

function reset(){
    DISPLAY.value = ''
    HISTORY.innerHTML = ''
}

function deleteOne() { // funzione backspace
    let del = DISPLAY.value
    DISPLAY.value = del.slice(0, del.length-1)
    HISTORY.innerHTML = del.slice(0, del.length-1)
}




