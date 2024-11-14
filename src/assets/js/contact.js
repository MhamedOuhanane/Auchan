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
document.getElementById("contactForm").addEventListener("submit", function (event) {
    const submitButton = event.submitter;
    animateButton(submitButton);

    //Valider chaque champ
    const nameRegex = /^[a-zA-ZÀ-ÿ '-]+$/;
    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Recuperer les valeurs dans les champs
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;

    //Valider les champs
    if (!nameRegex.test(nom)) {
        alert("Nom invalide. Utilisez uniquement des lettres, des espaces, des apostrophes et des tirets.");
        event.preventDefault();
        return;
    }
    if (!nameRegex.test(prenom)) {
        alert("Prénom invalide. Utilisez uniquement des lettres, des espaces, des apostrophes et des tirets.");
        event.preventDefault();
        return;
    }
    if (!phoneRegex.test(telephone)) {
        alert("Numéro de téléphone invalide. Utilisez uniquement des chiffres et des signes de ponctuation autorisés.");
        event.preventDefault();
        return;
    }
    if (!emailRegex.test(email)) {
        alert("E-mail invalide. Veuillez entrer une adresse e-mail valide.");
event.preventDefault();
return;
    }
})