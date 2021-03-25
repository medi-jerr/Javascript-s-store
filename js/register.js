
const user =  document.querySelector('#user')
const email =  document.querySelector('#email')
const password =  document.querySelector('#password')

const signup =  document.querySelector('#signup')

signup.addEventListener('click', (e)=>{
    e.preventDefault();
    if(user.value === ''||email.value === ''||password.value === ''){
        alert('You must fill the information')
    }else{
        localStorage.setItem('user',user.value.trim())
        localStorage.setItem('email',email.value.trim())
        localStorage.setItem('password',password.value)
        setTimeout(()=>{
            window.location = 'login.html'
        },1000)
    }
})

