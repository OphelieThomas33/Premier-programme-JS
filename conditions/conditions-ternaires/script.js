let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("où souhaitez vous allez ?") || "Gare du Nord";
let chauffeur = "Ophélie";

if ((gareDeDepart !="" || gareDArrivee != "") && chauffeur != "") {
    alert('Le train va démarrer à  destination de ' + gareDArrivee + ".");
}
else {
    console.log("Le train ne peut pas démarrer");
}



// let x = 1;

// condition if / else : 

// if (x > 3) {
//     console.log('x est supérieur à 3')
// }
// else {
//     console.log('x est inférieur à 3')
// }

// condition ternaire : [CONDITION] ? [TRUE] : [FALSE];

// x > 3 ? console.log("x est supérieur à 3") : console.log("x est inférieur à 3");

