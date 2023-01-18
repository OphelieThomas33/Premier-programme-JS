// Le mode strict : déclenche des erreurs silencieuses qui habituellement passent inaperçues
// "use strict" : au début du fichier .js ou à l'intérieur d'une fonction par exemple

prenom = "John";
console.log(prenom);

direBonjour();
addition(7, 1);

// peut se mettre juste à l'intérieur d'une fonction
function direBonjour() {  
  "use strict";
  nom = "Doe";
  console.log(nom);
}

function addition(nombreA, nombreA) {
  "use strict";
  console.log(nombreA + nombreA);
}