const grille = document.getElementById("grille");
const block = document.getElementById("block");

const list_grille_cards = document.querySelector("#list-grille-cards");
const list_cards = document.querySelector("#liste-cards");

grille.addEventListener("click", () => {

    list_grille_cards.style.transition = "all 0.3s ease-in-out";
    list_grille_cards.style.opacity = "0";
    setTimeout(() => {
        list_grille_cards.style.display = "none";
    }, 300);

    setTimeout(() => {
        list_cards.style.transition = "all 0.3s ease-in-out";
        list_cards.style.opacity = "1";
        setTimeout(() => {
            list_cards.style.display = "grid";
        }, 500);
    }, 300);
})

block.addEventListener("click", () => {
    list_grille_cards.style.transition = "all 0.3s ease-in-out";
    list_grille_cards.style.opacity = 1;
    setTimeout(() => {
        list_grille_cards.style.display = "grid";
    }, 500);

    setTimeout(() => {
        list_cards.style.transition = "all 0.3s ease-in-out";
        list_cards.style.opacity = "0";
        setTimeout(() => {
            list_cards.style.display = "none";
        }, 500);
    }, 500);
})