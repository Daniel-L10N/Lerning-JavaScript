/*
. Indice , validar que no sea menor a cero y, 
que el elemento exista en el array*/

function getElementByIdx(array, index){
if (!isNaN(index)){
    if (index >= 0 && index < array.length) {
        return array[index];
    }else {
        return false;
    }
}else return false;
}
let result = getElementByIdx([1, 2, 43, 23, 4, 12, 42, 13, 1], 5);
console.log(result);
