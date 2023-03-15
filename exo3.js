let a = 3;
let b = 2;

function multiplie(x = 8) {
    return x * 3;
}

function affiche() {
    // Appel de multiplie avec les variables globales a et b
    alert("multiplie(a) = " + multiplie(a));
    alert("multiplie(b) = " + multiplie(b));

    // Appel de multiplie sans paramètre
    alert("multiplie() = " + multiplie());
}