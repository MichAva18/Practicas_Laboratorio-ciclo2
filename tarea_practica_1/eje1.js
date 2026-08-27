// Tarea 1: Cálculo de Perímetro y Área de un Círculo
// Un círculo es una figura geométrica muy común en matemáticas e ingeniería. En esta
// tarea, usted necesita calcular dos propiedades importantes de un círculo: su perímetro
// (también llamado circunferencia) y su área.

let radio = 9;
let pi = 3.14159

let perimetro = (2 * pi *radio);
let area = (pi * radio **2);

console.log("El radio del círculo es de: " + radio);
console.log("El perímetro o circunferencia del círculo es de: " + perimetro.toFixed(2));
console.log("El área del círculo es de: " + area.toFixed(2));