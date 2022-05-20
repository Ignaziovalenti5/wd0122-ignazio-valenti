
const APPURL = 'json/users.json'
const tabella = document.createElement('table')
document.body.append(tabella)

let th = document.createElement('tr')

let thId = document.createElement('th')
thId.innerHTML = "ID"
let thName = document.createElement('th')
thName.innerHTML = "Nome"
let thUsername = document.createElement('th')
thUsername.innerHTML = "Username"
let thEmail = document.createElement('th')
thEmail.innerHTML = "Email"
let thBottone = document.createElement('button')
thBottone.innerHTML = "Add user"

th.append(thId, thName, thUsername, thEmail, thBottone)
tabella.append(th)

fetch(APPURL)
.then(res => res.json())
.then(res => {
    
    for(user of res){
        let tr = document.createElement('tr')

        let id = document.createElement('td')
        id.innerHTML = user.id

        let nome = document.createElement('td')
        nome.innerHTML = user.name

        let username = document.createElement('td')
        username.innerHTML = user.username

        let email = document.createElement('td')
        email.innerHTML = user.email

        let tdBtn = document.createElement('td')
        let btnView = document.createElement('button')
        btnView.innerHTML = 'View'

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'Edit'

        let btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'Delete'
        btnDelete.setAttribute('data-bs-toggle', 'modal')
        btnDelete.setAttribute('data-bs-target', '#exampleModal')
        btnDelete.setAttribute('data-id', user.id)
        btnDelete.addEventListener('click', function(){
            console.log(user[btnDelete[data-id]]);
            // fetch(APPURL+'/'+user.id, {
            //     method: 'DELETE'
            // })
        })

        tdBtn.append(btnView, btnEdit, btnDelete)

        tr.append(id, nome, username, email, tdBtn)
        tabella.append(tr)



        btnView.addEventListener('click', () => {

        })

        btnEdit.addEventListener('click', () => {

        })

        // btnDelete.addEventListener('click', () => {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!',
        //         footer: '<a href="">Why do I have this issue?</a>'
        //       })
        // })



        

    }

    // let btnCancella = document.querySelector('#cancella')
    
    // btnCancella.addEventListener('click', function(e){
    //     e.preventDefault()


        
        
    //     console.log(res[5].id);

        
    
        
    // })

})


