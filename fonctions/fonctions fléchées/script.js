let maFonction = function() {
    console.log('test');
}

let maFonction = (parametre, autreParametre) => {
    console.log('test');
}

let maFonction = () => console.log('test');

maFonction();


// autre exemple :
a.onclick = function() {
    if(confirm('Etes-vous sûr ?')) {
        location.href='https://google.com'
    }
}


a.onclick = () => {if(confirm('Etes-vous sûr ?')) 
{location.href='https://google.com'}};