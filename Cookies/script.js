// Créer un cookie
document.cookie = 'prenom=John';

// Afficher tous les cookies
alert(document.cookie);

// Modifier un cookie
document.cookie = 'prenom=Mark';

// Supprimer un cookie
document.cookie = 'prenom=';

// Options

document.cookie = 'prenom=John; path=/admin';   // à quel répertoire le cookie est accessible
document.cookie = 'prenom=John; path=/admin; domain=believemy.com'; // répertoire +  domaine où le cookie est accessible

 // durée de validité du cookie (avec date UTC)
let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();
document.cookie = 'prenom=John; path=/admin; domain=believemy.com; expires=' + date;   

// durée de validité du cookie en ms
document.cookie = 'prenom=John; path=/admin; domain=believemy.com; max-age=31536000000';  

// durée de validité du cookie en ms + cookies utilisés que sur les pages en https
document.cookie = 'prenom=John; path=/admin; domain=believemy.com; max-age=31536000000; secure';