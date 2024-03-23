// Obtener la referencia al elemento body
const body = document.querySelector('body');

// Bucle for para crear 10 párrafos
for (let i = 0; i < 10; i++) {
    // Crear un nuevo elemento párrafo
    const parrafo = document.createElement('p');
    // Añadir texto al párrafo
    parrafo.textContent = "Párrafo creado con un bucle for";
    // Asignar clase al párrafo para aplicar estilos
    parrafo.classList.add('parrafo');
    
    // Cambiar el fondo del párrafo cada iteración
    if (i === 2) {
        // Párrafo número 3 con fondo azul
        parrafo.style.backgroundColor = 'blue';
    } else {
        // Otros párrafos con fondo aleatorio
        parrafo.style.backgroundColor = getRandomColor();
    }

    // Añadir el párrafo al cuerpo del documento
    body.appendChild(parrafo);
}

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}