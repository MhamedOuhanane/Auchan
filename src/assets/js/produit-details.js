let productDetails_ID = sessionStorage.getItem("productDetails") - 1;
const productDetailsNoeud = document.getElementById("productDetailsNoeud");

import products from "../data/produits.json" with { type: "json" };
let size = "s";
// code here ...
productDetailsNoeud.innerHTML = `
    <div class="h-full w-full container flex max-sm:flex-col-reverse justify-between max-md:px-1">
        <div class="w-1/2 max-sm:w-full py-4 flex flex-col gap-2">
            <span class="text-[1.6rem] max-sm:text-[1rem] font-bold">${products[productDetails_ID].title}</span>
            <div class="flex items-center gap-2 text-gray-500 max-md:text-xs">
                <img src="../assets/images/icons/star.svg" alt="star icon" class="size-5">
                <span class="">4.5</span>
                <span>( 21 )</span>
            </div>
            <p class="text-gray-700 text-[1rem] max-sm:text-[.6rem]">${products[productDetails_ID].description}.</p>
            <div class="sizes pt-4 flex gap-4 items-center">
                <span class="font-bold">Size: </span>

                <input type="radio" checked id="S" name="size">
                <label id="s-size" for="S">S</label>
                <input type="radio" id="M" name="size">
                <label id="m-size" for="M">M</label>
                <input type="radio" id="L" name="size">
                <label id="l-size" for="L">L</label>
                <input type="radio" id="XL" name="size">
                <label id="xl-size" for="XL">XL</label>
                
            </div>
            <select class="w-1/6 bg-gray-100 border border-gray-300 rounded-lg p-1 mt-4 text-[.8rem] max-sm:text-[.6rem]" name="quantity" id="quantity-noeud">
                <option value="1" selected>1</option>
            </select>
            <span class="text-darkViolet text-[1.6rem] font-bold pt-4">${products[productDetails_ID].price} $</span>
            <button id="btn" class="primary-btn center gap-2 h-10 w-1/2">
                <span class="text-[.8rem] max-sm:text-[.5rem]">AJOUTER AU PANIER</span>
                <img src="../assets/images/icons/cart-white.svg" class="size-4" alt="">
            </button>
        </div>
        <div class="w-1/2 max-sm:w-full center">
            <img src="../${products[productDetails_ID].image}" class="max-h-[250px]" alt="">
        </div>
    </div>
`;

const quantityNoued = document.getElementById("quantity-noeud");
for(let i=1; i <= products[productDetails_ID].quantity; i++){
    quantityNoued.innerHTML += `<option value=${i}>${i}</option>`;
}

const smallSize = document.getElementById("S");
const mediumSize = document.getElementById("M");
const largeSize = document.getElementById("L");
const xLargeSize = document.getElementById("XL");

smallSize.onclick = function () { size = "s" };
mediumSize.onclick = function () { size = "m" };
largeSize.onclick = function () { size = "l" };
xLargeSize.onclick = function () { size = "xl" };

document.getElementById("btn").onclick = () => {
    addToCart(products[productDetails_ID].id, quantityNoued.value, size, products[productDetails_ID].price);
}

const discoverMoreProducts = document.getElementById("discover-more-products");
const filtredArray = products.filter((product) => product.categories == products[productDetails_ID].categories);
let array = filtredArray.slice(0, 6);

array.map((product) => {
    discoverMoreProducts.innerHTML += `
        <div class="card shadow-md hover:shadow-lg transition-all ease-out delay-75">
            <a href="produit-details.html" id="product-image" class="h-[140px] cursor-pointer center" onclick="showProductDetails(${product.id})">
                <img src="../${product.image}" alt="" class="h-full object-contain">
            </a>
            <div class="flex justify-between items-center flex-wrap">
                <span class="font-bold text-[1.2rem] max-md:text-[1rem] max-sm:text-[.7rem]">${product.title}</span>
                <div class="flex items-center gap-2 text-gray-500 max-md:text-xs">
                    <img src="../assets/images/icons/star.svg" alt="star icon" class="size-5">
                    <span class="">4.5</span>
                    <span>( 21 )</span>
                </div>
                <span class="text-gray-700 max-md:text-[.7rem] max-sm:text-[.5rem] min-h-[60px] max-md:min-h-[50px]">${product.subtitle}</span>
                <div class="flex items-center justify-between w-full flex-wrap pt-4 gap-4">
                    <span class="font-bold text-darkViolet text-[1.4rem] max-md:text-[1rem]">${product.price.toFixed(2) + "$"}</span>
                    <button class="primary-btn center gap-2 flex-1" onclick="addToCart(${product.id}, ${1}, 's', ${product.price})">
                        <span class="text-[.8rem] max-sm:text-[.5rem]">AJOUTER</span>
                        <img src="../assets/images/icons/cart-white.svg" class="size-4" alt="">
                    </button>
                </div>
            </div>
        </div>
    `;
})