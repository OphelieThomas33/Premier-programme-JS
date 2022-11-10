/*
function criDeGuerre() {

    let cri = "Toujours plus fort !"; // variable locale
    console.log(cri);

}

criDeGuerre();
*/

let cri = "Toujours plus bas !"; // variable globale

function criDeGuerre() {

    let cri = "Toujours plus fort !";  // variable locale
    console.log(cri);

}

criDeGuerre();   // toujours plus fort ! -> va chercher la variable locale
console.log(cri);    // toujours plus bas ! -> va chercher la variable globale


