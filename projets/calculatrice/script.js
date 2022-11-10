function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0");
    }
    return nombreA / nombreB;
}

do {
    var choix = Number(prompt("Que souhaitez-vous faire ?\n \n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division \n "));
} while (choix !=1 && choix !=2 && choix !=3 && choix !=4);

do {
    var nombreUn = Number(prompt("Entrez un première nombre :"));
    var nombreDeux = Number(prompt("Entrez un deuxième nombre :"));
} while (isNaN(nombreUn) || isNaN(nombreDeux));

try {
    switch(choix) {
        case  1:
            var resultat = addition(nombreUn, nombreDeux);
            break;   
        case  2:
            var resultat = multiplication(nombreUn, nombreDeux);
            break;    
        case  3:
            var resultat = soustraction(nombreUn, nombreDeux);
            break;   
        case  4:
            var resultat = division(nombreUn, nombreDeux);
            break;    
        default:
            throw new Error("une erreur est survenue pendant l'opération");
    }
    alert("Voici le résultat : " + resultat + ".");
}

catch (error) {
    alert(error)
}





