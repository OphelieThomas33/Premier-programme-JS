// L'utilisateur arrive sur le site : existe-t-il un localStorage qui s'appelle "theme" ?
    // Oui
        // Sa valeur est égale à "sombre" ?
            // Oui : on appelle la fonction modeSombre()
            // Non : on ne fait rien

    // Non : on ne fait rien


// L'utilisateur clique sur le bouton pour changer de thème
    // Body a-t-il une classe "dark" ?

        // Oui
            // On retire les classes de Body
            // On change le texte du bouton en "Thème sombre"
            // On définit le localStorage avec le nom "theme" sur "clair"

        // Non
            // On appelle la fonction modeSombre()

// La fonction modeSombre() va se charger :
    // De mettre la classe de Body sur "dark"
    // De changer le texte du bouton en "Thème clair"
    // De définir le localStorage avec le nom "theme" sur "sombre"

