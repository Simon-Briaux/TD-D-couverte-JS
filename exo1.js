MaDiv = document.getElementById("button");

MaDiv.addEventListener("click", MyClick);

function MyClick (evenement){
    var long = window.prompt("Saisir une  longueur : ");
    var larg = window.prompt("Saisir une  largueur : ");
    var aire = long*larg;
    var perimetre = long*2 + larg*2;
    alert("aire : " + aire + " perimetre : " + perimetre + "");
}