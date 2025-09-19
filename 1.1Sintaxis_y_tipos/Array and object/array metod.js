// Crear un array de ejemplo
const numbers = [1, 2, 3, 4, 5];

// 1. forEach - Iterar sobre los elementos
numbers.forEach(num => console.log(num));

// 2. map - Crear un nuevo array transformando los elementos
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 3. filter - Filtrar elementos que cumplan una condición
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 4. reduce - Reducir el array a un solo valor
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 5. find - Encontrar el primer elemento que cumpla una condición
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// 6. some - Verificar si al menos un elemento cumple una condición
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);

// 7. every - Verificar si todos los elementos cumplen una condición
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);

// 8. push - Agregar elementos al final del array
numbers.push(6);
console.log(numbers);

// 9. pop - Eliminar el último elemento del array
numbers.pop();
console.log(numbers);

// 10. shift - Eliminar el primer elemento del array
numbers.shift();
console.log(numbers);

// 11. unshift - Agregar elementos al inicio del array
numbers.unshift(0);
console.log(numbers);

// 12. slice - Crear una copia parcial del array
const sliced = numbers.slice(1, 3);
console.log(sliced);

// 13. splice - Modificar el array (agregar/eliminar elementos)
numbers.splice(2, 1, 99); // Reemplaza el tercer elemento con 99
console.log(numbers);

// 14. concat - Combinar arrays
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log(combined);

// 15. join - Convertir el array en un string
const joined = numbers.join('-');
console.log(joined);

// 16. sort - Ordenar el array
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

// 17. reverse - Invertir el array
const reversed = numbers.reverse();
console.log(reversed);

// 18. includes - Verificar si un elemento está en el array
const hasThree = numbers.includes(3);
console.log(hasThree);