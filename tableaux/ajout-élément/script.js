let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.push('cinq');
monTableau.unshift('zero'); // ajouter un élément au début du tableau 
console.log(monTableau);


let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.push('test');
console.log(monTableau2D);

monTableau2D[0].push('test');
console.log(monTableau2D);


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'age' : '35',
    'poste' : 'PDG de Facebook',
};
monTableauAssociatif['nationalité'] = 'Américaine';
console.log(monTableauAssociatif);