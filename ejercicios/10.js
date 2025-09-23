/**
 * crear array de longitud N, y que sus elementos sean 
 * numeros de 1 hasta N.
 */
let longitud = 7;
function makeArray(n){
    if (n > 0){

        let arrayN= [];
    for ( let i = 0; i < n; i++){
        arrayN[i] = i +1;
    }return arrayN
    
    }else return []
}
let result = makeArray(longitud);
console.log(result);