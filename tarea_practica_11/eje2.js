// Tarea 2: Fábrica de funciones
// Cree una función de orden superior llamada crearMultiplicador que reciba un número (el factor) y devuelva una nueva 
// función que multiplique cualquier número por ese factor. Luego, cree un "duplicador" (factor 2) y un "triplicador" 
// (factor 3), y pruebe ambas funciones con un número para mostrar los resultados.


// TAREA 2: Fábrica de funciones

// Creamos una función de orden superior que recibe un factor y devuelve otra función
const crearMultiplicador = (factor) => {

    // Esta nueva función aplica el factor recibido al valor base
    return (valorBase) => valorBase * factor;
};

// Generamos una función para duplicar cualquier número
const duplicador = crearMultiplicador(2);

// Generamos una función para triplicar cualquier número
const triplicador = crearMultiplicador(3);

// Probamos ambas funciones con el número 5
const valorOriginal = 5;

// Mostramos los resultados en consola
console.log("FÁBRICA DE FUNCIONES");
console.log("Número original:", valorOriginal);
console.log("Resultado del duplicador:", duplicador(valorOriginal));
console.log("Resultado del triplicador:", triplicador(valorOriginal));
