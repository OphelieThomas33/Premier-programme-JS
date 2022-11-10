let i = 0;

// renvoyer une boucle à l'instruction de départ
while(i < 5) {

    if(i == 3) {
        i++;
        continue;
    }

    console.log('ligne : ' + i)
    i++;
}


// stopper une boucle
while(i < 5) {

    if(i == 3) {
        break;
    }

    console.log('ligne : ' + i)
    i++;
}