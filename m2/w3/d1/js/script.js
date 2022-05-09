class Form{
    constructor(_target){
        this.target = document.querySelector(_target)
        this.nome
        this.cognome
        this.dataNascita
        this.bottone
        this.list
        this.createHTML()

        this.bottone.addEventListener('click', (e) => {
            e.preventDefault()
            this.createList()
        })
    }

    createHTML(){
        let formContainer = document.createElement('form')

        let inputNome = document.createElement('input')
        inputNome.type = 'text'
        inputNome.placeholder = 'Nome'
        this.nome = inputNome

        let inputCognome = document.createElement('input')
        inputCognome.type = 'text'
        inputCognome.placeholder = 'Cognome'
        this.cognome = inputCognome

        let date = document.createElement('input')
        date.type = 'date'
        this.dataNascita = date

        let button = document.createElement('button')
        button.type = 'submit'
        button.innerHTML = 'Registra'
        this.bottone = button

        let listArea = document.createElement('table')
        let titleNome = document.createElement('th')
        titleNome.style.border = '3px solid grey'
        titleNome.innerHTML = 'Nome e Cognome'
        let titleData = document.createElement('th')
        titleData.style.border = '3px solid grey'
        titleData.innerHTML = 'Data di Nascita'
        this.list = listArea

        this.target.appendChild(formContainer).append(inputNome, inputCognome, date, button)
        this.target.appendChild(listArea).append(titleNome, titleData)
    }

    createList(){
        let listContainer = document.createElement('tr')
        this.list.append(listContainer)

        let listItemNomeCompleto = document.createElement('td')
        listItemNomeCompleto.innerHTML = this.nome.value + ' ' + this.cognome.value

        let listItemData = document.createElement('td')
        listItemData.innerHTML = this.dataNascita.value
        
        this.list.append(listItemNomeCompleto, listItemData)
        this.nome.value = ''
        this.cognome.value = ''
        this.dataNascita.value = ''
    }
}

new Form('#target')





