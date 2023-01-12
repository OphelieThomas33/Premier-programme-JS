// ** Async et Await => "sucres syntaxiques" :
// utiliser les promesses de façon plus intuitives et plus simplement

// async function direBonjour() {   // async force la fonction à retourner une promesse

//     const promesse = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promesse tenue !'), 3000);
//     });

//     let resultat = await promesse;     // Await : force JS à attendre que la promesse soit honorée ou rejetée
//     console.log(resultat);

// }

// direBonjour()


// Autre exemple : 
function chargerScript(script) {
    return new Promise((resolve, reject) => {

        // créer un élément
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        // deux possibilités : resolve()
        element.onload = () => resolve('Fichier ' + script + ' a été chargé');

        // reject
        element.onerror = () => reject(new Error('Opération impossible'));
    
    });
}

async function resultat() {
    try {
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        const scriptB = await chargerScript('autre.js');
        console.log(scriptB);
    }
    catch(error) {
        console.log(error);
        document.head.lastChild.remove(); // le script qui n'a pas pu être chargé
    }
}

resultat();