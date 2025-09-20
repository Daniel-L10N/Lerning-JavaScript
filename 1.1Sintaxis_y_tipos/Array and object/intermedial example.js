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
const productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Teléfono", precio: 800, disponible: false },
  { nombre: "Teclado", precio: 100, disponible: true },
  { nombre: "Monitor", precio: 300, disponible: true },
  { nombre: "Mouse", precio: 50, dispoblible: true },      // error intencional
  { nombre: "Auriculares", precio: 150 },                 // disponible ausente
  { nombre: "Impresora", precio: 250, disponible: false },
  { nombre: "Cámara", precio: 600, dispoblible: true },   // error intencional
  { nombre: "Disco Duro", precio: 120, disponible: true },
  { nombre: "Memoria USB", precio: 25, disponible: true },
  { nombre: "Router", precio: 80, disponible: false },
  { nombre: "Switch", precio: 90, disponsible: true },    // error intencional
  { nombre: "Proyector", precio: 400, disponible: true },
  { nombre: "Micrófono", precio: 60 },                   // disponible ausente
  { nombre: "Altavoces", precio: 200, disponible: true },
  { nombre: "Tablet", precio: 500, disponible: false },
  { nombre: "Smartwatch", precio: 300, dispoblible: true }, // error intencional
  { nombre: "Cargador", precio: 30, disponible: true },
  { nombre: "Soporte Laptop", precio: 40, disponible: true },
  { nombre: "Teclado Mecánico", precio: 180 },           // disponible ausente
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Teléfono", precio: 800, disponible: false },
  { nombre: "Teclado", precio: 100, disponible: true },
  { nombre: "Monitor", precio: 300, disponible: true },
  { nombre: "Mouse", precio: 50, dispoblible: true },
  { nombre: "Auriculares", precio: 150 },
  { nombre: "Impresora", precio: 250, disponible: false },
  { nombre: "Cámara", precio: 600, dispoblible: true },
  { nombre: "Disco Duro", precio: 120, disponible: true },
  { nombre: "Memoria USB", precio: 25, disponible: true },
  { nombre: "Router", precio: 80, disponible: false },
  { nombre: "Switch", precio: 90, disponsible: true },
  { nombre: "Proyector", precio: 400, disponible: true },
  { nombre: "Micrófono", precio: 60 },
  { nombre: "Altavoces", precio: 200, disponible: true },
  { nombre: "Tablet", precio: 500, disponible: false },
  { nombre: "Smartwatch", precio: 300, dispoblible: true },
  { nombre: "Cargador", precio: 30, disponible: true },
  { nombre: "Soporte Laptop", precio: 40, disponible: true },
  { nombre: "Teclado Mecánico", precio: 180 },
  // 20 productos más
  { nombre: "Webcam", precio: 90, disponible: true },
  { nombre: "Power Bank", precio: 60, dispoblible: false },
  { nombre: "HDMI Cable", precio: 15 },
  { nombre: "Adaptador USB-C", precio: 20, disponible: true },
  { nombre: "Tarjeta de Sonido", precio: 110, disponsible: true },
  { nombre: "Micrófono USB", precio: 70 },
  { nombre: "Estabilizador", precio: 150, disponible: true },
  { nombre: "GoPro", precio: 350, disponible: false },
  { nombre: "Teclado Bluetooth", precio: 120 },
  { nombre: "Mouse Gaming", precio: 80, dispoblible: true },
  { nombre: "Auriculares Inalámbricos", precio: 200 },
  { nombre: "Monitor Curvo", precio: 500, disponible: true },
  { nombre: "Smart TV", precio: 800, disponible: false },
  { nombre: "Cable Ethernet", precio: 10 },
  { nombre: "Docking Station", precio: 150, dispoblible: true },
  { nombre: "SSD 1TB", precio: 180, disponible: true },
  { nombre: "SSD 512GB", precio: 120 },
  { nombre: "Placa Base", precio: 220, disponible: false },
  { nombre: "Tarjeta Gráfica", precio: 600, dispoblible: true },
  { nombre: "Procesador i7", precio: 350 },
  { nombre: "Procesador Ryzen 7", precio: 320, disponible: true },
  
];


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