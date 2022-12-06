let informations = ['superCat', '25', 'femme'];

// Sans décomposition - variable assignée une à une - très long
let pseudo  = informations[0];
let age     = informations[1];
let sexe    = informations[2];

console.log(pseudo);
console.log(age);
console.log(sexe);

// avec décomposition 
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);
