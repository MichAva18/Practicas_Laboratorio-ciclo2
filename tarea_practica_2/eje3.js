// ====================================================================================
// Tarea 3: Calcular edad y años de experiencia
// Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y
// muestre: "Tu edad aproximada es: X años."
// ====================================================================================

// Importamos el módulo readline para poder recibir datos del usuario
import readline from "node:readline";

// Creamos la interfaz para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos al usuario que ingrese su año de nacimiento
rl.question("Ingrese su año de nacimiento: ", (añoNacimiento) => {

    // Creamos un objeto Date para obtener la fecha actual
    let fecha = new Date();

    // Obtenemos el año actual
    let año = fecha.getFullYear();

    // Calculamos la edad restando el año de nacimiento al año actual
    let edad = año - añoNacimiento;

    // Mostramos la edad calculada en consola
    console.log(`Su edad aproximada es de: ${edad} años.`);

    // Cerramos la interfaz de readline
    rl.close();
});