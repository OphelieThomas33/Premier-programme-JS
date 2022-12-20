// La classe Personnage
// Propriétés :
// pseudo,
// classe (magicien ou guerrier)
// sante
// attaque
// niveau (initialisé à 1)

// Méthodes :

// evoluer() - Augmente le niveau personnage de 1, et affiche "[pseudo] passe au niveau [niveau] !"'
// verifierSante() - Vérifie si la santé du personnage est inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de points de vie négatifs et affiche "[pseudo] a perdu !"

// Getters :
// informations() - Affiche les informations du personnage "[pseudo] ([classe]) a [sante] points de vie et est au niveau [niveau]."

class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        this.sante      = sante;
        this.attaque    = attaque;
        this.niveau     = 1;
    };

    get informations() {
        return this.pseudo + "(" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    };

    evoluer() {
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    };

    verifierSante() {
        if(this.sante <= 0) {
            this.sante == 0;
            console.log(this.pseudo + " a perdu !");
        }
    };
};

// Essais pour Personnage :
// var jose = new Personnage("josé", "magicien", 50, "couteau");
// console.log(jose)
// jose.evoluer()
// jose.sante = 0
// jose.verifierSante()


// La classe Magicien hérite de Personnage
// Propriétés :
// Aucune. Se contente d'appeler le constructeur de Personnage, en lui donnant en paramètres (pseudo, "magicien", 170, 90). Donc vous l'aurez compris, pour initialiser un joueur, il faudra appeler le constructeur de la classe que nous voulons, et donner juste un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

// Méthodes :
// attaquer(personnage) - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque] dégâts)". Ensuite, appelle la fonction evoluer(). Puis, appelle la fonction verifierSante() du personnage adverse.
// coupSpecial(personnage) - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personne en cours, fois 5, et affiche "[pseudo] attaque avec son coup spécial puissance des arcanes [personnage.pseudo] ([attaque * 5] dégâts)".  Ensuite, appelle la fonction evoluer(). Puis, appelle la fonction verifierSante() du personnage adverse.

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "Magicien", 170, 90);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort (" + this.attaque + " dégâts).");
        personnage.verifierSante();
        this.evoluer();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + personnage.pseudo + " (" + this.attaque * 5 + " dégâts).");
        personnage.verifierSante();
        this.evoluer();
    }
}


// Essais pour Magicien
var jose = new Magicien("José")
var merlin = new Magicien("Merlin")
console.log(merlin)
merlin.coupSpecial(jose)
console.log(jose.sante)

// La classe Guerrier hérite de Personnage
// Propriétés :
// Aucune. Se content d'appeler le constructeur de Personnage, en lui donnant en paramètres (pseudo, "guerrier", 350, 50). Donc vous l'aurez compris, pour initialiser un joueur, il faudra appeler le constructeur de la classe que nous voulons, et donner juste un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

// Méthodes :
// attaquer(personnage) - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] avec son épée ([attaque] dégâts)". Ensuite, appelle la fonction evoluer(). Puis, appelle la fonction verifierSante() du personnage adverse.
// coupSpecial(personnage) - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personne en cours, fois 5, et affiche "[pseudo] attaque avec son coup spécial haches de guerre [personnage.pseudo] ([attaque * 5] dégâts)".  Ensuite, appelle la fonction evoluer(). Puis, appelle la fonction verifierSante() du personnage adverse.

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "Guerrier", 350, 50);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée (" + this.attaque + " dégâts).");
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + personnage.pseudo + " (" + this.attaque * 5 + " dégâts).");
        this.evoluer();
        personnage.verifierSante();
    }
}

// Essais pour Guerrier :
var hercule = new Guerrier("Hercule");
console.log(hercule);
merlin.attaquer(hercule);
merlin.coupSpecial(hercule);
hercule.attaquer(merlin)
hercule.coupSpecial(merlin)



// combat de la solution proposée
var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');

console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);