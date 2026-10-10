// Tarea 3: Inventario de productos (FOR...OF y FOR...IN)
// Cree un arreglo de objetos que represente un inventario con al menos 4 productos. Cada producto debe tener: nombre, 
// precio y cantidad. Usando FOR...OF, recorra el arreglo y muestre cada producto con su valor total (precio × cantidad). 
// Además, usando FOR...IN, recorra un objeto que represente el resumen del inventario (total de productos, 
// valor total del inventario) y muestre sus propiedades.

import readline from "node:readline";

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const inventario = [];
const cantidadProductos = 4;

function pedirProducto() {
   const numeroProducto = inventario.length + 1;

   rl.question(`Ingrese el nombre del producto ${numeroProducto}: `, (nombre) => {
      if (nombre.trim() === "") {
         console.log("El nombre del producto no puede estar vacío.");
         pedirProducto();
         return;
      }

      rl.question(`Ingrese el precio de ${nombre}: `, (respuestaPrecio) => {
         const precio = Number(respuestaPrecio);

         if (isNaN(precio) || precio <= 0) {
            console.log("El precio debe ser un número mayor a 0.");
            pedirProducto();
            return;
         }

         pedirCantidad(nombre, precio);
      });
   });
}

function pedirCantidad(nombre, precio) {
   rl.question(`Ingrese la cantidad de ${nombre}: `, (respuestaCantidad) => {
      const cantidad = Number(respuestaCantidad);

      if (isNaN(cantidad) || cantidad <= 0) {
         console.log("La cantidad debe ser un número mayor a 0.");
         pedirCantidad(nombre, precio);
         return;
      }

      inventario.push({
         nombre: nombre,
         precio: precio,
         cantidad: cantidad
      });

      if (inventario.length < cantidadProductos) {
         pedirProducto();
      } else {
         mostrarInventario();
      }
   });
}

function mostrarInventario() {
   let valorTotalInventario = 0;

   console.log("\n=== Inventario de productos ===");
   for (const producto of inventario) {
      const valorProducto = producto.precio * producto.cantidad;
      valorTotalInventario += valorProducto;

      console.log(
         `${producto.nombre}: precio $${producto.precio}, cantidad ${producto.cantidad}, valor total $${valorProducto.toFixed(2)}`
      );
   }

   const resumen = {
      totalProductos: inventario.length,
      valorTotalInventario: valorTotalInventario
   };

   console.log("\n=== Resumen del inventario ===");
   for (const propiedad in resumen) {
      console.log(`${propiedad}: ${resumen[propiedad]}`);
   }

   rl.close();
}

pedirProducto();
