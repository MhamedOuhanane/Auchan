// // declaration des variable utilisé

// // Return les donner de localStorage
// let liste = localStorage.getItem("carts");
let liste = [
    
    {
        "id": 4,
        "titre": "Gazou Menthe",
        "description": "Une boisson pétillante à la menthe, rafraîchissante et légère, idéale pour les journées chaudes.",
        "taille": "50cl",
        "prix": 1.70,
        "image": "../images/categories/Boisson/Gazou Menthe.jpg"
    },
    {
        "id": 5,
        "titre": "Gazou Tropical",
        "description": "Un mélange exotique de fruits tropicaux, avec des notes de mangue, ananas et passion, pour une expérience rafraîchissante unique.",
        "taille": "33cl",
        "prix": 2.00,
        "image": "../images/categories/Boisson/Gazou Tropical.jpg"
    },
    {
        "id": 6,
        "titre": "Gazou Pomme",
        "description": "Une boisson à base de pommes fraîches, avec des bulles délicates pour une sensation de légèreté.",
        "taille": "50cl",
        "prix": 1.60,
        "image": "../images/categories/Boisson/Gazou Pomme.jpg"
    },
]
console.log(liste);

if (liste == null) {
    console.log("no");

}
else {
    console.log("yes");
    document.getElementById("blocempty").classList.toggle("classblocemty");
    document.getElementById("bloccartes").classList.toggle("classbloccartes");
    console.log(bloccartes);
    console.log(blocempty);
}

import Categorie from "../data/Catégorie.json" with {type: "json"};

if (liste.length !== 0) {
    let card = document.createElement('div');
    card.className = "produit";
    card.innerHTML = `<div class="w-auto flex items-center ">
                        <input name="confermeproduits" type="checkbox" class="checkedprod">
                        </div>
                        <div class="imageprod flex items-center  w-[16vw] md:w-[10vw]">
                            mhmde
                        </div>
                        <div class="w-[50vw] px-[2vw] flex flex-col justify-evenly gap-[0.2vw]">
                            <span class="titleprod font-bold text-[0.7rem] md:text-[1.2rem] lg:text-[1.5rem]">mhmde</span>
                            <span class="text-gray-700 text-[.5rem]  md:text-[.9rem] lg:text-[1.2rem] w-[100%] leading-[95%]">Lait naturel lait naturel lait naturel lait naturel</span>
                            <div class="flex">
                                <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw] hidden">12.54 $</span>
                                <span class="prixprod font-bold text-darkViolet text-[1.5rem] max-md:text-[0.7rem] pl-[2vw]">mhmde</span>
                            </div>
                            <select name="confermeproduits" class="tailleprod border-2 rounded-lg p-[0.15vw] w-[12vw] text-[.6rem]  md:text-[.9rem] lg:text-[1.2rem]">
                                <option name="confermeproduits " value="taille">normale</option>
                                <option name="confermeproduits " value="M">M</option>
                                <option name="confermeproduits " value="L">L</option>
                                <option name="confermeproduits " value="XL">XL</option>
                            </select>
                            
                        </div>
                        <div class="w-[17vw] flex flex-col items-center justify-between md:w-[6vw] gap-[3vw]">
                            <svg class="deleteprod w-[27%] md:w-[25px] lg:w-[30px] md:self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e74040" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            <div class="flex flex-col items-center gap-[1.3vw] ">
                                <span class="totalprix font-bold text-darkViolet text-[.8rem] md:text-[1.3rem] lg:text-[1.7rem] pl-[2vw]">mhmde</span>
                                <div class="divQty flex justify-evenly gap-[1vw] mb-[1vw] border-2 rounded-lg px-[1.2vw]">
                                    <span class="Qtyprod font-bold text-[0.5rem] md:text-[1rem] lg:text-[1.3rem]">QTY:</span>
                                    <span class="qty font-bold text-[0.7rem] md:text-[1.4rem] lg:text-[1.7rem]">mhmde</span>
                                </div>
                            </div>
                        </div>
                    </div>`

                    console.log(card);
                    
}



// letdeletprod = document.getElementsByClassName("deletprod")
// deletprod.onclick = () =>{
//     deletprod.pe
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

