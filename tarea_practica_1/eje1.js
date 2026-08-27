// =============================================================================================
// Tarea 1: Cálculo de Perímetro y Área de un Círculo
// Un círculo es una figura geométrica muy común en matemáticas e ingeniería. En esta
// tarea, usted necesita calcular dos propiedades importantes de un círculo: su perímetro
// (también llamado circunferencia) y su área.
// =============================================================================================

// Declaramos las variables del círculo
let radio = 9;
let pi = 3.14159;

// Calculamos el perímetro
let perimetro = (2 * pi * radio);

// Calculamos el área del círculo
let area = (pi * radio ** 2);

// Mostramos los resultados en consola
console.log("El radio del círculo es de: " + radio);
console.log("El perímetro o circunferencia del círculo es de: " + perimetro.toFixed(2));
console.log("El área del círculo es de: " + area.toFixed(2));