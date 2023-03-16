/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
*/

let cadenaFormada = (texto) =>{
    if (texto === texto.toUpperCase()) {
        document.write(`este cadena tiene mayusculas`);
    }else if(texto === texto.toLowerCase()){
        document.write(`esta cadena tiene minusculas`)
    }else{
        document.write(`esta cadena tiene minusculas y mayusculas`)
    }
    return texto
}

let inputTexto = prompt(`ingrese su cadena de texto`)
cadenaFormada(inputTexto)