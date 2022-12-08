// Récupérer une balise
let header = document.getElementsByTagName('header');
let h1 = document.querySelector('header');

// récupérer un id
let logo = document.getElementById('logo');
let h1 = document.querySelector('#logo');

// récupérer une classe 
let container = document.getElementsByClassName('container');
let h1 = document.querySelector('.container');

// récupérer n'importe quel type d'élément
let h1 = document.querySelector('h1');    // utilisable avec une balise, un id ou une classe
let p = document.querySelectorAll('p');    // toutes les balises <p>

console.log(header);
console.log(logo);
console.log(container);
console.log(h1);


// Modifier une propriété 
let h1 = document.querySelector('h1');
h1.textContent = "Hello World !"     // modifier du texte
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>"   // modifier le style

console.log(h1);

// AJOUTER DES ELEMENTS : 
// 1ère méthode : Ecrire juste un texte à la suite du contenu
document.write('test'); 

// 2ème méthode : Ajouter un élément brut à un endroit spécifique
document.body.append('test');


// 3ème méthode (celle pour les objets): Créer un objet
// Créer un élément :
let helloWorld = document.createElement('div');

// Le personnaliser : 
helloWorld.textContent = "Hello World ! ";

// L'ajouter à notre page (4 méthodes) : 
// 1ère méthode : 
document.body.append(helloWorld);   // après un élément

// 2ème méthode : 
document.body.appendChild(helloWorld);    // après un élément - impossible de passer du texte dans cette solution

// 3ème méthode : 
document.body.insertBefore(helloWorld, 
    document.querySelector('.container'));    // avant un élément

// 4ème méthode : 
document.querySelector('.container').prepend(helloWorld);   // avant un élément


// SUPPRIMER DES ELEMENTS :
let h1 = document.querySelector('h1');
h1.remove();

// ou 
document.querySelector('h1').remove();