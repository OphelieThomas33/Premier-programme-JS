// Splice => fonction ultime pour ajouter, remplacer et supprimer des éléments
// Utilisable qu'avec les tableaux simples et à plus dimensions

let monTableau = ['un', 'deux', 'trois']; 
monTableau.splice(2, 0, 'random', 'pie');
// console.log(monTableau);


let monTableau2D = [
     ['Mark', 'Jeff', 'Bill'],
     ['Zuckerberg', 'Bezos', 'Gates']
];

// monTableau2D.splice(0, 1);
// monTableau2D[0].splice(0, 1);
monTableau2D.splice(2, 0, ['30', '45', '48'])
console.log(monTableau2D);
