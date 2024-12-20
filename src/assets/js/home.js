// import json ads data from its path
import carouselData from "../data/images-carousel.json" with {type: "json"};
const mainImage = document.getElementById("image-carousel");
const chevronLeft = document.getElementById("chevron-left");
const chevronRight = document.getElementById("chevron-right");

mainImage.src = carouselData[0].url;
let index = 0;
chevronRight.onclick = function nextImage() {
    index++;
    if (index == 5) index = 0;
    mainImage.src = carouselData[index].url;
}
chevronLeft.onclick = function previousImage() {
    index--;
    if (index == -1) index = carouselData.length - 1;
    mainImage.src = carouselData[index].url;
}
// make images slide itself each 5s
setInterval(() => {
    index++;
    if (index == 5) index = 0;
    mainImage.src = carouselData[index].url;
}, 5000);

// import json product data from data folder
import products from "../data/populare-products.json" with { type: "json" };
const productsContainer = document.getElementById("products-container");

products.map((product) => {
    productsContainer.innerHTML += `
    <div class="card shadow-md hover:shadow-lg transition-all ease-out delay-75 justify-between">
        <a href="pages/produit-details.html" id="product-image" class="h-[140px] cursor-pointer center" onclick="showProductDetails(${product.id})">
            <img src=${product.image} alt="" class="h-full object-contain">
        </a>
        <div class="flex justify-between items-center flex-wrap lg:mb-4">
            <span class="font-bold text-[1.2rem] max-md:text-[1rem] max-sm:text-[.7rem]">${product.title}</span>
            <div class="flex items-center gap-2 text-gray-500 max-md:text-xs">
                <img src="assets/images/icons/star.svg" alt="star icon" class="size-5">
                <span class="">4.5</span>
                <span>( 21 )</span>
            </div>
            <span class="text-gray-700 max-md:text-[.7rem] max-sm:text-[.5rem]">${product.subtitle}</span>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap pt-4 gap-4">
            <span class="font-bold text-darkViolet text-[1.4rem] max-md:text-[1rem] max-xl:basis-[100%]">${product.price.toFixed(2) + "$"}</span>
            <button onclick="addToCart(${product.id}, ${1}, 's', ${product.price})" class="primary-btn center gap-2 flex-1">
                <span class="text-[.8rem] max-sm:text-[.5rem]">AJOUTER</span>
                <img src="assets/images/icons/cart-white.svg" class="size-4" alt="">
            </button>
        </div>
    </div>
    `;
})
