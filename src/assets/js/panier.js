// // declaration des variable utilisé
let totale = 0;
// // Return les donner de localStorage
let carts = JSON.parse(localStorage.getItem("carts"));
console.log(carts);

import Categorie from "../data/produits.json" with {type: "json"};
console.log(Categorie[0].image);


if (carts.length !== 0) {
    document.getElementById("blocempty").classList.toggle("classblocemty");
    document.getElementById("bloccartes").classList.toggle("classbloccartes");

    carts.forEach(element => {
        let card_Id = new Date().toString(); // créete un variable et donner le a id de la carte ajoputer

        containerproduits.innerHTML += `<div id=${card_Id} class="produit">
                            <div class="w-auto flex items-center ">
                                <input name="confermeproduits" type="checkbox" class="checkedprod" checked>
                            </div>
                            <div class="imageprod flex items-center  w-[16vw] md:w-[10vw]">
                                <img src=${"../../../" + Categorie[element.id].image} alt="">
                            </div>
                            <div class="w-[50vw] px-[2vw] flex flex-col justify-evenly gap-[0.2vw]">
                                <span class="titleprod font-bold text-[0.7rem] md:text-[1.2rem] lg:text-[1.5rem]">${Categorie[element.id].title}</span>
                                <span class="text-gray-700 text-[.5rem]  md:text-[.9rem] lg:text-[1.2rem] w-[100%] leading-[95%]">${Categorie[element.id].description}</span>
                                <div class="flex">
                                    <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw] line-through hidden">${element.price} $</span>
                                    <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw]">${element.price} $</span>
                                </div>
                                <select name="confermeproduits" class="tailleprod rounded-lg p-[0.15vw] w-[12vw] text-[.6rem]  md:text-[.9rem] lg:text-[1.2rem]">
                                    <option name="confermeproduits " value="S">S</option>
                                    <option name="confermeproduits " value="M">M</option>
                                    <option name="confermeproduits " value="L">L</option>
                                    <option name="confermeproduits " value="XL">XL</option>
                                </select>
                                
                            </div>
                            <div class="w-[17vw] flex flex-col items-center justify-between md:w-[6vw] gap-[3vw]">
                                <svg id="dele${card_Id}" class="w-[27%] md:w-[25px] lg:w-[30px] md:self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e74040" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                <div class="flex flex-col items-center gap-[1.3vw] ">
                                    <span class="totalprix font-bold text-darkViolet text-[.8rem] md:text-[1.3rem] lg:text-[1.7rem] pl-[2vw]">${element.price * element.quantity } $</span>
                                    <div class="divQty flex justify-evenly gap-[1vw] mb-[1vw] border-2 rounded-lg px-[1.2vw]">
                                        <button id="dec${card_Id} class="text-[3rem]"">-</button>
                                        <span class="font-bold text-[0.7rem] md:text-[1.4rem] lg:text-[1.7rem]">${element.quantity}</span>
                                        <button id="inc${card_Id}" class="text-[2rem]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>`

                        // document.getElementById(`dec${card_Id}`).addEventListener("click" , ()=>{
                        //     `${prod.quantity}`++;
                        //     console.log(prod.quantity);
                            
                        // })

                        totale += element.price * element.quantity;
                        console.log(totale);
                        

    

    });     

    document.getElementsByClassName("Totale").textContent = "totale" + "$" ;
    console.log(document.getElementsByClassName("Totale"));
    

}    

containerproduits.addEventListener("click" , ()=>{
    
});

let inputchecked = document.querySelectorAll(".checkedprod")
inputchecked.forEach(check => {
    
});




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

