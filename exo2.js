MaDiv = document.getElementById("button");

MaDiv.addEventListener("click", MyClick);

function MyClick (evenement){
    var longueur = window.prompt("Saisir une  longueur : ");
    var aire = Math.PI * longueur * longueur;
    var perimetre = 2 * Math.PI * longueur;
    alert("aire : " + aire + " perimetre : " + perimetre + "");
}