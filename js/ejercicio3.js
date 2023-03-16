/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y 
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/


const generarAleatorio = (min , max) => {
    return Math.floor(Math.random()* (max-min) + min);
}
document.write(`<h1> dado 50 veces repetido </h1> <br>`);

const arrayDados = [];

for (let totalDados = 0; totalDados < 50; totalDados++) {
    for (let i = 0; i < 1; i++) {
    document.write(`el primer dado dio: `);
    let suma2 = generarAleatorio(1, 7)
    document.write(suma2);
    document.write(`<br>`);
    
    document.write(`el segundo dado dio: `);
    let suma1 = generarAleatorio(1,7)
    document.write(suma1)
    document.write(`<br>`);
    document.write(`la suma de esta jugada fue: ${suma1 + suma2}`)
    let total = suma1 + suma2;
    arrayDados.push(total)
    document.write(`<br>`)
    document.write(`resultados de sumas: ${arrayDados}`)
    document.write(`<br>`);
    }
document.write(`<br>`);
document.write(`<br>`);
document.write(`<br>`);
}

