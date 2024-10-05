
function register(){
    let detail = {
        name : document.querySelector('#username').value,
        acno : document.getElementById('acno').value,
        pswd : document.getElementById('pswd').value,
        balance : 0
    }

    console.log(detail)


    if (detail.acno in localStorage){
        alert('Account no. already exists')
    }

    else{
    localStorage.setItem(detail.acno,JSON.stringify(detail))

    window.location='./login.html'
    }

}