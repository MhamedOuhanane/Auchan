// declaration des variable utilisé
let 
// Return les donner de localStorage
let liste = localStorage.getItem("carts");
// if (liste == "") {
//     console.log("no");
    
// }
// else {
//     console.log("yes");
    
// }
if (liste.length =0) {
    
}
else {

}


// la partie de carrousel "Panier"
let CarouselPanier = document.querySelector('#carouselpanier'); 
let buttonleft = document.querySelector('#buttonleft');
let buttonright = document.querySelector('#buttonright');
console.log(buttonleft,buttonright)

console.log(CarouselPanier);

CarouselPanier.addEventListener("wheel" , (evt)=>{
    evt.preventDefault();
    CarouselPanier.scrollLeft += evt.deltaY;
})

buttonleft.onclick = ()=>{
    console.log(CarouselPanier.scrollLeft);
    CarouselPanier.scrollLeft += 20;
};
buttonright.onclick = ()=>{
    console.log(CarouselPanier.scrollLeft);
    CarouselPanier.scrollLeft -= 20;
};

