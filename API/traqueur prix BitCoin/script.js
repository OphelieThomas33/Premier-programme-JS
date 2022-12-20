// appeler l'URL de l'API
const url = 'https://blockchain.info/ticker';   

function miseAJourPrix() {
    // créer une requête
    let requete = new XMLHttpRequest();   // créer un objet
    requete.open('GET', url);  // ouvrir une nouvelle requête => 1er paramètre : GET (uniquement 1 url) / POST (envoyer des données via un formulaire) - 2ème paramètre : url
    requete.responseType = 'json';  // réponse attendue : ici du Json
    requete.send();   // nous envoyons notre requête

    // dès qu'on reçoit une réponse, cette fonction est exécutée :
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {  // vérifier l'état de notre requête (DONE = accompli)
            if (requete.status === 200) {  // vérifier que le statut de la requête = 200 (pas d'erreur)
                let reponse = requete.response;  // on stocke la réponse
                let prixEnEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                alert('Un problème est survenu, merci de revenir plus tard.')
            }
        }
    }
};

setInterval(miseAJourPrix, 1000); // le prix se met à jour toutes les secondes
