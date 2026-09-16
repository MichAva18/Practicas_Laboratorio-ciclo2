// Ejercicio Práctico 2: Clasificador de triángulos

// Solicite las longitudes de los tres lados de un triángulo.

//     Primero valide que los lados puedan formar un triángulo (la suma de dos lados debe ser mayor que el tercero).
//     Si es válido, clasifíquelo usando Switch según su tipo: Equilátero (tres lados iguales), Isósceles (dos lados iguales) o Escaleno (tres lados diferentes).

// Muestre: el tipo de triángulo y su perímetro.

import readline from "node:readline";

const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question("Ingrese el primer lado: ", (lado1) => {
    rl.question("Ingrese el segundo lado: ", (lado2) => {
        rl.question("Ingrese el tercer lado: ", (lado3) => {
            let lado1P = parseFloat(lado1);
            let lado2P = parseFloat(lado2);
            let lado3P = parseFloat(lado3);

            if (lado1P <= 0 || lado2P <= 0 || lado3P <= 0 ||
                Number.isNaN(lado1P) || Number.isNaN(lado2P) || Number.isNaN(lado3P)) {
                console.log(`Los lados deben ser numeros mayores que 0.`);
                rl.close();
                return;
            }

            if (lado1P + lado2P <= lado3P ||
                lado1P + lado3P <= lado2P ||
                lado2P + lado3P <= lado1P) {
                console.log(`Los lados no pueden formar un triangulo.`);
                rl.close();
                return;
            }

            let tipo;
            let claveTipo;

            if (lado1P === lado2P && lado2P === lado3P) {
                claveTipo = 1;
            } else if (lado1P === lado2P || lado1P === lado3P || lado2P === lado3P) {
                claveTipo = 2;
            } else {
                claveTipo = 3;
            }

            switch (claveTipo) {
                case 1:
                    tipo = `Equilatero`;
                    break;
                case 2:
                    tipo = `Isosceles`;
                    break;
                case 3:
                    tipo = `Escaleno`;
                    break;
            }

            let perimetro = lado1P + lado2P + lado3P;

            console.log(`Tipo de triangulo: ${tipo}`);
            console.log(`Perimetro: ${perimetro}`);

            rl.close();
        });
    });
});

