let budget = 1000;
let articles = 0;

function start() {
    while (budget > 1) {
        let expense = Math.floor(Math.random() * 100);

        if (!((budget - expense) < 500)) {
            articles++;
            budget -= expense;

            document.querySelector('#budget').innerHTML += `<p> Hai speso: ${expense} €<br>Nuovo budget: ${budget} €`;
            console.log('test');
        }else{
            document.querySelector('#resume').innerHTML = `<h3>Non puoi spendere più di 500€. <br> Numero transazioni: ${articles}<br>Nuovo budget: ${budget}</h3>`;
            return
        }
    }
}


