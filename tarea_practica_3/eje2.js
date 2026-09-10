// Tarea 2: Comparar calificaciones
// Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta. 
// Si son iguales, indíquelo. Muestre un mensaje descriptivo con el resultado.

import readline from "node:readline";

const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question("Ingrese la primera calificación (0-100): ", (nota1)=>{
    rl.question("Ingrese la segunda calificación (0-100): ", (nota2)=>{

        let nota1N = parseFloat(nota1);
        let nota2N = parseFloat(nota2);

        if(nota1N < 0 || nota1N > 100 || nota2N < 0 || nota2N > 100){
            console.log("Las calificaciones deben ser números entre 0 y 100.");
        }else if(nota1N === nota2N){
            console.log(`La nota 1: ${nota1N} es igual a la nota2: ${nota2N}`);
        }else if(nota1N > nota2N){
            console.log(`La nota 1: ${nota1N} es mayor a la nota2: ${nota2N}`);
        }else{
             console.log(`La nota 1: ${nota1N} es menor a la nota2: ${nota2N}`);
        }
        
        rl.close();
    });
});
