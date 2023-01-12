// ** Les programmes asynchrones
// Attention, code puissant 

// ici programme synchrone
let i = 0;

console.log('Fonction commencée');

while(i < 9999999999) {
    i++;
}

console.log('Fonction terminée');

// ici programe asynchrone : les 2 fonctions s'exécutent en même temps :

function direBonjour() {
    console.log('Bonjour');
}

setTimeout(direBonjour, 3000);
console.log('Test');

