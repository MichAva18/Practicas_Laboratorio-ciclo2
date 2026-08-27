// =============================================================================================// 
// Tarea 3: Cálculo de Consumo de Electricidad
// Una factura de electricidad es un documento que todos recibimos en nuestros hogares. En
// esta tarea, usted simulará el cálculo de una factura eléctrica, incluyendo impuestos, que
// es un proceso común en empresas de servicios.
// =============================================================================================

// Declaramos el consumo de kilowatts y el precio por kilowatt
let kilowatts = 300;
let precioPorKilowatt = 0.15;

// Calculamos el costo base sin impuestos
let costoBase = kilowatts * precioPorKilowatt;

// Calculamos el impuesto del 10%
let impuesto = costoBase * 0.10;

// Calculamos el costo total sumando el impuesto
let costoTotal = costoBase + impuesto;

// Mostramos el resumen de la factura en consola
console.log(`Consumo: ${kilowatts} kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);
