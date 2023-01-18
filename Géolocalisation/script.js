// Pour géolocaliser on utilise l'objet geolocation

// Vérifier que la geolocation soit disponible
if ('geolocation' in navigator) {
  
    // Obtenir la position avec en utilisant :
    // getCurrentPosition() => return 1 fois la position 
    // ou 
    // watchPosition() => actualise la position
    
    // 3 paramètres possibles : 
    // (success, error (optionnel), options (optionnel))
    
    let options = {
        enableHighAccuracy: true,  // false par defaut
        maximumAge        : 30000, // derniere position en cache en millisecondes qu'on peut accepter, 0 par defaut
        timeout           : 27000  // duree max en millisecondes pour geolocaliser, infinity par defaut
      }
    
    navigator.geolocation.getCurrentPosition((position) => {   // en cas de succès créer une fonction pour expliquer ce qu'on souhaite faire
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    }, error, options);  // ici error est une fonction et options est un objet
    
    function error() {
      alert('Aucune position disponible.');
    }
    
    
    /*
    let watch = navigator.geolocation.watchPosition() ...
    navigator.geolocation.clearWatch(watch)
    */
    
  }
  else {
    alert('Le navigateur ne supporte pas la geolocalisation');
  }