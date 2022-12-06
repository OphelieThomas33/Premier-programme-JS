let chien = {
    race: 'Shiba',
    poil: 'court',
    // aboyer: function(){
    //     console.log('wouaf, wouaf');
    // }
    aboyer: () => console.log('Wouaf, Wouaf')
};

chien.aboyer();




let magicien = {
    attaquer: function(){
        console.log('Le magicien lance un sort');
    }
};

let guerrier = {
    attaquer: function(){
        console.log('Le guerrier prend son épée');
    }
};

magicien.attaquer();
guerrier.attaquer();