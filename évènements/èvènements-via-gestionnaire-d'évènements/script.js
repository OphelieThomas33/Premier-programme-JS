let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', () => {
    if(confirm('Etes-vous sûr ?')) {
        location.href = "https://google.com";
    }
});

button.addEventListener('mouseover', () => {
    document.body.style.backgroundColor ='orange';
});

function backgroundWhite() {
    document.body.style.backgroundColor ='white';
}
button.addEventListener('mouseout', backgroundWhite);

// supprimer un évènement - penser à bien préciser l'évènement à supprimer
button.removeEventListener('mouseout', backgroundWhite)