
/*
 */


let items = JSON.parse(localStorage.getItem('addedToCart'))
let theLis = [...items]

let productsDom = document.querySelector('.products')
function set_Products(){
    let prod = theLis.map(item=>{
        return  `<div class="product-item" key=${item.id}>
        <img src=${item.image} class="product-item-img" alt=${item.title}>
        <div class="product-item-formation">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <span>Size: ${item.size}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart delete" onclick="deletItem(${item.id})">Delete</button>
            <i class="fas fa-heart myIcon"></i>
        </div>
    </div>`
    })
    productsDom.innerHTML = prod
}
set_Products()

let neOb = []
function deletItem(id){
    console.log(id)
    let newList = theLis.filter(it => it.id !== id)
    
   theLis = newList
   set_Products()
    // localStorage.removeItem('addedToCart')
//     neOb = JSON.stringify(newList)
//   localStorage.setItem('addedToCart', neOb)
//   return 
}