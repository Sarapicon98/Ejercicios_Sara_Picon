// Creo array con fotos de Matrix
const matrixphotos = ["morpheo.webp", "neo.jpg", "trinity.jpeg"];



// capturo el selector:

const matrixSelector = document.querySelector('#mselect');
const showphoto = document.querySelector('.show-photo');


// creo evento para detectar el cambio
matrixSelector.addEventListener('input', selectPhoto);

// defino funcion que extraerá el value de cada opcion
function selectPhoto(e){
    console.log("url("+e.target.value+")");
    showphoto.style.backgroundImage= "url(img/"+e.target.value+")";
}
