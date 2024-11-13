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