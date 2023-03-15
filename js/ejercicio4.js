/* 
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

function parOimpar (num){
    
    if (num % 2 == 0) {
        document.write(`el parametro ${num} es par`)
    }else{
        document.write(`impar o incorrecto`)
    }
}

parOimpar(5)
// funciona desde aqui ingresadno el numero que deseamos.