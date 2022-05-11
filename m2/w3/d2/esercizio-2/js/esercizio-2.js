
class Pagination{
    constructor(items = [], pageSize =  10){
        this.users = items
        this.itemForPage = pageSize
        this.currentPage = 1
    }

    displayUser(){
        const display = document.querySelector('#displayUser')
        const nextBtn = document.querySelector('#next')
        const prevBtn = document.querySelector('#prev')
        let usersForPage = (this.users).slice(0, this.itemForPage)
    
        if (usersForPage.length < (this.users).length) {
            nextBtn.removeAttribute('disabled')
            nextBtn.addEventListener('click', () =>{
                this.currentPage++
                console.log(this.currentPage);
                let newUsersForPage = (this.users).slice(this.itemForPage, (this.users).length)
                nextBtn.disabled
                prevBtn.disabled = false
                for (let u of newUsersForPage) {
                    let tr = document.createElement('tr')
                    display.append(tr)
                    tr.innerHTML = `<td>${u.id}</td><td>${u.name}</td><td>${u.surname}</td><td>${u.age}</td>`
                }
            })
        }

        for (let u of usersForPage) {
            let tr = document.createElement('tr')
            display.append(tr)
            tr.innerHTML = `<td>${u.id}</td><td>${u.name}</td><td>${u.surname}</td><td>${u.age}</td>`
        }

    }
}

const users = [
    { id: 1, name: 'Marco', surname: 'Rossi', age: 20 },
    { id: 2, name: 'Alessio', surname: 'Branchi', age: 22 },
    { id: 3, name: 'Luca', surname: 'Verdi', age: 34 },
    { id: 4, name: 'Maria', surname: 'Rossi', age: 24 },
    { id: 5, name: 'Gianni', surname: 'Bianchi', age: 45 },
    { id: 6, name: 'Elio', surname: 'Neri', age: 52 },
    { id: 7, name: 'Andrea', surname: 'Marini', age: 33 },
    { id: 8, name: 'Luigi', surname: 'Rossi', age: 25 },
    { id: 9, name: 'Alessio', surname: 'Branchi', age: 22 },
    { id: 10, name: 'Luca', surname: 'Verdi', age: 34 },
    { id: 11, name: 'Maria', surname: 'Rossi', age: 24 },
    { id: 12, name: 'Gianni', surname: 'Bianchi', age: 45 },
    { id: 13, name: 'Elio', surname: 'Neri', age: 52 },
    { id: 14, name: 'Marco', surname: 'Rossi', age: 20 },
    { id: 15, name: 'Alessio', surname: 'Branchi', age: 22 },
]


let pag = new Pagination(users, 8).displayUser()






