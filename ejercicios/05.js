/*
Crea un algoritmo que devuelva el numero 
menor y el mayor de un array */

let array = [2, 4,23 ,12, 43, 124,221, 312,-32, -32,32, -54];
function getMenorMayor(arr){
if(Array.isArray(arr)){
    if (arr.length >0 ){
        let a= arr[0], b = arr[0], i = 1;
      do{
        a = (a < arr[i]) ? a : arr[i];
        b = (b > arr[i]) ? b : arr[i];
        i++
      }while(i < arr.length){
        
      }
      return [a, b]

    }else {
      return false
    }
}else {
  return false
}
}

console.log(`Menor ${getMenorMayor(array)[0]}, Moyor ${getMenorMayor(array)[1]}`);
// se que lo mejor es guardar en una variable temporal, porque se evita la doble ejecucion de la funcion pero esto es solo un ejemplo.

