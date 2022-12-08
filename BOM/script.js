// Objet Window
// ouvrir une fenêtre
window.open('https://believemy.com');

// Redimensionner une fenêtre
let fenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.resizeTo(700, 470);
}

// Fermer une fenêtre 
let fenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.close();
}


// Objet Navigator 
navigator.cookieEnabled();
navigator.platform();
navigator.language();


// Objet History
history.back();
history.forward();


// Objet Location
location .reload();
location.href();


// Objet Screen 
screen.availWidth();
screen.availHeight();
screen.pixelDepth();

