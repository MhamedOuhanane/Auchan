const grille = document.getElementById("grille");
const block = document.getElementById("block");

const list_grille_cards = document.querySelector("#list-grille-cards");
const list_cards = document.querySelector("#liste-cards");

const loader = document.querySelector("#loader");

const Tech_btn = document.querySelector("#Tech");
const Cuisine_btn = document.querySelector("#Cuisine");
const Boissons_btn = document.querySelector("#Boissons");
const Nettoyage_btn = document.querySelector("#Nettoyage");
const Vetements_btn = document.querySelector("#Vetements");

const btn_up = document.getElementById("up-btn");

const previous = document.getElementById("previous");
const next = document.getElementById("next");


let Ajouter_au_localStotage = null;

grille.addEventListener("click", () => {

  if (list_cards.style.display === "grid") return;

  list_grille_cards.style.transition = "all 0.3s ease-in-out";
  list_grille_cards.style.opacity = "0";

  list_cards.style.transition = "all 0.3s ease-in-out";
  list_cards.style.opacity = "1";

  loader.style.display = "block";

  setTimeout(() => {
    list_grille_cards.style.display = "none";
    loader.style.display = "none";
  }, 1000);

  setTimeout(() => {
    list_cards.style.display = "grid";
  }, 1000);
});

block.addEventListener("click", () => {

  if (list_grille_cards.style.display === "grid") return;

  list_grille_cards.style.transition = "all 0.3s ease-in-out";
  list_grille_cards.style.opacity = 1;

  list_cards.style.transition = "all 0.3s ease-in-out";
  list_cards.style.opacity = "0";

  loader.style.display = "block";

  setTimeout(() => {
    list_grille_cards.style.display = "grid";
    loader.style.display = "none";
  }, 1000);

  setTimeout(() => {
    list_cards.style.display = "none";
  }, 1000);
});

// Consomation de API avec AXIOX

// First, define all button elements
const buttons = [Tech_btn, Cuisine_btn, Boissons_btn, Nettoyage_btn, Vetements_btn];

// Function to reset all button background colors
function resetButtonColors() {
  buttons.forEach(button => {
    button.style.backgroundColor = "";
  });
}

let Products_Promo = [];


// fucntion de qui fetch data
function fetch_data(category, page) {

  list_grille_cards.innerHTML = "";
  list_cards.innerHTML = "";

  resetButtonColors();

  switch (category) {
    case "Tech":
      Tech_btn.style.backgroundColor = "#EDBEF5";
      break;
    case "Cuisine":
      Cuisine_btn.style.backgroundColor = "#EDBEF5";
      break;
    case "Boissons":
      Boissons_btn.style.backgroundColor = "#EDBEF5";
      break;
    case "Nettoyage":
      Nettoyage_btn.style.backgroundColor = "#EDBEF5";
      break;
    case "Vetements":
      Vetements_btn.style.backgroundColor = "#EDBEF5";
      break;
    default:
      break;
  }

  axios.get("http://localhost:3000/promotions")
    .then(response => {

      if (category) {
        Products_Promo = response.data.filter(product => product.category === category);
      } else {
        Products_Promo = response.data;
        // console.log(response.data);


        if (page) {
          // console.log("inside", page);

          Products_Promo = Products_Promo.slice((page - 1) * 8, page * 8);
        }
      }

      Products_Promo.forEach((product) => {

        list_grille_cards.innerHTML += `
        <div class="promotion-card w-[200px]" id="${product.id}">
          <div class="relative img">
            <img src="${product.img}" alt="image de camera" class="w-[200px] h-[220px]" />

            <div class="overlay"></div>

            <div class="plus">+</div>

            <div class="absolute top-[20px] left-[20px] content">
              <p class="w-[75px] h-[25px] flex text-sm items-center justify-center bg-white shadow-xl">
                ${product.category}
              </p>
              <p class="w-[75px] h-[25px] flex text-sm items-center justify-center bg-white mt-2 shadow-xl">
                -${product.discount}
              </p>
            </div>
          </div>
          <p class="mt-2 text-sm text-center w-[85%] m-auto">
            ${product.description}
          </p>
        </div>
      `;

        list_cards.innerHTML += `
        <div class="flex card-list w-[73%] m-auto card-shadow my-4" id="${product.id}">
              <div class="w-[250px] md:w-[180px] h-[140px] md:h-[160px] lg:h-[200px]">
                <img src="${product.img}" alt="image camera"
                  class="w-[250px] md:w-[180px] h-[140px] md:h-[160px] lg:h-[200px]" />
              </div>
              <div class="flex flex-col ml-10 justify-evenly">
                <div class="flex gap-10">
                  <span
                    class="w-[75px] md:w-[70px] h-[20px] md:h-[25px] flex text-xs md:text-sm lg:text-lg items-center justify-center bg-white shadow-xl">${product.category}</span>
                  <span
                    class="w-[75px] md:w-[50px] h-[20px] md:h-[25px] flex text-xs md:text-sm lg:text-lg items-center justify-center bg-white shadow-xl">-${product.discount}</span>
                </div>
                <p class="text-xs font-bold md:text-sm lg:text-lg">${product.description}</p>
                <div
                  class="w-[100px] lg:w-[150px] h-[2rem] lg:h-[3rem] text-sm lg:text-lg flex items-center justify-center font-bold bg-white shadow-xl">
                  Order Now
                </div>
              </div>
            </div>
      `;
      });

      Ajouter_au_localStotage = document.querySelector(".plus");
      console.log(Ajouter_au_localStotage);
    })
    .catch(error => {
      console.error(error);
    });

}

fetch_data("", 1);

// Button up

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn_up.style.transition = "opacity 0.3s ease-in-out, display 0s";
    btn_up.style.display = "block";
    btn_up.style.opacity = "0.7";
  } else {
    btn_up.style.transition = "opacity 0.3s ease-in-out, display 0s 0.3s";
    btn_up.style.opacity = "0";
    setTimeout(() => {
      btn_up.style.display = "none";
    }, 300);
  }
});

// pagination

let page = 1;

next.addEventListener("click", () => {
  page++;
  fetch_data("", page);
  // console.log("outside", page);

});

previous.addEventListener("click", () => {
  page--;
  fetch_data("", page);
  // console.log("outside", page);

});

// Ajouter le produit clické au localStorage

let Products_Panier = JSON.parse(localStorage.getItem("Products_Panier")) || [];

function Sauvegarder() {
  localStorage.setItem("Products_Panier", JSON.stringify(Products_Panier));
  console.log(Products_Panier);
}

// Ajouter_au_localStotage
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    let Card = e.target.closest(".promotion-card");

    let productExist = Products_Panier.find(product => product.id == Card.id);

    if (productExist) {
      // If product exists, increment the quantity
      productExist.quantity++;
    } else {
      // If it doesn’t exist, find it in Products_Promo, set its quantity, and add it to Products_Panier
      let product = Products_Promo.find(p => p.id == Card.id);
      if (product) {  // Check if product exists in Products_Promo
        product.quantity = 1;
        Products_Panier.push(product);
      }
    }

    Sauvegarder();
  }
});
