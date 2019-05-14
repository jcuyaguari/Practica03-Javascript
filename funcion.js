var aux=0;
function numeros(num){
    document.getElementById("pantalla").value = (document.getElementById("pantalla").value + num);
}

function borrar() {
    var valor = document.getElementById("pantalla").value
    if (valor.length <= 1) {
        document.getElementById("pantalla").value = ('0');
        aux;
    } else {
        document.getElementById("pantalla").value = (valor.substr(0, valor.length - 1))
    }
}

function borra() {
    document.getElementById("pantalla").value = ('0')
}
function borradoTotal() {
    document.getElementById("pantalla").value = ('0')
    aux;
}