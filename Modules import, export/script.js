// Attention : impossible d'utiliser les modules si vous n'avez pas de serveur, 
// la plupart des navigateurs bloquent les modules pour notre sécurité s'ils ne sont pas executés sur des serveurs

// modules qui sont codés une seule fois et qui peuvent être réutilisés
// les variables sont totalement indépendantes et même si on utilise 2 modules avec les mêmes variables => pas d'erreurs


// modules/direBonjour.js  => fichier de base
// export permet à la fonction d'être utilisée dans d'autres fichiers
export direBonjour(prenom) {
    console.log('Bonjour ' + prenom);
  }
  
// index.js
import { direBonjour } from './modules/direBonjour.js';
  
direBonjour('John'); // affiche 'Bonjour John'
  
// index.html
// permettre au navigateur de comprendre qu'on utilise un module
<script type="module" src="index.js"></script>

