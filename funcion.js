var aux = 0;
var signo = "";
var p=0;
function numeros(num) {
    document.getElementById("pantalla").value = (document.getElementById("pantalla").value + num);
}

function borrar() {
    var valor = document.getElementById("pantalla").value
    if (valor.length <= 1) {
        document.getElementById("pantalla").value = ("0");
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

function raiz() {
    var num = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = (Math.sqrt(num))

}

function suma() {
    aux=document.getElementById("pantalla").value
    document.getElementById("pantalla").value= ('0')
    signo = '+'
}

function resta() {
    aux=document.getElementById("pantalla").value
    document.getElementById("pantalla").value= ('0')
    signo = '-'
}
function multiplicacion() {
    aux=document.getElementById("pantalla").value
    document.getElementById("pantalla").value= ('0')
    signo = '*'
}
function division() {
    aux=document.getElementById("pantalla").value
    document.getElementById("pantalla").value= ('0')
    signo = '/'
}

function unox() {
    aux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = (1/(aux))
}
function masmenos() {
    var num = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = (num * -1)
}

function porcentaje() {
    var tecla = document.getElementById("pantalla").value
    p = ((aux * tecla) / 100);
    switch (signo) {
        case "/":
            aux = parseFloat(aux) / parseFloat(p)
            break;
        case "+":
            aux = parseFloat(aux) + parseFloat(p)
            break;
        case "-":
            aux = parseFloat(aux) - parseFloat(p)
            break;
        case "*":
            aux = parseFloat(aux) * parseFloat(p)
            break;

    }
    signo = '%'
}

function igual() {
    var num = document.getElementById("pantalla").value
    switch (signo) {
        case "/":
            aux = parseFloat(aux) / parseFloat(num)
            break;
        case "+":
            aux = parseFloat(aux) + parseFloat(num)
            break;
        case "-":
            aux = parseFloat(aux) - parseFloat(num)
            break;
        case "*":
            aux = parseFloat(aux) * parseFloat(num)
            break;
        case "%":
            aux
            break;
    }
    document.getElementById("pantalla").value = (aux)
}