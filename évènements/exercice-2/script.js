// Sélectionner les éléments   
let btn     = document.querySelector('button');
let message = document.querySelector('div');
let hidden  = true;

// cacher le message
message.style.display = "none";

// Détecter le clic
btn.addEventListener('click', () => {
    if (hidden) {
        btn.textContent = "Cacher";
        message.style.display = "block";
        hidden = false;
    }

    else {
        btn.textContent = "Afficher";
        message.style.display = "none";
        hidden = true;
    }
})

