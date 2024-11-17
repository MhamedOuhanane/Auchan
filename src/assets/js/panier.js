// // declaration des variable utilisé
let total = 0;

// // Return les donner de localStorage
let carts = JSON.parse(localStorage.getItem("carts")) || [];

import Categorie from "../data/produits.json" with {type: "json"};

if (carts.length !== 0) {
    document.getElementById("blocempty").classList.add("classblocemty");
    document.getElementById("bloccartes").classList.remove("classbloccartes");

    carts.forEach(element => {
        console.log(element.id);
        
        containerproduits.innerHTML += `<div class="produit hover:shadow-xl">
                            <div class="w-auto flex items-center ">
                                <input name="confermeproduits" type="checkbox" checked>
                            </div>
                            <div class="imageprod flex items-center  w-[17vw] md:w-[11vw]">
                                <img src=${"../../../" + Categorie[element.id].image} alt="">
                            </div>
                            <div class="w-[47vw] px-[2vw] flex flex-col justify-evenly gap-[0.2vw]">
                                <span class="titleprod font-bold text-[0.7rem] md:text-[1.2rem] lg:text-[1.5rem]">${Categorie[element.id].title}</span>
                                <span class="text-gray-700 text-[.5rem]  md:text-[.9rem] lg:text-[1.2rem] w-[100%] leading-[95%] md:leading-[96%]">${Categorie[element.id].subtitle}</span>
                                <div class="flex gap-[2vw]">
                                    <select name="confermeproduits" class="tailleprod bg-gray-200 rounded-lg pl-[1vw] text-[.6rem]  md:text-[.9rem] lg:text-[1.2rem]">
                                        <option name="confermeproduits" value="s" ${element.size === "s" ? "selected" : ""}>s</option>
                                        <option name="confermeproduits" value="m" ${element.size === "m" ? "selected" : ""}>m</option>
                                        <option name="confermeproduits" value="l" ${element.size === "l" ? "selected" : ""}>l</option>
                                        <option name="confermeproduits" value="xl" ${element.size === "xl" ? "selected" : ""}>xl</option>
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

        prixsize();
        total += element.price * element.quantity
                            
    }); 

    // Fonction pour mettre à jour le prix en fonction de la taille choisie
    function prixsize() {
        let tailleprod = document.querySelectorAll(".tailleprod");
        tailleprod.forEach((element, index) => {
            element.addEventListener("change", () => {
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
                }
            });
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
            if (carts[i].quantity != 0) {
                let prixt = (carts[i].price * carts[i].quantity).toFixed(2);
                element.textContent = prixt + " $";
            }
            MiselocalStorage()
        });
    };



    // Mise à jour de prix totale des produit
    function MiseTotale() {
        let total = 0;
        carts.forEach((elent , index) =>{
            let checkbox = document.querySelectorAll(".produit input[type='checkbox']")[index]; // l'a
            if (checkbox.checked) {
                total += elent.price * elent.quantity;
            }
        
        });
        Totalemd.textContent = total.toFixed(2) + " $";
        Totalesm.textContent = total.toFixed(2) + " $";
    };

    
    
    // Mise à jour de contenut de localStorage
    function MiselocalStorage(){
        let produit = carts.filter((element) => element.quantity != 0);
        localStorage.setItem("carts", JSON.stringify(produit));
        if (produit.length == 0) {
            document.getElementById("blocempty").classList.remove("classblocemty");
            document.getElementById("bloccartes").classList.add("classbloccartes");
        };
    };

    // Incrémentation de la Quantité des produit 
    let incbtn = document.querySelectorAll(".incbtn");
    incbtn.forEach((element,index) =>{
        element.onclick= ()=>{
            element.parentNode.children[1].textContent = ++carts[index].quantity;
            console.log(index);
            MiselocalStorage();
            MiseTotalprix();
            MiseTotale();
        };
    });

    // Décrémentation de la Quantité des produit 
    let decbtn = document.querySelectorAll(".decbtn");
    decbtn.forEach((element , index) => {
        element.onclick= ()=>{
            element.parentNode.children[1].textContent = --carts[index].quantity;
            
            if (carts[index].quantity == 0) {
                element.parentNode.parentNode.parentNode.remove();
                decbtn = [...decbtn].filter((elent) => elent !== element);
            };
            MiselocalStorage();
            MiseTotalprix();
            MiseTotale();
        };
    });
    
    // Suppression du carte de produit
    let deleteprod = document.querySelectorAll(".deleteprod");
    deleteprod.forEach((element,index) =>{
        element.onclick= ()=>{

            element.parentNode.parentNode.remove();
            deleteprod = [...deleteprod].filter((elent) => elent !== element);
            carts[index].quantity = 0;
            
            
            MiselocalStorage();
            MiseTotale();


            // Mise à jour de contenut de localStorage
        };
    });
        
        
    MiseTotalprix();
    MiseTotale();
    // Mise à jour de contenut de localStorage
    MiselocalStorage();
    
    
};




// la partie du carousel "Panier"
let CarouselPanier = document.querySelector('#carouselpanier');
let buttonleft = document.querySelector('#buttonleft');
let buttonright = document.querySelector('#buttonright');
// console.log(buttonleft, buttonright)

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

// liee le devision de card avec l'input checked
// console.log(prod);

// prod.onclick= function() {
//     console.log(checkedprod);
    
//     checkedprod.setAttribute("chacked");
// };

