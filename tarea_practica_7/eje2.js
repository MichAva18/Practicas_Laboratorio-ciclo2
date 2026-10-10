// Tarea 2: Cajero automático mejorado (DO...WHILE)
// Cree un cajero con saldo inicial de $1000. El menú debe repetirse hasta que el usuario salga:
// 1) Consultar saldo, 2) Retirar, 3) Depositar, 4) Salir.
// Valide que los retiros no excedan el saldo y que los depósitos sean mayores a 0.
// Use Switch y DO...WHILE.

import readline from "node:readline";

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let saldo = 1000;

function mostrarMenu() {
   console.log("\n=== Cajero automático ===");
   console.log("1. Consultar saldo");
   console.log("2. Retirar dinero");
   console.log("3. Depositar dinero");
   console.log("4. Salir");

   rl.question("Seleccione una opción: ", (respuesta) => {
      const opcion = Number(respuesta);

      switch (opcion) {
         case 1:
            console.log(`Su saldo actual es: $${saldo}`);
            mostrarMenu();
            break;
         case 2:
            rl.question("Ingrese el monto a retirar: ", (respuestaRetiro) => {
               const montoRetiro = Number(respuestaRetiro);

               if (isNaN(montoRetiro) || montoRetiro <= 0) {
                  console.log("El monto debe ser mayor a 0.");
               } else if (montoRetiro > saldo) {
                  console.log("No tiene suficiente saldo.");
               } else {
                  saldo -= montoRetiro;
                  console.log(`Retiro exitoso. Su saldo actual es: $${saldo}`);
               }

               mostrarMenu();
            });
            break;
         case 3:
            rl.question("Ingrese el monto a depositar: ", (respuestaDeposito) => {
               const montoDeposito = Number(respuestaDeposito);

               if (isNaN(montoDeposito) || montoDeposito <= 0) {
                  console.log("El monto debe ser mayor a 0.");
               } else {
                  saldo += montoDeposito;
                  console.log(`Depósito exitoso. Su saldo actual es: $${saldo}`);
               }

               mostrarMenu();
            });
            break;
         case 4:
            console.log("Gracias por usar el cajero automático.");
            rl.close();
            break;
         default:
            console.log("Opción no válida.");
            mostrarMenu();
            break;
      }
   });
}

mostrarMenu();
