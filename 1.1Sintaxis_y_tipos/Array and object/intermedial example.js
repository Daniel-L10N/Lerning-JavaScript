/*
🏋️‍♂️ Ejercicio 2 (Intermedio): trabajar con objetos en arrays

Objetivo: filtrar, transformar y organizar datos en objetos.

👉 Problema:
Tienes un array de objetos con productos:

const productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Teléfono", precio: 800, disponible: false },
  { nombre: "Teclado", precio: 100, disponible: true },
  { nombre: "Monitor", precio: 300, disponible: true }
];


Filtra solo los productos que están disponibles.

Crea un nuevo array que contenga solo los nombres de los productos.

Calcula el total de los precios de los productos disponibles.
*/

import productos from './productos.json' assert { type: 'json' };

let productosDisponibles = [];
let productosNoDisponibles =[];
let productosNoRegistrados =[]

productos.forEach((product) => {
if (product.disponible === true){
	productosDisponibles.push(product);
}else if (product.disponible === false){
	productosNoDisponibles.push(product);
}else {
	productosNoRegistrados.push(product);
}
});
// console.log("Los productos disponibles son: ", productosDisponibles.for);
console.log("\n Los Productos Disponibles son: \n")
productosDisponibles.forEach((produ) =>{
  console.log("Producto: ", produ.nombre , "  Precio :", produ.precio)
})

console.log("\n Los Productos No Disponibles son: \n")
productosNoDisponibles.forEach((produ) =>{
  console.log("Producto: ", produ.nombre , "  Precio :", produ.precio)
})

console.log("\n Los Productos No Registrados son: \n")
productosNoRegistrados.forEach((produ) =>{
  console.log("Producto: ", produ.nombre , "  Precio :", produ.precio)
})