const body = document.getElementsByTagName("body");

const iconMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

iconMenu.onclick = () => {
    // add class 'noScroll' to body to stop scrolling when burger menu is open
    body[0].classList.toggle("noScroll");
    menu.classList.toggle("drop-menu");
};

const productsCart = localStorage.getItem("carts");
const cart = productsCart ? JSON.parse(productsCart) : [];
let productObj;

window.addToCart = function(productID, productQty, productSize, productPrice) {
    if(productSize == "m") productPrice += productPrice * 0.05;
    if(productSize == "l") productPrice += productPrice * 0.10;
    if(productSize == "xl") productPrice += productPrice * 0.20;
    
    let isExist;
    cart.map((product) => {
        if(product.id === productID){
            product.quantity = productQty;
            localStorage.setItem("carts", JSON.stringify(cart));
            isExist = true;
        }
    })

    if(!isExist){
        productObj = {
            id: productID,
            quantity: productQty,
            size: productSize,
            price: productPrice
        }
        
        cart.push(productObj);
        
        localStorage.setItem("carts", JSON.stringify(cart));
    }
    changeCount();
};

const countCart = document.getElementById("count-cart") || "<div></div>";
window.changeCount = function() {
    if(cart.length) {
        countCart.innerHTML += `
            <span class="absolute -right-5 text-[.8rem] bg-lightViolet size-6 max-sm:-right-4 center rounded-full">
                ${cart.length}
            </span>
        `
    };
}
changeCount();