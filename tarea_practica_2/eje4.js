// ========================================================================================
// Tarea 4: Información completa de fecha y hora
// Obtenga la fecha y hora actual. Muestre en formato: "Hoy es 26/8/2026 y son las 9:15:30"
// ========================================================================================

// Creamos un objeto Date para obtener la fecha y hora actual
let fecha = new Date();

// Obtenemos el día actual del mes
let dia = fecha.getDate();

// Obtenemos el mes actual
// Se suma 1 porque JavaScript cuenta los meses desde 0 hasta 11
let mes = fecha.getMonth() + 1;

// Obtenemos el año actual
let año = fecha.getFullYear();

// Obtenemos la hora actual
let hora = fecha.getHours();

// Obtenemos los minutos actuales
let minutos = fecha.getMinutes();

// Obtenemos los segundos actuales
let segundos = fecha.getSeconds();

// Mostramos la fecha y hora actual en consola
console.log(`Hoy es ${dia}/${mes}/${año} y son las ${hora}:${minutos}:${segundos}`);