let voitures = new WeakMap();

// la clé
let index = {
    id: 1 
};          

// la valeur
let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
};

voitures.set(index, voitureA);
voitures.delete(index);

console.log(voitures);
