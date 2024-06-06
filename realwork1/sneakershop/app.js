const toCart = document.querySelectorAll('.cart')
let onclik = function(){
    alert('This is wonderful, congratulations on adding an item')
}
for(let i of toCart){
    i.addEventListener('click', onclik)
}