/**
 * Dado el array de peces
 */

let peces = ["Dory", "Nemo", "Estrella"];

/**
 * Modifica la primera posición del array 'peces'. Cambia a "Dory" por "Tory". 
 */
peces.splice(0,1,'Tory');
//la poscicion, y cuantos elementos eliminar, y cual reemplazara
console.log(peces); // ["Tory", "Nemo", "Estrella"]
