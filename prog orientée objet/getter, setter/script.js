class Utilisateur {
    constructor(prenom, nom, email) {
        this.prenom = prenom;
        this.nom    = nom;
        this.email  = email;
    }

    // un getter (un accesseur) permet de récupérer une propriété
    get nomComplet() {
        return this.prenom + ' ' + this.nom;
    }
    
    // un setter (un mutateur) permet de définir une propriété
    set nomComplet(valeur) {
        [this.prenom, this.nom] = valeur.split(' '); // split divise une chaine de caractères à partir d'un séparateur pour faire un tableau
    }

    sePresenter() {
        console.log("Je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + "."); 
    }
}

var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
console.log(mark.nomComplet);
mark.nomComplet = "Bill Gates";
console.log(mark.nomComplet);
