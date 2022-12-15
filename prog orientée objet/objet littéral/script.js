// Mark n'est pas un objet mais une variable qui contient un objet :
let mark = {
    prenom: "Mark",   // ceci est une propriété
    nom: "Zuckerberg",
    email: "mark@facebook.com",

    // ancienn méthode
    sePresenter: function(){
        console.log("bonjour, je m'appelle " + this.prenom);  // prenom de l'objet dans lequel on se trouve
    }
}

mark.sePresenter();

// objet littéral sert principalement à transmettre des infos
function recevoirLesCoordonnees() {
    return { latitude: 35, longitude: 139}
};

let coordonnees = recevoirLesCoordonnees();
console.log(coordonnees.latitude);
console.log(coordonnees.longitude);

// créer une fonction constructeur (nom avec une Majuscule) pour nos utilisateurs : 
function Utilisateur(prenom, nom, email) {
    this.prenom = prenom; // this se réfère à l'objet en cours (crée avec le constructeur) 
    this.nom    = nom;
    this.email  = email;

    this.sePresenter = () => {
        console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email : " + this.email);
    }
}

// créer un nouvel objet grâce à la fonction constructeur :
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatesnotes.com");

console.log(mark.prenom);
console.log(bill);
mark.sePresenter();

mark.poste = "PDG de Facebook";
console.log(mark);

function Logement(type, annee, placeDeParking, proprietaire) {
    this.type           = type;
    this.annee          = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire   = proprietaire;    
};

var appartementA = new Logement('Appartement', 2014, true, mark);  // mark est un objet

console.log(appartementA.proprietaire.prenom);
console.log(appartementA);
