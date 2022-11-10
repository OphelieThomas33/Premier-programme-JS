let poids   = prompt("Quel est votre poids en kg ?");
let taille  = prompt("quelle est votre taille en cm ?");

function calculerIMC(poids, taille) {

    // calculer la taille en mètres et au carré :
    let tailleEnMetres = taille / 100
    let tailleCalculee = Math.pow(tailleEnMetres, 2);

    // simplifier le calcul 
    let tailleCalculee = Math.pow((taille / 100), 2);

    // Calculer l'IMC
    let resultat = poids / tailleCalculee;

    return resultat;

    // même fonction en une seule ligne 
    return poids / Math.pow((taille / 100), 2);
}

alert(calculerIMC(poids, taille));

// ou 

alert("Votre IMC est de " + calculerIMC(poids, taille) + ".")