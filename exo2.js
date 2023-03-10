Madiv = document.getElementById("boutton");
Madiv.addEventListener("click", monclick);

function monclick(evenement){
    var long = window.prompt("saisir une longueur : ");
    var ray = long/2;
    var peri = 2*Math.PI*ray;
    var air = Math.PI*(ray**2);
    alert ("aire :" + air + " perimetre :" + peri);

}