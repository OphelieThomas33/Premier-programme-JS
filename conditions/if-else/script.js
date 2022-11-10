let heure = 18;

//  ==      => égal à la valeur
//  ===     => égal à la valeur et au type
//  !=      => différent de la valeur
//  !==     => différent de la valeur et du type
//  <       => inférieur à
//  >       => supérieur à
//  <=      => inférieur ou égal à
//  >=      => supérieur ou égal à

if (heure < 12) {
    console.log("c'est bientôt le midi");
}
else if(heure < 18) {
    console.log("c'est l'après-midi");
}
else {
    console.log("c'est la soirée");
}

// age 
// - 18 : Vous n'êtes pas majeur
// 18 et 20 : Vous êtes majeur en France
// 21+ : Vous êtes majeur partout, à vous les casinos !

let age = 21;

if (age < 18) {
    console.log("Vous n'êtes pas majeur");
}
else if (age < 21) {
    console.log("Vous êtes majeur en France");
}
else {
    console.log("Vous êtes majeur partout, à vous les casinos !")
}