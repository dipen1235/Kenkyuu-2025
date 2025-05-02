'use strict'
const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");



if (open) {
    open.addEventListener('click', () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    });
}

let removeCart = document.getElementsByClassName('rem');
console.log(removeCart);
for (let i = 0; i < removeCart.length; i++) {
    let button = removeCart[i];

    button.addEventListener('click', (event) => {
        let remove = event.target;
        
    })
}