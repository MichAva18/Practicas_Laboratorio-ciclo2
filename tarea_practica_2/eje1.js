// // ========================================================================================
// Tarea 1: Procesar nombre de usuario
// Solicite al usuario su nombre completo. Convierta el nombre a mayúsculas, extraiga las 
// primeras 4 letras y luego conviértalo a minúsculas. Muestre todos los resultados.
// ========================================================================================

// Importamos el módulo readline para poder recibir datos del usuario
import readline from "node:readline";

// Creamos la interfaz para entrada y salida de datos
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Solicitamos al usuario que ingrese su nombre completo
rl.question("Ingrese su nombre completo:", (nombreCom)=>{
    
    // Convertimos el nombre completo a minúsculas
    let nombreMin = nombreCom.toLowerCase()
    
    // Convertimos el nombre completo a mayúsculas
    let nombreMayu = nombreCom.toLocaleUpperCase()
    
    // Extraemos las primeras 4 letras del nombre
    let primeras4letras = nombreCom.slice(0,4);
 
    // Mostramos los resultados en consola
    console.log("Su nombre es mayusculas es: " +nombreMayu);
    console.log("Los ultimos 4 letras de su nombre son: " +primeras4letras);
    console.log("Su nombre es minusculas es: " +nombreMin);
    
    // Cerramos la interfaz de readline
    rl.close();

})

