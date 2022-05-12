
const APPURL = 'https://jsonplaceholder.typicode.com/users'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {

    let keys = ['id','name','username','email', 'website']
    
    let trH = document.createElement('tr')

    for(campo of keys){
        let th = document.createElement('th')
        th.innerHTML = campo
        trH.append(th)
    }

    tabella.append(trH)

    for(let utente of res){
        
        let tr = document.createElement('tr')

        for(let prop in utente){
            
            if(keys.includes(prop)){
                
                let key = prop;
                let value = utente[key];
                
                let td = document.createElement('td')
                td.innerHTML = value
                
                tr.append(td)
            }
        }
                    
        tabella.append(tr)

    }

})