const url = 'https://lesoublisdelinfo.com/api.php';

// // Envoyer des données avec HTTPRequest : 
// let requete = new XMLHttpRequest();

// requete.open('POST', url);
// requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// requete.responseType = 'json';
// requete.send('prenom=John');

// requete.onload = function() {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     }
//     else {
//       alert('Un problème est intervenu, merci de revenir plus tard.');
//     }
//   }
// }

// // Remplacer le code ci-dessus pour envoyer des données avec Fetch: 
// async function envoyerPrenom(prenom) {
    
//     const requete = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded' // préciser le type de données
//         }, 
//         body: new URLSearchParams({
//             prenom  // correspond à prenom = prenom
//         })
//     });

//     if(!requete.ok) {
//         alert('Un problème est survenu')
//     } else {
//         const donnees = await requete.json();
//         console.log(donnees);
//     }
// }

// envoyerPrenom('Ophélie');

// method : 'PUT' : remplacer une donnée
// method : 'PATCH' : modifier une partie d'une donnée
// method : 'DELETE' : supprimer une donnée


// Envoyer des données avec Axios : 

const axiosInstancePost = axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    // baseURL: 'https://lesoublisdelinfo.com/'  => dans ce cas remplacer url ci-dessous url par 'api.php'
});

axiosInstancePost.post(url, new URLSearchParams({   // possibilité d'utiliser : .put, .patch, .delete
    prenom: 'Steve'
}))
    .then(function(donnees) {
        console.log(donnees.data);
    })
    .catch(function(erreur) {
        console.log(erreur)
    })