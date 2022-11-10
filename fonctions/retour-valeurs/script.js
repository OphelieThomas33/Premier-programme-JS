// afficher une valeur, un résultat 
/*

let nombreUn = 4, nombreDeux = 7;

function addition(nombreA, nombreB) {
    let result = nombreA + nombreB;
    console.log(result); // affiche quelque chose, ici un résulat
}

addition(nombreUn, nombreDeux);

*/

// retourner une valeur sans l'afficher

let nombreUn = 4, nombreDeux = 7;

function addition(nombreA, nombreB) {
    let result = nombreA + nombreB;
    return result; // retourne un résultat
}

let resultAddition = addition(nombreUn, nombreDeux); // enregistrer le résultat dans une autre varibale
console.log(resultAddition);

// ou afficher direction le résulat 
console.log(addition(nombreUn, nombreDeux));




