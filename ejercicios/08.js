/**
 * Craer un algoritmo que tome un array de 
 * objetos y devuelva un array de pares.
 */
const usuarios = [
  { id: 1, name: "Daniel" },
  { id: 2, name: "Damaris" },
  { id: 3, name: "Juanito" },
  { id: 4, name: "Claudia" },
  { id: 5, name: "Mateo" }
];

function toParis(arr){
    let key , pairs = [];
    arr.forEach(elem => {
        key = elem.id;
        pairs.push([key, elem])
    })
    return pairs

}
console.log( toParis(usuarios))