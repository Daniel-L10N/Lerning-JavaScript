/**
 * Calculadora de impuestos 
 * Crear algoritmo que devuelva el precio del 
 * producto ma impuesto.
 */

function calculoIva(precio, impuesto){
let iva = precio * impuesto;
return [precio + iva , iva];
}
let result = calculoIva(19.90, 0.15);
console.log ( "Total: ", result[0], "Iva: ", result[1])

