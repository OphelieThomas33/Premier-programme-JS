function Utilisateur(prenom, nom, email) {
    this.prenom = prenom; 
    this.nom    = nom;
    this.email  = email;
}; // uniquement les propriétés spécifiques aux objets

Utilisateur.prototype.sePresenter = function() {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email : " + this.email);
}; // propriété générique, utilisable dans pls objets qui va s'ajouter dans les _proto_ de l'objet

// création d'un objet : 
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatesnotes.com");

console.log(mark); // On voit que JavaScript ajoute une propriété __proto__ et constructor
mark.sePresenter();


// créer un objet avec Object()
var monObjet = new Object();
monObjet.titre  = "Le titre de l'objet";
console.log(monObjet)

var chat = new Object();
chat.nom = "Charlie";
chat.age = 8;
console.log(chat);