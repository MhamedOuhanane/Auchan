const grille = document.getElementById("grille");
const block = document.getElementById("block");

const list_grille_cards = document.querySelector("#list-grille-cards");
const list_cards = document.querySelector("#liste-cards");

const loader = document.querySelector("#loader");

grille.addEventListener("click", () => {

    list_grille_cards.style.transition = "all 0.3s ease-in-out";
    list_grille_cards.style.opacity = "0";

    list_cards.style.transition = "all 0.3s ease-in-out";
    list_cards.style.opacity = "1";

    loader.style.display = "block"

    setTimeout(() => {
        list_grille_cards.style.display = "none";
        loader.style.display = "none"
    }, 1000);

    setTimeout(() => {
        list_cards.style.display = "grid";
    }, 1000);
})

block.addEventListener("click", () => {
    list_grille_cards.style.transition = "all 0.3s ease-in-out";
    list_grille_cards.style.opacity = 1;

    list_cards.style.transition = "all 0.3s ease-in-out";
    list_cards.style.opacity = "0";

    loader.style.display = "block"

    setTimeout(() => {
        list_grille_cards.style.display = "grid";
        loader.style.display = "none"
    }, 1000);

    setTimeout(() => {
        list_cards.style.display = "none";
    }, 1000);
})