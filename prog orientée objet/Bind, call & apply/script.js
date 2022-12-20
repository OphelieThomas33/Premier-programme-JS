// Call et Apply 
// Objectif : invoquer immédiatement une fonction

// Call => appeler un constructeur (ici Animal) dans un autre constructeur (ici Oiseau)
// Animal.call(this, nombreDePattes, poids);

let gandalf = { titre: "Magicien" };

function direBonjour(arme, degats) {
    console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de degats.");
}
direBonjour.call(gandalf, "un bâton", 75);
direBonjour.apply(gandalf, ["un bâton", 75]);


// Bind
// Objectif : changer le context de "this"

this.valeur = "autre";

let monObjet = {
    valeur: "Objet",
    getValeur: function() {
        console.log(this.valeur);
    }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;
maValeur();

let maValeurAvecBind = monObjet.getValeur.bind(monObjet);
maValeurAvecBind();