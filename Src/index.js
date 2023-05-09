
function encriptado(){

    //El texto escrito se mete a una variable para poder usar la funcion replace()
    let str = document.querySelector(".text-a-encrip").value;
    let newStr = str.replace(/a|e|i|o|u/g, (match) => {
    switch (match) {
        case "a":
        return "ai";
        case "e":
        return "enter";
        case "i":
        return "imes";
        case "o":
        return "ober";
        case "u":
        return "ufat";
    }
    });

    //Esta columna de scrip oculta el contenido del div-encrip
    document.querySelector(".diseño-encrip").style.display = "none";
    document.getElementById("div-encriptado").classList.remove("hidden")
    document.getElementById("boton-copiar").classList.remove("hidden")
    document.querySelector(".span-trans").innerHTML = newStr;

    console.log("Texto original: " + str);
    console.log("Texto encriptado: " + newStr)
}

function desencriptado(){

    //El texto escrito se mete a una variable para poder usar la funcion replace()
    let str = document.querySelector(".text-a-encrip").value;
    let newStr = str.replace(/ai|enter|imes|ober|ufat/g, (match) => {
    switch (match) {
        case "ai":
        return "a";
        case "enter":
        return "e";
        case "imes":
        return "i";
        case "ober":
        return "o";
        case "ufat":
        return "u";
    }
    });

    //Esta columna de scrip oculta el contenido del div-encrip
    document.querySelector(".diseño-encrip").style.display = "none";
    document.getElementById("div-encriptado").classList.remove("hidden")
    document.getElementById("boton-copiar").classList.remove("hidden")
    

    document.querySelector(".span-trans").innerHTML = newStr;
    
    console.log("Texto encriptado: " + str)
    console.log("Texto desencriptado:" + newStr);
}

function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.querySelector(".span-trans").innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
}

document.getElementById("boton-copiar").onclick =copiarAlPortapapeles;
document.querySelector(".encriptar").onclick = encriptado;
document.querySelector(".desencriptar").onclick = desencriptado;