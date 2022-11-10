let nombreUn = 4, nombreDeux = 7;

function addition(nombreA, nombreB = 10) {

    let result = nombreA + nombreB;
    return result;

}

console.log(addition(nombreUn));  // résultat = 14
console.log(addition(nombreUn, nombreDeux));  // résultat = 11



function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {

    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return resultat;

}

let tempsDePreparationChocolat = cuisiner(4); 
let tempsDePreparationFraisier = cuisiner(1, 20); 
console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);