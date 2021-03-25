
const userName =  document.querySelector('#user')
const password =  document.querySelector('#password')

const signin =  document.querySelector('#signin')

let userExist = localStorage.getItem('user')
let passExist = localStorage.getItem('password')

signin.addEventListener('click', (e)=>{
    e.preventDefault()
    if(user.value === ''||password.value === ''){
        alert('You must fill the information')
    }else{ 
        if((userExist && userName.value.trim() === userExist) && (passExist && password.value === passExist)){
        setTimeout(()=>{
            window.location = 'index.html'
        },1000)
       
    }else{
        alert('User name not exist or the password is wrong')
    }
}
})
