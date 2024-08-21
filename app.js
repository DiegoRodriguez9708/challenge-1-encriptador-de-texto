const textArea = document.querySelector('.text_area');
const mensaje = document.querySelector('.mensaje');
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/ 
function btnEncriptar() {
    if (textArea.value.trim() === "") {
        alert("Por favor ingresa un texto para encriptar.");
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //console.table(matrizCodigo);
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
//funcion para realizar desencriptacion del texto
function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    mensaje.value = textDesencriptado;
}
//funcion para realizar la desencriptacion del texto 
function desencriptar(stringDesencriptado) {
    let matrizCodigoInversa = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigoInversa.length; i++) {
        if (stringDesencriptado.includes(matrizCodigoInversa[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigoInversa[i][0], matrizCodigoInversa[i][1]);
        }
    }
    return stringDesencriptado;
}
function btnCopiar(){
    copiarTexto(mensaje.value);

}
function copiarTexto(texto) {
    if(texto.trim()!== ""){
        mensaje.focus();
        mensaje.select();
        navigator.clipboard.writeText(texto)
        alert("Mensaje Copiado!");
    }
    else{
        alert("No hay texto para copiar.")
    }
   
}
