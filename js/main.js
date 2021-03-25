

/** 
 * @function set_Products
 * @returns(object) - map the items
*/

let productsDom = document.querySelector('.products')

function set_Products() {
    let prod = items.map(item => {
        return `<div class="product-item" key=${item.id}>
        <img src=${item.image} class="product-item-img" alt=${item.title}>
        <div class="product-item-formation">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <span>Size: ${item.size}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onclick="checkUser(${item.id})">Add to cart</button>
            <i class="fas fa-heart myIcon"></i>
        </div>
    </div>`
    })
    productsDom.innerHTML = prod
}
set_Products()

/** 
 * @function checkUser
 * @param (number) - id of the choosed element 
 * @returns(array) - save the choose items in local storage
*/

let choosedItemDom = document.querySelector('.choosed-items')
let badge = document.querySelector('.badge')

let choosing = localStorage.getItem('addedToCart')? JSON.parse(localStorage.getItem('addedToCart')):[];

function checkUser(id) {
    if (localStorage.getItem('user')) {
        let itemChoose = items.find(i => i.id === id)
        
        choosing = [...choosing, itemChoose]
        localStorage.setItem('addedToCart', JSON.stringify(choosing))
        dropDownMenu(itemChoose,choosing)
       
    } else {
        window.location = 'login.html'
    }
}

/**
 * @function dropDown
 */
window.onload = dropDownMenu()
 function dropDownMenu(chs,choosedItem){
    if(choosing){
        choosedItemDom.innerHTML = choosing.map(it=>{
            return `<p>${it.title}</p>`
        })
            
       if(choosing.length){
        badge.innerHTML = choosing.length
        badge.style.display = 'block'
       }
        
    }
 }

/** 
 * @function appearDrop
 * @returns(string) - 
*/

let dropDown = document.querySelector('.drop-down')
function appearDrop() {
    if (choosedItemDom.innerHTML == '') {
        dropDown.style.display = 'none'
    } else {
        dropDown.style.display == 'block' ? dropDown.style.display = 'none' : dropDown.style.display = 'block'
    }

}
