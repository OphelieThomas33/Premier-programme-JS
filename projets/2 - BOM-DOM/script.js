// Supprimer le div avec l'id #a-supprimer
document.querySelector('#a-supprimer').remove();

// Reset
let body = document.querySelector('body');
body.style.margin = "0";

// Créer un header
let header = document.createElement('header');
document.body.append(header);
header.textContent = "Bienvenue";
header.style.height = '150px';
header.style.backgroundColor = '#e3b04b'
header.style.color = 'white';
header.style.fontSize = "48px";
header.style.fontFamily = "Calibri";
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';

// Créer un sous-header
let menu = document.createElement('div');
document.body.append(menu);
menu.innerHTML = "<a style='color: blue'>Accueil</a> / <a style='color: blue'>Une autre page</a>";
menu.style.backgroundColor = "#f1d6ab";
menu.style.height = "50px";
menu.style.display = "flex";
menu.style.alignItems = "center";
menu.style.paddingLeft = "15px";
menu.style.fontFamily = "calibri";

// Créer un paragraphe
let paragraphe = document.createElement('p');
document.body.append(paragraphe);
paragraphe.textContent = "Ceci est un paragraphe créé avec JavaScript !"
paragraphe.style.paddingLeft = "15px";
paragraphe.style.fontFamily = "calibri";