let monTableau = new Array('un', 'deux', 'trois'); // ancienne méthode
let monTableau = Array('un', 'deux', 'trois'); // ancienne méthode
let monTableau = ['un', 'deux', 'trois']; // nouvelle méthode


// console.log(monTableau[0]);
// // afficher le dernier élément d'un tableau (le -1 pour palier au fait que les tableaux commencent à 0)
// console.log(monTableau[monTableau.length - 1]); 



// // tableau à plusieurs dimensions
let monTableau2D = [
     ['Mark', 'Jeff', 'Bill'],
     ['Zuckerberg', 'Bezos', 'Gates']
];

// ancienne méthode 
let monTableau2D = new Array (
    Array('Mark', 'Jeff', 'Bill'),
    Array('Zuckerberg', 'Bezos', 'Gates')
);

console.log(monTableau2D[0][0]);
console.log(monTableau2D[1][0]);



// créer un tableau associatif => associer un nom à une valeur
let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'age' : '35',
    'poste' : 'PDG de Facebook',
};

console.log(monTableauAssociatif['poste']);