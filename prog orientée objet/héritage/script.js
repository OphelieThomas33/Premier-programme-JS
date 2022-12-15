// SANS HERITAGE : Trop de répétitions
// Oiseau (nombreDePattes, poids / longueurDesAiles)
// function Oiseau(longueurDesAiles) {
//     this.nombreDePattes     = nombreDePattes;
//     this.poids              = poids;
//     this.longueurDesAiles = longueurDesAiles;
// };

// // Mammifère (nombreDePattes, poids / typeDePoils)
// function Mammifère(typeDePoils) {
//     this.nombreDePattes = nombreDePattes;
//     this.poids          = poids;
//     this.typeDePoils    = typeDePoils;
// };


// AVEC HERITAGE : regrouper les éléments communs de chaque animal dans un nouvel objet
// Animal (nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids          = poids;
};
Animal.prototype.presentation = function() {
    console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + ".");
}


// Oiseau (nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids);   // permettre à Oiseau d'hériter des propriétés d'Animal
    // la fonction call permet d'appeler une fonction constructeur : 1er paramètre (this) pour désigner l'objet actuel et ensuite on donne les arguments de son constructeur
    this.longueurDesAiles = longueurDesAiles;
};
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

// Mammifère (nombreDePattes, poids / typeDePoils)
function Mammifère(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
};
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;


var perroquet = new Oiseau(2, "1kg", "grandes");
console.log(perroquet);
perroquet.presentation();



