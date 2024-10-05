let welcome= document.getElementById('welcome')


let user = localStorage.getItem('user')

if (user) {
    // Display the welcome message with the user's name
    welcome.innerHTML = `Welcome ${user}`;
} else {
    console.error('User not found in localStorage');
}





function deposit(){

    let amount = Number(document.getElementById('depositamount').value)
    let acno= document.getElementById('acno').value

    if(acno in localStorage){
        let details = JSON.parse(localStorage.getItem(acno) )

        details.balance+= amount

        localStorage.setItem(acno, JSON.stringify(details))

        alert(`Your Current Balance ${details.balance}`)

        // let result = document.getElementById('resultDeposit')

        // result.innerHTML = `<p> Balance : ${details.balance} </p> `
        
        let mainResult= document.getElementById('result')

        mainResult.style.display='flex'

        mainResult.innerHTML=`Your  current balance : ${details.balance}`

        document.getElementById('acno').value=''
        document.getElementById('depositamount').value=''
    }
    else{
        alert('Wrong Account Number')
    }
}
function withdraw(){
    let amount = Number(document.getElementById('withdrawamount').value)
    let acno = document.getElementById('acno').value

    if (acno in localStorage){


        let details = JSON.parse(localStorage.getItem(acno))

        if(details.balance < amount){
            alert('Insufficient balance')
            alert(`yor current balance : ${details.balance}`)

            
        }
        else{

            details.balance-=amount
            alert(`Your current Balance is ${details.balance}`)

            localStorage.setItem(acno,JSON.stringify(details))

            // let result= document.getElementById('resultWithdraw')
            // result.innerHTML=`<p> Balance : ${details.balance} </p>`

            let mainResult= document.getElementById('result')

        mainResult.style.display='flex'

        mainResult.innerHTML=`Your  current balance : ${details.balance}`

        document.getElementById('acno').value=''
        document.getElementById('withdrawamount').value=''

        }
    }

    else{
        alert('Wrong Account Number')
    }
}

function logout(){
    localStorage.clear()
    window.location='./index.html'
}

