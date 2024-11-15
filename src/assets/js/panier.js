// // declaration des variable utilisé
let totale = 0;
// // Return les donner de localStorage
let carts = JSON.parse(localStorage.getItem("carts"));
console.log(carts);

import Categorie from "../data/produits.json" with {type: "json"};
console.log(Categorie[0].image);

if (carts.length !== 0) {
    document.getElementById("blocempty").classList.add("classblocemty");
    document.getElementById("bloccartes").classList.remove("classbloccartes");

    carts.forEach(element => {
        let cateId = element.id - 1;
        let card_Id = Date.now().toString(); // créete un variable et donner le a id de la carte ajoputer
        console.log(Categorie[cateId].image);
        
        containerproduits.innerHTML += `<div id=${card_Id} class="produit">
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
                                    <span class="totalprix font-bold text-darkViolet text-[.8rem] md:text-[1.3rem] lg:text-[1.7rem] pl-[4vw]">${element.price * element.quantity } $</span>
                                    <div class="divQty flex justify-evenly gap-[1.6vw]  border-2 rounded-lg px-[1.2vw]">
                                        <button id="dec${card_Id}" class="text-[170%]">-</button>
                                        <span class="font-bold text-[0.7rem] md:text-[1.4rem] lg:text-[1.7rem]">${element.quantity}</span>
                                        <button id="inc${card_Id}" class="text-[170%]">+</button>
                                    </div>
                                    <button class="delete bg-red-400 px-[1.5vw] rounded-md" >delete</button>
                                </div>
                            </div>
                        </div>`
                        // decrementation de quentité du produit
                        document.getElementById(`dec${card_Id}`).addEventListener("click" , ()=>{
                            element.quantity -= 1; 
                            document.getElementById(`dec${card_Id}`).parentNode.children[1].textContent = element.quantity;

                            console.log(element.quantity);
                            
                            if (element.quantity == "0") {
                                console.log(element.quantity);
                                element.spl;
                                console.log(card_Id);
                            }
                            
                        });
                        // decrementation de quentité du produit
                        document.getElementById(`inc${card_Id}`).addEventListener("click" , ()=>{
                            document.getElementById(`inc${card_Id}`).parentNode.children[1].textContent = element.quantity++;                            
                        });

                        totale += element.price * element.quantity;
                        console.log(totale);
                        
                        // let card = document.getElementById
                        // card_Id.addEventListener("click" , ()=>{
                        //     card_Id.
                        // });

    

    });     

    Totalemd.textContent = `${totale} \$` ;
    Totalesm.textContent = `${totale} \$` ;

    

}   


// card_Id.addEventListener("click" , ()=>{
//     card_Id.chil

// });
// let inputchecked = document.getElementById(".checkedprod");
// inputchecked.setAttribute.toggle("checked")
// let inputchecked = document.querySelectorAll(".checkedprod");
// inputchecked.forEach(check => {
    
// });




// letdeletprod = document.getElementsByClassName("deletprod")
// deletprod.onclick = () =>{
//     deletprod.
// }




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

