// ** Les promesses 
// 3 valeurs possibles : en cours / honorée / rompue

// Exemple Discord(), discuter en ligne par micro (ou vidéo)
// besoin de charger de nombreuses choses tout en demandant une autorisation pour accéder au micro (ou à la caméra)

// const promesse = new Promise((resolve, reject) => {
    // tâches asynchrones

    // promesse honorée : resolve()

    // promesse rompue : reject()
//})

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

const promesse = chargerScript('test.js');    
promesse.then (         // ensuite : afficher le message resolve() ou (reject)
    function(result) {         // si une fonction result existe
        console.log(result);
    },
    function(error) {         // si une fonction error existe
        console.log(error);
    }
)   