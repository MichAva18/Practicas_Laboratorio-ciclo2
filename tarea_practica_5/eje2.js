// Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
// lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".

import readline from "node:readline";

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("Ingrese el primer número: ", (numeroA) => {
   const a = Number(numeroA);

   rl.question("Ingrese el segundo número: ", (numeroB) => {
      const b = Number(numeroB);

      rl.question("Ingrese el tercer número: ", (numeroC) => {
         const c = Number(numeroC);
         let mensaje = "";

         if (a === b && b === c) {
            mensaje = "Los tres números son iguales";
         } else if (a !== b && b !== c && a !== c) {
            mensaje = "Los tres números son diferentes";
         } else {
            mensaje = "Hay dos números iguales";
         }

         const mayor = Math.max(a, b, c);
         const menor = Math.min(a, b, c);

         console.log(mensaje);
         console.log(`El número mayor es: ${mayor} \nEl número menor es: ${menor}`);
         console.log(`El número menor es: ${menor}`);

         if (a < 0 || b < 0 || c < 0) {
            console.log("Hay números negativos");
         }

         rl.close();
      });
   });
});

