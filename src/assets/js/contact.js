// Fonction pour l'animation au clic
function animateButton(button) {
    button.classList("animate");
    //apres la fin de la durée l'animation est suprime
    setTimeout(() => {
        button.classList.remove("animate");
    }, 500); //duree en millisecondes
}

//Remplissage auto de formulaire
