// Tarea 3: Cálculo de Consumo de Electricidad
// Una factura de electricidad es un documento que todos recibimos en nuestros hogares. En
// esta tarea, usted simulará el cálculo de una factura eléctrica, incluyendo impuestos, que
// es un proceso común en empresas de servicios.

let kilowatts = 300;
let precioPorKilowatt = 0.15;

let costoBase = (kilowatts * precioPorKilowatt);
let impuesto = (costoBase * 0.10);  
let costoTotal = (costoBase + impuesto);

console.log(`Consumo de: ${kilowatts}kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto del (10%): $${impuesto}`);
console.log(`Costo total a pagar: $${costoTotal}`);
