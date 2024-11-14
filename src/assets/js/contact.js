// Fonction pour l'animation au clic
function animateButton(button) {
    button.classList("animate");
    //apres la fin de la durée l'animation est suprime
    setTimeout(() => {
        button.classList.remove("animate");
    }, 500); //duree en millisecondes
}

//Remplissage auto de formulaire
document.getElementById("autoFill").addEventListener("click", async (event) => {
    animateButton(event.target); //appliquer l'animation a button remplir auto
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("nom").value = user.name.last;
        document.getElementById("prenom").value = user.name.first;
        document.getElementById("telephone").value = user.phone;
        document.getElementById("email").value = user.email;
        document.getElementById("message").value = "Bonjour, j'aimerais en savoir plus sur vos services.";
    }
    catch (error) {
        console.error("Erreur lors de la récupératio des données :", error);
    }
});

//Validation de la formulaire
