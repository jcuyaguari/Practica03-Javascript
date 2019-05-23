/* var fotos = new Array ();
for (i=0; fotos.length; i++) {
aleatorio = Math.floor(Math.random()*(fotos.length));
seleccion = fotos[aleatorio];
fotos.splice(aleatorio, 1);
document.write(seleccion) */
/* function siguiente()
{
    var img = document.getElementById("foto");

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById("foto").src = imgArray[0].src;
                break;
            }
            document.getElementById("foto").src = imgArray[i+1].src;
            break;
        }
    }
} */

array = [{ "id": 1, "imagen": "img/img1.jpg" },
{ "id": 2, "imagen": "img/img2.jpg" },
{ "id": 3, "imagen": "img/img3.jpg" },
{ "id": 4, "imagen": "img/img4.jpg" },
{ "id": 5, "imagen": "img/img5.jpg" },
{ "id": 6, "imagen": "img/img6.jpg" },
{ "id": 7, "imagen": "img/img7.jpg" },
{ "id": 8, "imagen": "img/img8.jpg" },
{ "id": 9, "imagen": "img/img9.jpg" },
{ "id": 10, "imagen": "img/img10.jpg" }];
imagenes = [1, 2, 3, 4, 5];

var pActual = 0;

function inicio() {
    for (i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (10));
    }
    pActual = 0;
    verificar();
    imprimir();
}
function siguiente() {
    pActual++;
    verificar();
    imprimir();
}

function imprimir() {
    console.log(imagenes);
    var texto = "<img src=" + array[imagenes[pActual]].imagen + ">";
    window.document.getElementById("imagen").innerHTML = texto;
}
function verificar() {
    if (pActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    }
    else if (pActual == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}

function anterior() {
    pActual--;
    verificar();
    imprimir();
}