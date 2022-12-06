let monTableau = ['un', 'deux', 'trois', 'quatre'];

console.log(monTableau.join());
console.log(monTableau.join(' / '));
console.log(monTableau.join(', '));


let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

console.log(monTableau2D.join(', '));
console.log(monTableau2D[0].join(', '));


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'age' : '35',
    'poste' : 'PDG de Facebook',
};

function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {
        chaine += (valeur + ' : ' + tableau[valeur] + '\n')
    };

    console.log(chaine)
};

concatener(monTableauAssociatif)
