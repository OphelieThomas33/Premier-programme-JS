// let monMap = new Map([
//     ['prenom', 'Mark'],
//     ['nom', 'Zuckerberg']
// ]);

// monMap.set('poste', 'PDG de Facebook');
// monMap.delete('poste');

// console.log(monMap);

let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG'
});

utilisateurs.set('Bill Gates', {
    email: 'bill@gatesnotes.com',
    poste: 'Sauver le monde'
});

console.log(utilisateurs);