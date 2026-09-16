// Ejercicio Práctico 1: Sistema de calificación con bonificación
// Solicite al usuario su nombre, su calificación final (0-100) y si entregó todos los trabajos (si/no).
// Si la calificación es >= 90 y entregó todos los trabajos, su nota final se incrementa en 5 puntos (sin pasar de 100).
// Si la calificación es >= 70 pero < 90, y entregó todos los trabajos, su nota se incrementa en 3 puntos.
// Si la calificación es < 70, no hay bonificación.
// Muestre: nombre, calificación original, bonificación aplicada y calificación final.

import readline from "node:readline";

const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question("Ingrese de nombre: ",nombre =>{
    rl.question("Ingrese su calificacion: ",calificacion=>{
        rl.question("Entrego todo los trabajos (si/no): ",respuesta=>{
            let calificacionp = parseFloat(calificacion);
            respuesta1 = respuesta.toLowerCase()
            let bonificacion = 0
            if(calificacionp < 0 ||calificacionp > 100){
                console.log("La calificacion tiene que estar entre 0 y 100");
            }else{
                if(respuesta === "si"){
                    if(calificacionp >= 90){
                        bonificacion = 5
                    }else if(calificacion > 70){
                    bonificacion = 3
                }
                }
            }
            let notaF = calificacionp+bonificacion;
            if(notaF >100){
                notaF = 100
            }
            console.log("Sistema de Bonificacion");
            console.log(`\n Nombre: ${nombre} \n Clasificacion sin bonificacion: ${calificacionp} \n Su bonificacion es: ${bonificacion} \n Calificacion: ${notaF}`);
            
            rl.close();
        })
    })
})