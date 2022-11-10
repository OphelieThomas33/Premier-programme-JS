// try {
//     // est-ce qu'il y a une erreur ? 
//     alert(hello);
// }
// catch(error) {
//     // s'il y a une erreur on affiche exécute l'instruction suivante ! 
//     alert("La variable Hello n'existe pas");
// }

try {
    let recompense = prompt("choisissez une récompense : épée, arc, haches");
    let degats;

    switch(recompense) {
        case 'épée':
            degats = 40;
            break;
        case 'arc':
            degats = 30;
            break;
        case 'haches':
            degats = 20;
            break;
        default:
            throw new Error("Vous ne pouvez pas tricher");
    }

    alert("Vous avez choisi : " + recompense + " (" + degats + " degats)");
}
catch(error) {
    alert(error);
}
finally {
    // s'exécute à chaque fois qu'il y ait une erreur ou pas
    alert('fin du programme');
}