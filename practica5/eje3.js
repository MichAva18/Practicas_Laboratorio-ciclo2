// Ejercicio Práctico 3: Sistema de tarifas de estacionamiento

// Solicite el tipo de vehículo (1=Moto, 2=Auto, 3=Camioneta, 4=Bus) y la cantidad de horas estacionado.

//     Calcule la tarifa base según el tipo de vehículo usando Switch: Moto $1.00/hora, Auto $2.00/hora, Camioneta $3.00/hora, Bus $5.00/hora.
//     Aplique un descuento del 20% si el vehículo estuvo más de 5 horas.
//     Si el tipo de vehículo no es válido, muestre un mensaje de error.

// Muestre: tipo de vehículo, horas, tarifa por hora, subtotal, descuento y total.

import readline from "node:readline";

const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

console.log(`ESTACIONAMIENTO\n`);
console.log(`Moto \nAuto \nCamioneta \nBus`);

rl.question("Ingrese su tipo de vehiculo (1 / 4): ", (opcion) => {
    rl.question("Ingrese las horas de estacionamiento: ", (horas) => {

        let opcionI = parseInt(opcion);
        let horasP = parseFloat(horas);
        let tarifa;
        let tipoVehiculo = ''

        switch (opcionI) {
            case 1:
                tarifa = 1;
                tipoVehiculo = 'Moto';
                break
            case 2:
                tarifa = 2;
                tipoVehiculo = 'Auto';
                break
            case 3:
                tarifa = 3;
                tipoVehiculo = 'Camioneta';
                break
            case 4:
                tarifa = 5;
                tipoVehiculo = 'Bus';
                break
            default:
                console.log(`¡¡OPCION NO VALIDA!!`);
                rl.close();
                return;
                    
        }
        if(horasP <= 0 || Number.isNaN(horasP)){
            console.log(`La cantidad de horas debe ser mayor que 0.`);
            rl.close();
            return;
        }

        if(tarifa > 0){
            let subtotal = horasP * tarifa;
            let descuento = 0;

            if(horasP > 5){
                descuento = subtotal * 0.20;
            }

            let total = subtotal - descuento;

            console.log(`\n`);
            console.log(`Factura \n--------------`);
            console.log(`Tipo de vehiculo: ${tipoVehiculo}\nHoras de parqueo: ${horasP}\nTarifa por horas: ${tarifa}\nSubtotal: ${subtotal}\nDescuento: ${descuento.toFixed(2)}\nTotal: ${total.toFixed(2)}`);
            
            
        }

        rl.close();
    })
})

