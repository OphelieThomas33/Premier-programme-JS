// *** SELECTIONNER UN ELEMENT ***
// avec JS :
document.querySelector('h1');
document.querySelectorAll('p');

// avec jQuery :
$('h1');         // on donne le sélecteur CSS
$('p');         // on sélectionne tous les paragraphes 

// ----------------------------------------------------

// *** MODIFIER LE CONTENU D'UN ÉLÉMENT ***
// avec JS :
document.querySelector('h1').textContent = 'Bonjour avec JS';
// document.querySelectorAll('p').textContent = 'Ceci est un paragraphe'; // impossible
document.querySelector('.maClass').innerHTML = <p><b>HTML modifié</b></p>;

// avec jQuery :
$('h1').text('Bonjour avec jQuery');         
$('p').text('Ceci est un paragraphe');   
$('.maClass').html('<p><b>HTML modifié</b></p>');

// ----------------------------------------------------

// *** MODIFIER LE STYLE D'UN ÉLÉMENT ***
// avec JS :
document.querySelector('h1').style.color = 'orange';
document.querySelector('#monId').className = 'important'; 
document.querySelectorAll('p').style.color = 'purple'; // impossible avec querySelectorAll

// avec jQuery :
$('h1').css('color', 'blue');           // modifier la couleur
$('h1').css('color');                   // lire la couleur
$('#monId').addClass('important');      // ajouter une classe
$('#monId').removeClass('important');   // supprimer une classe (impossible à faire en JS)  
$('p').css('color', 'purple');          // modifier du style sur tous les éléments d'un même sélecteur

// ----------------------------------------------------

// *** AJOUTER OU SUPPRIMER UN ÉLÉMENT ***
// avec JS :
document.querySelector('h1').prepend('Oh : ');    // Ajouter du texte avant un élément
document.querySelector('h1').append(' !');        // Ajouter du texte après un élément
document.querySelectorAll('p');

// avec jQuery :
$('h1').prepend('Oh : ');               // Ajouter du texte avant un élément                    
$('h1').append(' !');                   // Ajouter du texte après un élément
$('h1').before('<div>Hello</div>');     // Ajouter un élément avant un autre élément    
$('h1').after('<div>Hello</div>');      // Ajouter un élément après un autre élément  
$('p').remove();                        // Supprimer des éléments

// ----------------------------------------------------

// *** MODIFIER LES ATTRIBUTS D'UN ÉLÉMENT ***
// avec JS :
document.querySelector('h1').getAttribute('class');   
document.querySelector('h1').setAttribute('style', 'text-transform: lowercase');      

// avec jQuery :
$('h1').attr('class');                                                // Sélectionner un attribut
$('h1').attr('style', 'text-transform: lowercase');                   // Modifier ou ajouter un attribut
$('h1').after('<a href="https://wikipedia.com">Wikipédia</a>');
$('a').attr('href', 'https://believemy.com');    

// ----------------------------------------------------

// *** AJOUTER DES ÉVÈNEMENTS ***
// avec JS :
document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('h1').style.color = 'orange';
});

for(let i = 0; i < 2; i++) {
    document.querySelectorAll('p')[i].addEventListener('click', () => {
        document.querySelector('h1').style.color = 'yellow';;
    });
}

// avec jQuery :
$('h1').click(() => {
    $('h1').css('color', 'blue');
});     

$('p').click(() => {
    $('h1').css('color', 'purple');
});

$('h1').on('mouseover', () => {
    $('#monId').addClass('important');
});

// ----------------------------------------------------

// *** FAIRE UNE REQUÊTE AJAX ***
// avec JS :
let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
requete.open('GET', url); // Nous récupérons juste des données
requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); // Nous envoyons notre requête

// Dès qu'on reçoit une réponse, cette fonction est executée
requete.onload = function() {
   if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
}

// avec jQuery :
const url = 'https://blockchain.info/ticker';

$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        console.log(data);
        $('h1').text(data.EUR.last + ' euros')
    },
    error: () => {
        alert('Merci de revenir plus tard')
    }
});

const url_bis = 'https://lesoublisdelinfo.com/api.php';

$.ajax({
    url: url_bis,
    type: 'POST',
    data: 'prenom=John',
    dataType: 'json',
    success: (data) => {
        $('#monId').text(data.resultat);
    },
    error: () => {
        alert('Merci de revenir plus tard')
    }
})

// ----------------------------------------------------

// *** AJOUTER DES ANIMATIONS ***
// avec jQuery :
$('h1').hide();         // cacher un élément
$('h1').show();         // afficher un élément

$('p').click(() => {
    $('h1').toggle();       // afficher et cacher un élément par alternance
    $('h1').fadeOut();      // cacher de manière dégradée     
    $('h1').fadeIn();       // afficher de manière dégradée
    $('h1').fadeToggle(); 
    $('h1').slideToggle(); 
    $('h1').animate({        // mettre uniquement des valeurs numériques (impossible de changer une couleur par ex)
        opacity: .5,
        margin: 30,
    });
    $('h1').slideUp().slideDown().animate({ opacity: .5, margin: 30 });  // afficher les animations les unes après les autres    
})