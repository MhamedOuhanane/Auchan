const productsCart = localStorage.getItem("carts");
const cart = productsCart ? JSON.parse(productsCart) : [];
let productObj;

window.addToCart = function(productID, productQty, productSize, productPrice) {
    let isExist;
    cart.map((product) => {
        if(product.id === productID){
            product.quantity += 1;
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
}