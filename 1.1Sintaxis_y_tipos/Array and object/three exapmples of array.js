// Ejemplo básico: Crear y acceder a un array
const frutas = ['Manzana', 'Banana', 'Cereza'];
console.log('Primera fruta:', frutas[0]); // Acceder al primer elemento
console.log('Cantidad de frutas:', frutas.length); // Longitud del array

// Ejemplo intermedio: Modificar y recorrer un array
frutas.push('Durazno'); // Agregar un elemento al final
frutas.splice(1, 1, 'Naranja'); // Reemplazar el segundo elemento
console.log('Frutas actualizadas:', frutas);

frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});

// Ejemplo avanzado: Uso de métodos funcionales en arrays
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num ** 2); // Elevar al cuadrado cada número
const pares = numeros.filter(num => num % 2 === 0); // Filtrar números pares
const suma = numeros.reduce((acum, num) => acum + num, 0); // Sumar todos los números

console.log('Números originales:', numeros);
console.log('Cuadrados:', cuadrados);
console.log('Números pares:', pares);
console.log('Suma total:', suma);