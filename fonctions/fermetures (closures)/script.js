function bonjour(prenom) {

    let resultat = "Bonjour " + prenom; // variable locale
    let maClosure = () => console.log(resultat);
    return maClosure;
}

let maFonction = bonjour('Evan');
maFonction();




function timer() {
    let secondes = 0;

    let maClosure = () => {
        return ++secondes;
    }
    return maClosure;   
}

let monTimer = timer();
console.log(monTimer()); // affiche 1 on a ajouté 1 à la variable 0 grâce au ++secondes
console.log(monTimer()); // affiche 2 car la variable locale a été gardée en mémoire
console.log(monTimer()); // affiche 3 car la variable locale a été gardée en mémoire