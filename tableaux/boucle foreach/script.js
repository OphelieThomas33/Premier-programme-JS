let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];

// afficher toutes les éléments du tableau
for (const pays of listeDePays) {
    console.log(pays)
}

// ancienne méthode forEach sur plusieurs lignes
listeDePays.forEach(function(pays) {
    console.log(pays);
});

// nouvelle méthode forEach sur une seule ligne => fonction fléchée
listeDePays.forEach(pays => console.log(pays));