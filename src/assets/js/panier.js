// // declaration des variable utilisé
let total = 0;

// // Return les donner de localStorage
let carts = JSON.parse(localStorage.getItem("carts")) || [];

import Categorie from "../data/produits.json" with {type: "json"};

if (carts.length !== 0) {
    document.getElementById("blocempty").classList.add("classblocemty");
    document.getElementById("bloccartes").classList.remove("classbloccartes");

    carts.forEach(element => {
        let produitId = element.id - 1;
        console.log(element.id);
        
        containerproduits.innerHTML += `<div class="produit hover:shadow-xl">
                            <div class="w-auto flex items-center ">
                                <input name="confermeproduits" type="checkbox" checked>
                            </div>
                            <div class="imageprod flex items-center  w-[17vw] md:w-[11vw]">
                                <img src=${"../" + Categorie[produitId].image} alt="">
                            </div>
                            <div class="w-[47vw] px-[2vw] flex flex-col justify-evenly gap-[0.2vw]">
                                <span class="titleprod font-bold text-[0.7rem] md:text-[1.2rem] lg:text-[1.5rem]">${Categorie[produitId].title}</span>
                                <span class="text-gray-700 text-[.5rem]  md:text-[.9rem] lg:text-[1.2rem] w-[100%] leading-[95%] md:leading-[96%]">${Categorie[produitId].subtitle}</span>
                                <div class="flex gap-[2vw]">
                                    <select name="confermeproduits" class="tailleprod bg-gray-200 rounded-lg pl-[1vw] text-[.6rem]  md:text-[.9rem] lg:text-[1.2rem]">
                                        <option name="confermeproduits" value="s" ${element.size == "s" ? "selected" : ""}>s</option>
                                        <option name="confermeproduits" value="m" ${element.size == "m" ? "selected" : ""}>m</option>
                                        <option name="confermeproduits" value="l" ${element.size == "l" ? "selected" : ""}>l</option>
                                        <option name="confermeproduits" value="xl" ${element.size == "xl" ? "selected" : ""}>xl</option>
                                    </select>
                                    <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw] line-through hidden">${element.price} $</span>
                                    <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw]">${element.price} $</span>
                                </div>
                            </div>
                            <div class="w-[17vw] flex flex-col items-center justify-around pl-[5vw]">
                                    <span class="totalprix font-bold text-darkViolet text-[.8rem] md:text-[1.3rem] lg:text-[1.7rem] ">${element.price * element.quantity } $</span>
                                    <div class="divQty flex justify-evenly gap-[1.6vw]  border-2 rounded-lg px-[1.2vw]">
                                        <button class="decbtn text-[170%]">-</button>
                                        <span class="font-bold text-[0.7rem] md:text-[1.4rem] lg:text-[1.7rem]">${element.quantity}</span>
                                        <button class="incbtn text-[170%]">+</button>
                                    </div>
                                    <button class="deleteprod bg-red-400 px-[1.5vw] rounded-md" >delete</button>
                                </div>
                            </div>
                            </div>`
        console.log(element.id);
        
        total += element.price * element.quantity
        prixsize();
    }); 

    // Fonction pour supprimer un produit du panier
    function deleteproduit(index) {
        carts.splice(index, 1);
        MiselocalStorage();
        let produitdel = document.querySelectorAll(".produit");
        if (produitdel) {
            produitdel[index].remove(); 
            prixsize();
        }
        if (carts.length > 0) {
            countCart.innerHTML += `
                <span class="absolute -right-5 text-[.8rem] bg-lightViolet size-6 max-sm:-right-4 center rounded-full">
                    ${carts.length}
                </span>
            `
        }
        else{
            document.querySelectorAll(".absolute").forEach((element) => element.remove());

        }
        ModifiQty();
        MiseTotale(); 
    };
    // Fonction pour mettre à jour le prix en fonction de la taille choisie
    function prixsize() {
        let tailleprod = document.querySelectorAll(".tailleprod");
        tailleprod.forEach((element, index) => {
            element.onclick= () => {
                let pricebase = carts[index].prix;

                
                if (carts[index].size !== element.value) {
                    let pricenouv = pricebase;

                    switch (element.value) {
                        case "m":
                            pricenouv += pricebase * 0.05;
                            break;
                        case "l":
                            pricenouv += pricebase * 0.10;
                            break;
                        case "xl":
                            pricenouv += pricebase * 0.20;
                            break;
                        default:
                            pricenouv = pricebase;
                            break;
                    }

                    carts[index].price = pricenouv.toFixed(2);
                    carts[index].size = element.value;
                    element.parentNode.children[2].textContent = carts[index].price + " $";
                    
                    localStorage.setItem("carts", JSON.stringify(carts));
                    MiseTotalprix();
                    MiseTotale();
                }
            };
        });
    };

    // modifier le checked de carte des produits
    let imgproduit = document.querySelectorAll(".imageprod");
    imgproduit.forEach((element) =>{
        element.addEventListener("click" , () =>{
            element.parentNode.children[0].children[0].toggleAttribute("checked");
            
            MiseTotale();
        });

    });
    

    // Mise à jour de totale prix de chaque produit 
    function MiseTotalprix() {
        let totalprix = document.querySelectorAll(".totalprix");
        totalprix.forEach((element, i) => {

            let prixt = (carts[i].price * carts[i].quantity).toFixed(2);
            element.textContent = prixt + " $";

            MiselocalStorage();
        });
    };



    // Mise à jour de prix totale des produit
    function MiseTotale() {
        let total = 0;
        carts.forEach((elent , index) =>{
            let checkbox = document.querySelectorAll(".produit input[type='checkbox']")[index];
            if (checkbox && checkbox.checked) {
                total += elent.price * elent.quantity;
            }
        
        });
        Totalemd.textContent = total.toFixed(2) + " $";
        Totalesm.textContent = total.toFixed(2) + " $";
    };

    
    
    // Mise à jour de contenut de localStorage
    function MiselocalStorage(){
        let produit = carts.filter((element) => element.quantity > 0);
        localStorage.setItem("carts", JSON.stringify(produit));

        if (produit.length == 0) {
            document.getElementById("blocempty").classList.remove("classblocemty");
            document.getElementById("bloccartes").classList.add("classbloccartes");
        };
    };

    //foctionnement de modifié la quantité des produit et suppression du produit
    function ModifiQty() {

        // Incrémentation
        let incbtn = document.querySelectorAll(".incbtn");
        incbtn.forEach((element, index) => {
            element.onclick = () => {
                carts[index].quantity++;
                element.parentNode.children[1].textContent = carts[index].quantity;
                MiseTotalprix();
                MiselocalStorage();
                MiseTotale();
                produitdel();
            };
        });

        // Décrémentation
        let decbtn = document.querySelectorAll(".decbtn");
        decbtn.forEach((element, index) => {
            element.onclick = () => {
                if (carts[index].quantity > 1) {
                    carts[index].quantity--;
                    element.parentNode.children[1].textContent = carts[index].quantity;
                } else {
                    deleteproduit(index);
                }
                MiseTotalprix();
                MiselocalStorage();
                MiseTotale();
            };
        });

        // Suppression
        let deleteprod = document.querySelectorAll(".deleteprod");
        deleteprod.forEach((elent, index) => {
            elent.onclick= () =>{
                deleteproduit(index);
            };
        });
    };


    // Confirmation de la commande
    confermeprod.addEventListener("click", () => {

        let checkedItems = document.querySelectorAll(".produit input[type='checkbox']:checked");

        checkedItems.forEach((checkbox, index) => {
            let indexprod = [...document.querySelectorAll(".produit input[type='checkbox']")].indexOf(checkbox);
            deleteproduit(indexprod);
        });
        MiseTotale();
    });

    MiseTotale();
    // Initialisation des événements
    ModifiQty();
    
};




