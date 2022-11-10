// Première méthode 
let fonctionAnonyme = function() {
       console.log('Je suis une fonction anonyme');
}

fonctionAnonyme();

// Deuxième méthode : il faut l'auto exécuter

(function() { console.log('Je suis une fonction anonyme') })();