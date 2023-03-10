Madiv = document.getElementById("boutton");

Madiv.addEventListener("click", monclick);

function monclick(evenement){
    var long = window.prompt("saisir une longueur : ");
    var larg = window.prompt("saisir une largeur : " );
    var air = long*larg;
    var peri = long*2 + larg*2;
    alert ("aire :" + air + " perimetre :" + peri);

}