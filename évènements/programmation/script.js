// setTimeout
let timer = setTimeout("alert('Bonjour')", 3000);
// (ce que doit faire la fonction, le nombre de ms à attendre avant le déclenchement)
clearTimeout(timer);

// setInterval
let interval = setInterval("alert('Bonjour')", 5000);
clearInterval(interval);
