
function login(){

    let account = document.getElementById('acno').value
    let password = document.getElementById('pswd').value


    if(account in localStorage){
        let key = localStorage.getItem(account)


    
        let detailsss = JSON.parse(key)
        console.log(key)
        console.log(detailsss)
    
        if (password == detailsss.pswd){
            alert('Login succesful')
            window.location='./user.html'
            localStorage.setItem('user',detailsss.name)
        }
        else{
            alert('Wrong Password')
        }
    }

    else{
        alert("Account doesn't exist")
    }
}