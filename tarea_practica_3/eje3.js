// Tarea 3: Descuento por monto de compra
// Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento. S
// i es mayor a $50, aplique 10%. En otro caso, no hay descuento. Muestre el monto original, 
// el descuento aplicado y el total a pagar con 2 decimales.

import readline from "node:readline";

const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question("Ingrese su monto de compra: ", (compra)=>{

    let compraNum = parseFloat(compra);

    if(compraNum > 100){
        
    let descuento = (compraNum * 0.15);
    let compraT = (compraNum - descuento);
    console.log(`El monto original es de: ${compraNum}\nDescuento aplicado: 15% \nTotal a pagar es de: ${compraT.toFixed(2)}`);
    
    }else if(compraNum > 50){
             
    let descuento = (compraNum * 0.10);
    let compraT = (compraNum - descuento);
    console.log(`El monto original es de: ${compraNum}\nDescuento aplicado: 10% \nTotal a pagar es de: ${compraT.toFixed(2)}`);
    
    }else{
      console.log(`El monto original es de: ${compraNum}\nDescuento aplicado: 0% \nTotal a pagar es de: ${compraNum.toFixed(2)}`);
    }

    rl.close();
});