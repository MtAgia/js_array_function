/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

*/

const calcularPeri = (largo1 , ancho2) =>{
    let rectangulo = 2 * (largo1 + ancho2)
    document.write(`el perimetro es: ${rectangulo} del rectangulo`)
}

const largo = parseInt(prompt(`ingrese el largo del rectangulo`))
const ancho = parseInt(prompt(`ingrese el ancho del rectangulo`))

calcularPeri(largo , ancho)