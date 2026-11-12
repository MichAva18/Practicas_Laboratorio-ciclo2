// Tarea 1: Acumulación con reduce
// Cree un arreglo con las notas de un estudiante (por ejemplo: 8, 7, 9, 6, 10). Utilice el método reduce para calcular el 
// promedio de las notas. Muestre el resultado en consola con 2 decimales.

// Creamos un arreglo con las notas del estudiante
const notasEstudiante = [8, 7, 9, 6, 10];

// Utilizamos reduce para sumar todas las notas
const totalNotas = notasEstudiante.reduce((acumulador, nota) => {
    return acumulador + nota;
}, 0);

// Calculamos el promedio dividiendo la suma entre la cantidad de notas
const promedioNotas = totalNotas / notasEstudiante.length;

// Mostramos el resultado con dos decimales
console.log("TAREA 1: PROMEDIO DE NOTAS");
console.log("Notas:", notasEstudiante);
console.log("Suma de notas:", totalNotas);
console.log("Promedio:", promedioNotas.toFixed(2));
