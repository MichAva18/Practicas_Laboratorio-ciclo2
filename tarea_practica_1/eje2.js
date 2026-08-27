// Tarea 2: Conversión de Monedas
// En el mundo globalizado en el que vivimos, es común necesitar convertir dinero de una
// moneda a otra. Esta tarea le enseña cómo utilizar operadores matemáticos para realizar
// conversiones de monedas de forma automatizada.

let dolar = 100;

let EUR = dolar * 0.92;
let SVC = dolar * 8.75;
let GTQ = dolar * 7.80;

console.log(`${dolar} USD = ${EUR.toFixed(2)} EUR`);
console.log(`${dolar} USD = ${SVC.toFixed(2)} SVC`);
console.log(`${dolar} USD = ${GTQ.toFixed(2)} GTQ`);