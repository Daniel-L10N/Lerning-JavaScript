/*
Objetivo: practicar recorrido de arrays (forEach, map) y creación de nuevos arrays.

👉 Problema:
Tienes un array de números:*/
const numeros = [2, 5, 8, 10];
/* Realiza las siguientes tareas:
1-> Recorre el array e imprime cada número.

2-> Crea un nuevo array con el doble de cada número.

3-> Saca la suma total de los números usando .reduce(). */


/*
// Recorrer el array e imprimir cada número:
// ########################################################
 
console.log("\nMetodo eficiente: \n")
numeros.forEach(num => console.log(num));

console.log("\nMetodo alternativo: \n")

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}



console.log("\nMetodo menos eficiente: \n")
let i = 0;
while (i < numeros.length){
    console.log(numeros[i]);
    i++ 
*/

// #######################################################
// Crear un array nuevo con el doble de cada numero.
/*
console.log("\n Metodo eficiente:");
let numeros_doble = numeros.map(num => num*2);
console.log(numeros_doble);

console.log("\n Metodo alternativo practico:");
let numeros_doble1 = [];
numeros.forEach(num => numeros_doble1.push(num *2)
)
console.log(numeros_doble1)

console.log("\n Metodo alternativo:")
let numeros_dobles2 = []
for (let i= 0; i < numeros.length; i++){
numeros_dobles2.push(numeros[i] *2)
}
console.log(numeros_dobles2)

console.log("\n Metodo menos eficiente:")
let numeros_dobles3 = [];
let i =0;
while (i < numeros.length ){
    numeros_dobles3.push(numeros[i] *2)
    i++
}
console.log(numeros_dobles3)
*/

// #################################################
// Sacando la suma total usando reduce().
/*
let suma = numeros.reduce((acc , num) => acc + num ,0 )
console.log("La suma es: ", suma)
*/




/*
✅ Lo bueno de tu código:

Cobertura completa: probaste varias formas de recorrer y transformar arrays.

Uso correcto de .map() y .reduce() (que son los métodos modernos y más usados).

Comentarios claros que organizan cada parte.

Practicaste también con for y while, lo cual te da más confianza en la lógica pura.

🔧 Detalles para mejorar:

Eficiencia: hoy en día, lo más común es usar .forEach(), .map() y .reduce() en lugar de for y while (menos líneas, más expresivo).

Consistencia en nombres:

Usaste numeros_doble, numeros_doble1, numeros_dobles2, numeros_dobles3.

Podrías simplificarlo a algo como numerosDobles_map, numerosDobles_forEach, etc. (más descriptivo).

Mostrar resultados finales juntos: al final podrías imprimir un resumen con la suma y los arrays generados, así el usuario ve la comparación completa.

🚀 Versión mejorada (manteniendo tu lógica):
*/


// 1. Recorrer el array
console.log("Recorrer array:");
numeros.forEach(num => console.log(num));

// 2. Crear array con el doble de cada número
let numerosDobles = numeros.map(num => num * 2);
console.log("Array con dobles:", numerosDobles);


// 3. Suma total usando reduce
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log("La suma es:", suma);
