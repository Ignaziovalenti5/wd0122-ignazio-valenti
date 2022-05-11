
// PRIMO ESERCIZIO

fetch("json/discografia.json")
.then(res => res.json())
.then(disco => {
    let jsonDisco = JSON.stringify(disco)
    localStorage.setItem("discografia", jsonDisco)

    // per rimozione:
    // localStorage.removeItem("discografia")
})



// SECONDO ESERCIZIO

if(sessionStorage.start == "NaN"){
    sessionStorage.setItem("start", "0")
}

count = sessionStorage.getItem("start")

setInterval( () => {
    count++
    document.querySelector('#timer').innerHTML = count
    sessionStorage.setItem("start", count)
}, 1000);








