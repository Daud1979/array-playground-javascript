// // let numeros = [1, 20, -10, 3, 0, 30, - 1, 3, - 7];
// // numeros.forEach((x)=>{
// // //     return x>0;
// // // })
// // // let resultado=numeros.filter((x)=> x>0);

// // // console.log(resultado);

// // let nombres = ['Oscar', 'Max', 'Ana', 'Pepe', 'Pau', 'Vanessa', 'Xavi'];

// // // Utilizo map para saludar a cada una de estas personas
// // let saludos = nombres.map((nombre) => {
// //     return 'Hola ' + nombre;
// // })
// // console.log(saludos);

// let usuarios = [{
//     nombre: 'Pepe',
//     edad: 30
// }, {
//     nombre: 'Maria',
//     edad: 45
// }, {
//     nombre: "Paco",
//     edad: 19
// }]

// // ordenemos el array de usuarios por edad, de manera creciente.
// // console.log(usuarios);
// a=usuarios;
// b=usuarios;
// let resultados=usuarios.sort( (a,b) => {
//     if (a.edad>b.edad){
//         return 1;
//     }

//     if (a.edad<b.edad) {
//         return -1;
//     }

//     return 0;
// })
// console.log(resultados);
let numerosPeque = [1, 2, 3];
let resultado = numerosPeque.reduce((valor, suma)=>{
    return suma+valor;
});
console.log(resultado);