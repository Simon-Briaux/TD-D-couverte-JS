Madiv = document.getElementById("boutton");
Madiv.addEventListener("click", affiche);
a = 3;
b = 2;

function multiplie(x = 8) {
    return x *3;
    }

    
function affiche(){
    alert(multiplie(a));
    alert(multiplie(b));
    alert(multiplie());
}