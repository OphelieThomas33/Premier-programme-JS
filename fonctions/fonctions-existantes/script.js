/*

// function prevoirAge() {
    let age = prompt("Bonjour, quel âge avez-vous ?"); // données stockées en tant que chaînes de caractères
    alert("Bientôt vous aurez " + (age + 1) + " ans.");
}

prevoirAge(); // résultat initial 341 ans - "34" + 1 => 341 

*/

function prevoirAge() {

    let age = prompt("Bonjour, quel âge avez-vous ?"); 
    // convertir une chaine de caractère en nombre
    // age = parseInt(age); 
    // age = parseFloat(age);
    age = Number(age);
    // revenir sur une chaine de caractères 
    // age = age.toString();
    alert("Bientôt vous aurez " + (age + 1) + " ans.");
    
}

prevoirAge();
