// 5-Cálculo de edad: Solicite al usuario su año de nacimiento. Obtenga el año actual y calcule su edad.

let fecha = new Date();

let nacimiento = 2005;
let año = fecha.getFullYear();

let edad = año-nacimiento;

console.log("Su edad es: "+edad);
