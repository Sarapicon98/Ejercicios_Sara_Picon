// let premiumUser = true;

// if(premiumUser){
//     // esto se ejecuta si condition = true;
//     alert('no muestro publicidad');
// } else{
//     // eso se ejecuta si condition es =  false
//     console.log('compre calcetines mike');
// }

// console.log(premiumUser);

// crear un programa que dada una variable llamada mayorDeEdad si esta en verdadera muestre en consola "puedes acceder a la sala", si es falsa otro log que muestre "no puedes acceder, eres menor de edad".

// let mayorDeEdad = true;
// let mayorDe40 = true;
// const square = document.querySelector(".square");

// if (mayorDeEdad) {
//   // esto se ejecuta si condition = true;
//   square.classList.add("red");
// }
// else if (mayorDe40) {
//   // esto se ejecuta si condition = true;
//   square.innerHTML = "40";
// }
// else{
//     alert('nada se cumple');
// }

// ejercicio 2
// const numberOfCubatas = document.querySelector("input");
// const btn = document.querySelector("button");
// const result = document.querySelector(".result");

// btn.addEventListener("click", function () {
//   const cubatasDrinked = Number(numberOfCubatas.value);
//   const isNumber = cubatasDrinked / 2;

//   if (!isNaN(isNumber) && cubatasDrinked >= 0) {
//     if (cubatasDrinked == 0) {
//       result.innerHTML = "Vas fresco como una lechuga";
//     } else if (cubatasDrinked > 0 && cubatasDrinked < 4) {
//       result.innerHTML = "Llevas boca de alpargata";
//     } else if (cubatasDrinked >= 4 && cubatasDrinked < 8) {
//       result.innerHTML =
//         "Te quedas como un furby cuando ves al vecino en el ascensor";
//     } else if (cubatasDrinked >= 8 && cubatasDrinked < 10) {
//       result.innerHTML = "Mutas a albondiga";
//     } else {
//       result.innerHTML = "¿NECESITAS AYUDA?";
//     }
//   }
// });


// ejercicio 3
// FALSY VALUES - valors qye evaluan en false dentro de un if
// false (boolean)
// 0 evalua en false. El resto de números es true, incluso los negativos. Si es -0 es false.
// null evalua en false
// undefined 
// Nan
// ""

// truthy
// todos los demás


// // método switch
// const cubatasDrinked = 2;

// switch (cubatasDrinked){
//     case 0: console.log('he bebido 0 cubatas');
//     break;

//     case 1: console.log('he bebido un cubata');
//     break;

//     case 2: console.log('he bebido 2 cubatas');
//     break;

//     default:
//         console.log('he bebido muchos cubatas');
// }

// alternativa que hace lo mismo
// if (cubatasDrinked == 0){
//     console.log('he bebido 0 cubatas');
// }
// else if(cubatasDrinked == 1){
//     console.log('he bebido 1 cubata')
// }
// else if(cubatasDrinked == 2){
//     console.log('he bebido 2 cubatas')
// }
// else if(cubatasDrinked == 3){
//     console.log('he bebido 3 cubatas')
// }
// else{
//     console.log('he bebido muchos cubatas')
// }


// condicional ternario
const cubatasDrinked = 0;

(cubatasDrinked == 0) 
? console.log('he bebido 0 cubatas') // true
: console.log('he bebido muchos cubatas'); // false


