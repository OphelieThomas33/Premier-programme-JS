let voitures = new WeakSet();

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

let voitureB = {
    constructeur: 'VW',
    modele: 'Golf'
}

voitures.add(voitureA);
voitures.add(voitureB);

voitures.delete(voitureA);

console.log(voitures);

// autre méthode :

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
};

let voitureB = {
    constructeur: 'VW',
    modele: 'Golf'
};

let voitures = new WeakSet([voitureA, voitureB]);
console.log(voitures);