// 1. Crear un array con los nombres de los personajes principales de Matrix
const matrixCharacters = ["NEO", "TRINITY", "MORFEO"];

// 2. Mostrar datos en consola cuando se hace clic en cualquier parte de la página
const main = document.querySelector('.content_main');
const subtitle = document.querySelector('.content__sub');
main.innerHTML = matrixCharacters[0] + 
                " + " + matrixCharacters[1] +
                " + " + matrixCharacters[2];

subtitle.innerHTML = "We live in matrix simulation";

