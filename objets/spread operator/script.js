// exemple 1 : fusionner plusieurs tableaux
let fruits      = ['fraise', 'banane', 'poire'];
let aliments    = ['chocolat', 'sucre', 'lait', ...fruits];

console.log(aliments);



// exemple 2 : découper une chaîne de caractères en pls éléments 
let phrase          = 'Bonjour !';
let phraseTableau   = [...phrase];

console.log(phraseTableau);



// exemple 3 : sélectionner un élément, et stocker les autres dans une variable
let devises         = ['dollars', 'euros', 'yen'];
// sans décomposition :
let premiereDevise   = devises[0];
let autresdevises   = devises[1] + ' ' + devises[2];

// avec décomposition :
let [premiereDevise, ...autresdevises] = devises;

console.log(premiereDevise);
console.log(autresdevises);