// la partie du carousel "Panier"
let CarouselPanier = document.querySelector('#carouselpanier');
let buttonleft = document.querySelector('#buttonleft');
let buttonright = document.querySelector('#buttonright');
// console.log(buttonleft, buttonright)
// console.log(buttonleft, buttonright)

// console.log(CarouselPanier);
// console.log(CarouselPanier);

CarouselPanier.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    CarouselPanier.scrollLeft += evt.deltaY;
})

buttonleft.onclick = () => {
    console.log(CarouselPanier.scrollLeft);
    CarouselPanier.scrollBy({
        left: -250,
        behavior: 'smooth'
    });
};


buttonright.onclick = () => {
    console.log(CarouselPanier.scrollLeft);
    CarouselPanier.scrollBy({
        left: 250,
        behavior: 'smooth'
    });
};


// import json product data from data folder
import products from "../data/populare-products.json" with { type: "json" };

products.map((product) => {
    carouselpanier.innerHTML += `

    <div class="hover:scale-[95%]">
        <div class="h-[100%] gap-4 max-sm:w-44 w-60  ">
            <div class="card shadow-sm hover:shadow-md transition-all ease-out delay-75">
                <a href="produit-details.html" id="product-image" class="h-[140px] cursor-pointer center" onclick="showProductDetails(${product.id})">
                    <img src=${"../" + product.image} alt="" class="h-full object-contain">
                </a>
                <div class="flex justify-between items-start flex-wrap">
                    <span class="w-[50%] min-h-[60px] font-bold text-[1.2rem] max-md:text-[1rem] max-sm:text-[.7rem]">${product.title}</span>
                    <div class="flex items-center gap-2 text-gray-500 max-md:text-xs">
                        <img src="../assets/images/icons/star.svg" alt="star icon" class="size-5">
                        <span class="">4.5</span>
                        <span>( 21 )</span>
                    </div>
                    <span class="text-gray-700 max-md:text-[.7rem] max-sm:text-[.5rem] h-[60px] max-md:h-[50px]">${product.subtitle}</span>
                    <div class="flex items-center justify-between w-full  pt-4 gap-4">
                        <span class="font-bold text-darkViolet text-[1.4rem] max-md:text-[1rem]">${product.price.toFixed(2) + "$"}</span>
                        <button onclick="addToCart(${product.id}, ${1}, 's', ${product.price})" class="ajouterpanie primary-btn center gap-2 flex-1">
                            <span class="w-[100%] text-[.8rem] max-sm:text-[.5rem]">AJOUTER</span>
                            <img src="../assets/images/icons/cart-white.svg" class="size-4" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});

let AjoutAupan = document.querySelectorAll(".ajouterpanie");
AjoutAupan.forEach((element) =>{
    
    element.addEventListener("click" , ()=>{
        // Refresh the page
        location.reload();
    });

});