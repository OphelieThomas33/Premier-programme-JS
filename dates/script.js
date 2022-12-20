// ** Récupérer la date actuelle :
let dateActuelle = Date();   // sous format textuel (norme anglosaxone)
console.log(dateActuelle); 

let dateEnSecondes = Date.now();  // nombre de secondes depuis le 1er janvier 1970 à minuit UTC (Londres)
console.log(dateEnSecondes);  


// ** l'objet Date : 
let datePrecise = new Date(1988, 1, 15, 22, 28);
console.log(datePrecise);

// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0


// ** Getter et Setter de l'objet Date :
let dateActuelle2 = new Date();

// getter : récupérer une date 
console.log(dateActuelle2.getFullYear());   // année en cours
console.log(dateActuelle2.getDay());     // jour de la semaine (commence à partir de dimanche à l'index 0)
console.log(dateActuelle2.getDate());    // jour du mois en cours 

console.log(dateActuelle2.getUTCDay());

// setter : modifier une date 
dateActuelle2.setFullYear(2750);
console.log(dateActuelle2.getFullYear());   // l'année est définie en 2750


// ** Transformer une date au format local :
let dateActuelle3   = new Date();

// toLocaleDateString    = jour, mois, année
// toLocaleTimeString    = heure
// toLocaleString        = jour, mois, année, heure
// ON CHOISIT LES OPTIONS QU'ON VEUT (on peut mettre au choix : weekday, year, month, day, hour, minute, second, etc.)

let dateLocale      = dateActuelle3.toLocaleString('fr-FR', {
    weekday: 'long',   // short (3 premières lettres du jour), narrow (première lettre), long (toutes les lettres)
    year: 'numeric',   // numerie(xxxx), 2-digit (xx);
    month: 'long',   // short, narrow, long, numeric
    day: 'numeric',   // numeric, 2-digit
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

console.log(dateLocale);

// Choisir le format selon la localisation de l'utilisateur :
let dateActuelle4   = new Date();

let dateLocale2      = dateActuelle4.toLocaleString(navigator.language, {
    weekday: 'long',   // short (3 premières lettres du jour), narrow (première lettre), long (toutes les lettres)
    year: 'numeric',   // numerie(xxxx), 2-digit (xx);
    month: 'long',   // short, narrow, long, numeric
    day: 'numeric',   // numeric, 2-digit
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

console.log(dateLocale2);


// ** Les templates String avec les dates : 
// Avant (avec concaténation) :
let prenom = 'John';
let bonjour = 'Bonjour ' + prenom;
console.log(bonjour);

// Maintenant avec les templates string :
let prenom = 'John';
let bonjour = `Bonjour ${prenom}`;   // accent grave (alt GR + 7)
console.log(bonjour);

// avec les dates : 
let date = new Date().getFullYear();
let cpoyright = `${date} @lilou`;
console.log(cpoyright);

// où encore plus pratique : des calculs 
let aliments = { fruits: 5, legumes: 1, biscuits: 75 };
let panier = `Dans votre panier, vous avez ${aliments.fruits + aliments.legumes + aliments.biscuits} articles.`;
console.log(panier);
