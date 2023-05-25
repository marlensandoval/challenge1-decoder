let inputText = document.getElementById("texto1");
let btnEnc = document.getElementById("btnEnc");

let desText = document.getElementById("texto2");
let btnDes = document.getElementById("btnDes");

inputText.addEventListener("input", function () {
    if (inputText.value.length > 0) {
        btnEnc.disabled = false;
        btnEnc.textContent = "Encriptar"
    } else {
        btnEnc.disabled = true;
        btnEnc.textContent = "Vacío"
    }
});

desText.addEventListener("input", function () {
    if (desText.value.length > 0) {
        btnDes.disabled = false;
        btnDes.textContent = "Desencriptar"
    } else {
        btnDes.disabled = true;
        btnDes.textContent = "Vacío"
    }
});

function encriptar() {
    let texto = document.getElementById("texto1").value.toLowerCase();

    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i);
        switch (letra) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += letra;
        }
    }

    document.getElementById("textoEncriptado").value = resultado;
    document.getElementById("btnCopiar").style.display = 'inline';
    document.getElementById("texto1").value = "";
}

function desencriptar() {
    let textoEncriptado = document.getElementById("texto2").value;

    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

    document.getElementById("textoDesencriptado").value = textoEncriptado;
}

function copiarTexto() {
    let textoCopiar = document.getElementById("textoEncriptado").value;
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    navigator.clipboard.writeText(textoCopiar);
}

function evitarMayusculas(event) {
    var tecla = event.key;
  
    // Validar si la tecla es una letra mayúscula, carácter especial o acento
    if (tecla !== tecla.toLowerCase() || !/^[a-z\s]$/.test(tecla)) {
        event.preventDefault();
        return false;
    }
  }