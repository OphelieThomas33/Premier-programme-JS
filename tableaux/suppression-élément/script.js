let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.pop();     // supprimer le dernier élément
monTableau.shift();   // supprimer le premier élément
console.log(monTableau);


let monTableau2D = [
   ["Mark", "Jeff", "Bill"],
   ["Zuckerberg", "Bezos", "Gates"]
];
monTableau2D.pop();        // supprimer la dernière ligne
monTableau2D.shift();      // supprimer la première ligne
monTableau2D[0].shift();   // supprimer le premier élément de la ligne [0]
console.log(monTableau2D); 


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom' : 'Zuckerberg',
    'age' : '35',
    'poste' : 'PDG de Facebook',
};
delete(monTableauAssociatif.age);   // suprimer un élément en le nommant
console.log(monTableauAssociatif);