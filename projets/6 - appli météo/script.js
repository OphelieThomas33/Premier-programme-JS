let ville = 'Paris';
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    ville = prompt('Saisissez une ville :');
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&APPID=04eda2a4d3707b1a738c8ce8929ae917&units=metric";
    
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#ville').textContent = ville;
                document.querySelector("#temperature_label").textContent = temperature;
            }
            else {
                alert('Un problème est survenu, merci de revenir plus tard.');
            }
        }
    }
};


