/**
 * Crear un algoritmo que devuelva un 
 * array de objacts en base a pares
 */

const pares = [
  [1, { name: "Daniel" }],
  [2, { name: "Damaris" }],
  [3, { name: "Juanito" }],
  [4, { name: "Claudia" }],
  [5, { name: "Mateo" }]
];

function toCollection(arr){
    let collections = [];
   
    for (let i in arr){
        collections.push({id: arr[i][0], nombre: arr[i][1].name});
    }
    return collections
}
let result = toCollection(pares);
console.log(result);
