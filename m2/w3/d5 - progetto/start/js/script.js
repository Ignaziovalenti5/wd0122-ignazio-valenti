
const APPURL = 'json/users.json'

let table = document.querySelector('#users-table')
let cardsContainer = document.querySelector('#cards-container')
let cardsBtn = document.querySelector('#card-btn')
let closeBtn = document.querySelector('#card-btn-close')

fetch(APPURL)
.then(res => res.json())
.then(res => {

    for(let user of res){
        
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        `

        table.append(tr)

    }

    cardsBtn.addEventListener('click', function(){

        closeBtn.classList.remove('d-none')
        cardsBtn.classList.add('d-none')

        closeBtn.addEventListener('click', function(){

            cardsContainer.innerHTML = ''
            closeBtn.classList.add('d-none')
            cardsBtn.classList.remove('d-none')

        })

        for(let user of res){

            let card = document.createElement('div')
            card.classList.add('card', 'border-0')
            cardsContainer.append(card)
            
            let userImg = document.createElement('img')
            userImg.classList.add('card-img-top', 'rounded-circle', 'p-4')
            userImg.setAttribute('src', user["profileURL"])
            card.append(userImg)
            
            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')

            let cardTitle = document.createElement('h5')
            cardTitle.classList.add('card-title')
            cardTitle.innerHTML = `${user.firstName} ${user.lastName}`

            let btnInfo = document.createElement('a')
            btnInfo.classList.add('btn', 'btn-primary')
            btnInfo.setAttribute('href', '#')
            btnInfo.innerHTML = 'Show Details'

            cardBody.append(cardTitle, btnInfo)
            card.append(cardBody)
   
            btnInfo.addEventListener('click', function(){

                card.classList.remove('close-details')
                card.classList.add('show-details')
                card.style.textAlign = 'left'
                userImg.style.width = '10em'

                btnInfo.classList.add('d-none')

                cardBody.classList.add('text-start')

                let userInfo = document.createElement('div')
                userInfo.innerHTML = `
                <h6 class="lh-1 text-muted">Username:</h6> <p class="lh-1">${user.username}</p>
                <h6 class="lh-1 text-muted">E-mail:</h6> <p class="lh-1">${user.email}</p>
                <h6 class="lh-1 text-muted">Gender:</h6> <p class="lh-1">${user.gender}</p>
                `
                cardBody.append(userInfo)

                let closeDetails = document.createElement('a')
                closeDetails.classList.add('btn', 'btn-secondary')
                closeDetails.setAttribute('href', '#')
                closeDetails.innerHTML = 'Close'
                cardBody.append(closeDetails)

                closeDetails.addEventListener('click', function(){

                    card.classList.remove('show-details')
                    card.classList.add('close-details')
                    userImg.style.width = 'initial'
                    btnInfo.classList.remove('d-none')
                    closeDetails.remove()
                    
                    cardBody.classList.remove('text-start')

                    userInfo.remove()
                    
                })

            })

        }

    })
    
})