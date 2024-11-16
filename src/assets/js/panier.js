// // declaration des variable utilisé
let totale = Number;

// // Return les donner de localStorage
let carts = JSON.parse(localStorage.getItem("carts")) || [];

import Categorie from "../data/produits.json" with {type: "json"};

if (carts.length !== 0) {
    document.getElementById("blocempty").classList.add("classblocemty");
    document.getElementById("bloccartes").classList.remove("classbloccartes");

    carts.forEach(element => {
        let cateId = element.id - 1;
        
        containerproduits.innerHTML += `<div class="produit">
                            <div class="w-auto flex items-center ">
                                <input name="confermeproduits" type="checkbox" class="checkedprod" checked>
                            </div>
                            <div class="imageprod flex items-center  w-[17vw] md:w-[11vw]">
                                <img src=${"../../../" + Categorie[cateId].image} alt="">
                            </div>
                            <div class="w-[47vw] px-[2vw] flex flex-col justify-evenly gap-[0.2vw]">
                                <span class="titleprod font-bold text-[0.7rem] md:text-[1.2rem] lg:text-[1.5rem]">${Categorie[cateId].title}</span>
                                <span class="text-gray-700 text-[.5rem]  md:text-[.9rem] lg:text-[1.2rem] w-[100%] leading-[95%] md:leading-[96%]">${Categorie[cateId].subtitle}</span>
                                <div class="flex gap-[2vw]">
                                    <select name="confermeproduits" class="tailleprod bg-gray-200 rounded-lg pl-[1vw] text-[.6rem]  md:text-[.9rem] lg:text-[1.2rem]">
                                        <option name="confermeproduits " value="S">S</option>
                                        <option name="confermeproduits " value="M">M</option>
                                        <option name="confermeproduits " value="L">L</option>
                                        <option name="confermeproduits " value="XL">XL</option>
                                    </select>
                                    <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw] line-through hidden">${element.price} $</span>
                                    <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw]">${element.price} $</span>
                                </div>
                            </div>
                            <div class="w-[17vw] flex flex-col items-center justify-around pl-[5vw]">
                                    <span class=" font-bold text-darkViolet text-[.8rem] md:text-[1.3rem] lg:text-[1.7rem] ">${element.price * element.quantity } $</span>
                                    <div class="divQty flex justify-evenly gap-[1.6vw]  border-2 rounded-lg px-[1.2vw]">
                                        <button class="decbtn text-[170%]">-</button>
                                        <span class="font-bold text-[0.7rem] md:text-[1.4rem] lg:text-[1.7rem]">${element.quantity}</span>
                                        <button class="incbtn text-[170%]">+</button>
                                    </div>
                                    <button class="deleteprod bg-red-400 px-[1.5vw] rounded-md" >delete</button>
                                </div>
                            </div>
                            </div>`
                            
        totale += element.price * element.quantity;
        
                            
                            
                            
    });  
    // Mise à jour de total de prix
    function MiseTotal() {
            let total = 0;
            carts.forEach(element => {
            total += element.price * element.quantity;
        });
        Totalemd.textContent = total + "$";
        Totalesm.textContent = total + "$";
    }
    // Mise à jour de contenut de localStorage
    function MiselocalStorage(){
        let produit = carts.filter((element) => element.quantity != 0);
        localStorage.setItem("carts", JSON.stringify(produit));
        if (produit.length == 0) {
            document.getElementById("blocempty").classList.remove("classblocemty");
            document.getElementById("bloccartes").classList.add("classbloccartes");
        }
    }

    // Incrémentation de la Quantité des produit 
    let incbtn = document.querySelectorAll(".incbtn");
    incbtn.forEach((element,index) =>{
        element.onclick= ()=>{
            element.parentNode.children[1].textContent = ++carts[index].quantity;
            console.log(index);
            MiselocalStorage();
            MiseTotal();
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
                MiselocalStorage();
            };
            MiseTotal();
        };
    });
    
    // Suppression du carte de produit
    let deleteprod = document.querySelectorAll(".deleteprod");
    deleteprod.forEach((element,index) =>{
        element.onclick= ()=>{

            element.parentNode.parentNode.remove();
            deleteprod = [...deleteprod].filter((elent) => elent !== element);

            carts[index].quantity = 0;

            // Mise à jour de contenut de localStorage
            MiselocalStorage()
            MiseTotal()
        };
    });
        
        
    
    MiseTotal()
    // Mise à jour de contenut de localStorage
    MiselocalStorage()
    
    
}  




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

