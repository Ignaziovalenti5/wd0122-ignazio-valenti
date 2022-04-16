const DISPLAY = document.querySelector('#display-input')
const HISTORY = document.querySelector('#history p')

function isOperator(o) {
    return (o == '+' || o == '-' || o == '*' || o == '/')
}

function operatorIsPresent() {
    let num = DISPLAY.value
    return (num.includes("+") || num.includes("-") ||num.includes("*") || num.includes("/") )
}

function isComma(c) {
    return (c == '.')
}

function commaIsPresent() {
    let num = DISPLAY.value
    return ( num.includes('.') )
}

function addNumber(n) {
    if( isOperator(n) && operatorIsPresent() ){
        result()
    }
    if( !(isOperator(n) && operatorIsPresent()) && (!( isComma(n) && commaIsPresent()) ) ){
        DISPLAY.value += n
        HISTORY.innerHTML += n
    }
}

function result() {
    let total = eval(DISPLAY.value)
    DISPLAY.value = total
    HISTORY.innerHTML = total + '<br>'

    if(total == undefined){
        DISPLAY.value = ''
        HISTORY.innerHTML = ''
    }else if(total == Infinity){ // divisione per " 0 "
        DISPLAY.value = 'Non si può!'
    }
}

function reset() {
    DISPLAY.value = ''
    HISTORY.innerHTML = ''
}

function backSpace() {
    let del = DISPLAY.value
    DISPLAY.value = del.slice(0, del.length-1)
    HISTORY.innerHTML = del.slice(0, del.length-1)
}

function square() {
    let total = Math.pow(DISPLAY.value, 2)
    DISPLAY.value = total
    HISTORY.innerHTML = total
}


