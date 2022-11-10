let consommable = "chocolat";

switch(consommable) {

    case "carotte":
    case "pomme de terre":
    case "courgette":
        console.log("Ceci est un légume");
        break;
    
    case "banane":
    case "fraise":
    case "raisin":
        console.log("Ceci est un fruit");
        break;

    default:
        console.log("Ceci n'est ni un fruit ni un légume");    
    
}