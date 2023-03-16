/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let arrayPaises = [];
arrayPaises.push(`Paris`);

while (true) {
    let paises = prompt(`ingrese nombre de cuiudades`);
    if (paises == null) {
        document.write(`pulsar f5 para reiniciar <br>`)
        break;
    } else{
        arrayPaises.push(paises);
    }
}
document.write("<ul>");
for (let i = 0; i < arrayPaises.length; i++) {
  document.write(`<li>${arrayPaises[i]}</li>`);
}
document.write("</ul>");

document.write(`la longitud del array es de : ${arrayPaises.length} <br>`);

document.write(`la primera pocision: ${arrayPaises[0]} <br>`);
document.write(`la tercera pocision: ${arrayPaises[2]} <br>`);
document.write(`la ultima pocision: ${arrayPaises.pop()} <br>`);




