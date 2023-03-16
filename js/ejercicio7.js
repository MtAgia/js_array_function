/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número 
elegido por el usuario.
*/

const tabla = (num) => {
    for(let i= 0; i <= 10; i++){
        let resultado = i * num
        document.write(`<br>`)
        document.write(`el resultado de 2 x ${i} = ${resultado}`)
        document.write(`<br>`);
    }
}

let numero = parseInt(prompt(`ingrese numero para saber su tabla`))
tabla(numero)