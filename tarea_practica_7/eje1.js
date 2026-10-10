// Tarea 1: Adivinar el número secreto (WHILE)
// Genere un número secreto entre 1 y 50 usando Math.floor(Math.random() * 50) + 1. Usando un bucle WHILE, 
// solicite al usuario adivinar el número. En cada intento, indique si el número es mayor o menor que el secreto. 
// Cuente los intentos y muéstrelos al final.

import readline from "node:readline";

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const secreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;

function adivinar() {
   rl.question("Adivina el número secreto (1 - 50): ", (respuesta) => {
      const numero = Number(respuesta);

      if (isNaN(numero) || numero < 1 || numero > 50) {
         console.log("Ingresa un número válido entre 1 y 50.");
         adivinar();
         return;
      }

      intentos++;

      if (numero < secreto) {
         console.log("El número secreto es MAYOR.");
         adivinar();
      } else if (numero > secreto) {
         console.log("El número secreto es MENOR.");
         adivinar();
      } else {
         console.log("¡Correcto! Adivinaste el número.");
         console.log("Número de intentos:", intentos);
         rl.close();
      }
   });
}

adivinar();
