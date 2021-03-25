const username = document.querySelector('#username')
const links = document.querySelector('#links')
const yourname = document.querySelector('#yourname')
const logoutBtn = document.querySelector('#logout')



let user = localStorage.getItem('user')

if(user){
    
    links.remove()
    username.style.display = 'flex'
    yourname.innerHTML = user
}

logoutBtn.addEventListener('click', ()=>{
    localStorage.clear()
    window.location = 'regester.html'
})