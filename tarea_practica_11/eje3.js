// Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
// Cree un arreglo de objetos que represente productos, donde cada objeto tenga nombre y precio (por ejemplo: { nombre: "Laptop", 
// precio: 800 }).

//     Use forEach para recorrer el arreglo y mostrar en consola el nombre y precio de cada producto.

//     Use filter para obtener un nuevo arreglo solo con los productos que cuesten más de $100.

//     Muestre el nuevo arreglo filtrado en consola.


// Creamos un catálogo de productos con su nombre y precio
const catalogoProductos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 60 },
    { nombre: "Monitor", precio: 180 },
    { nombre: "Audifonos", precio: 45 },
    { nombre: "Tablet", precio: 250 }
];

// Recorremos cada producto con forEach para mostrar su nombre y precio
console.log("TAREA 3: LISTA DE PRODUCTOS");

catalogoProductos.forEach((producto) => {
    console.log("Producto:", producto.nombre,
                "- Precio: $" + producto.precio);
});

// Filtramos los productos cuyo precio supera los $100
const productosConPrecioSuperior = catalogoProductos.filter((producto) => {
    return producto.precio > 100;
});

// Mostramos el listado final con los productos filtrados
console.log("\nPRODUCTOS CON PRECIO MAYOR A $100:");
console.log(productosConPrecioSuperior);
