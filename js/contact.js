document.getElementById('formulaire').addEventListener('submit', function(event) {
    // Empêcher la soumission normale
    event.preventDefault();

    // Récupérer les valeurs des champs
    const prenomEtNom = document.getElementById('prenometnom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vérifier que tous les champs sont remplis
    if (prenomEtNom && email && message) {
        const confirmationMessage = "Merci pour votre message.";
        document.getElementById("resultat").textContent = confirmationMessage;
        document.getElementById('formulaire').reset();
    }
});

