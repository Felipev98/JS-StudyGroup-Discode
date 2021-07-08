function clean() {
    document.getElementById("salida").innerHTML = "0";
}

function removeZero() {
    let value = document.getElementById("salida").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("salida").innerHTML = value;
    }
}

function perc(){
    let value = document.getElementById("salida").innerHTML;
    value = value/100
    document.getElementById("salida").innerHTML = value
}
function display(value) {
    removeZero()
    document.getElementById("salida").innerHTML += value;
}

function resolver(){
    removeZero()
    let ecuacion = document.getElementById("salida").innerHTML;
    let resuelto = eval(ecuacion)
    document.getElementById("salida").innerHTML = resuelto;
}
