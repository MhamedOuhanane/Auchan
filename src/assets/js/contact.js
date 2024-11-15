// fonction pour l'animation au clic sur les buttons d'envoyer et remplir auto
function animateButton(button) {
    button.classList.add("animate");
    // animation est suprimer apres la fin de la duree
    setTimeout(() => {
        button.classList.remove("animate");
    }, 500); // duree en millisecondes
}

// remlissage auto des champs
document.getElementById("autoFill").addEventListener("click", async (event) => {
    animateButton(event.target); // appliquer l'animation au bouton remplir auto
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) throw new Error("Erreur de récupération de données");
        
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("nom").value = user.name.last;
        document.getElementById("prenom").value = user.name.first;
        document.getElementById("telephone").value = user.phone;
        document.getElementById("email").value = user.email;
        document.getElementById("message").value = "Bonjour, j'aimerais en savoir plus sur vos services.";
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
});

// valider formulaire
document.getElementById("contactForm").addEventListener("submit", function (event) {
    const submitButton = event.submitter;
    animateButton(submitButton);

    // valider chaque champ dans formulaire
    const nameRegex = /^[a-zA-ZÀ-ÿ '-]+$/;
    const phoneRegex = /^\+?[0-9\s-()]{10,15}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // recuperer les valeurs
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;

    // validation des champs
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

    // si toutes les données entrées sont valides api ou utilisateur
    alert("Formulaire soumis avec succès !");
});
