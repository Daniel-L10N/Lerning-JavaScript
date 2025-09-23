/**
 * Crear un algoritmo que devuelva cantidad
 * de numeros positivos dentro de un array
 */
let array = [2, 5, 7, 15, -5, -100, 55, 45, 321];
function NumerosPositivos(arr){
if (Array.isArray(arr)){
    let positivos = 0; // despues de la comprobacion para no desperdiciar espacio en memoria
    if (arr.length >= 0 ){
        arr.forEach(elem => {
            if (elem > 0){
                 positivos ++
            }
        })
        return positivos
    }else return 0
}else return false
}

console.log(NumerosPositivos(array));
