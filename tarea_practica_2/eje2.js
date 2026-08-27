// ========================================================================================
// Tarea 2: Información de producto con precio
// Solicite el nombre del producto, precio unitario y cantidad. Muestre el nombre
// en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio
// total con 2 decimales.
// ========================================================================================

// Importamos el módulo readline para poder recibir datos del usuario
import readline from "node:readline";

// Creamos la interfaz para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos al usuario el nombre del producto
rl.question("Ingrese el nombre del producto: ", (nombreProducto) => {

    // Solicitamos al usuario el precio unitario
    rl.question("Ingrese el precio unitario del producto: ", (precioIngresado) => {

        // Solicitamos al usuario la cantidad de productos
        rl.question("Ingrese la cantidad de productos: ", (cantidadIngresada) => {

            // Convertimos el nombre del producto a mayúsculas
            let nombreMayu = nombreProducto.toUpperCase();

            // Extraemos las primeras 3 letras del nombre del producto
            let primeras3Letras = nombreProducto.slice(0, 3);

            // Convertimos el precio ingresado de texto a número decimal
            let precioUni = parseFloat(precioIngresado);

            // Convertimos la cantidad ingresada de texto a número entero
            let cantProducto = parseInt(cantidadIngresada);

            // Calculamos el precio total
            let precioTotal = precioUni * cantProducto;

            // Mostramos los resultados en consola
            console.log(`El nombre del producto en mayúsculas es: ${nombreMayu}`);
            console.log(`Las primeras 3 letras del producto son: ${primeras3Letras}`);
            console.log(`El precio total de los productos es: $${precioTotal.toFixed(2)}`);

            // Cerramos la interfaz de readline
            rl.close();
        });
    });
});