//1.  capturo los botones
const allButtons = document.querySelector('.tv__buttons-left');
const tvImage = document.querySelector('.tv__image');
//2. creo la funcion
function cambiarCanal(e){
// cambio la URL de la foto
console.log(e.target.value)
tvImage.style.backgroundImage = `url("img/${e.target.value}")`;
}
//3. añado event listener y lanzo function

allButtons.addEventListener('click',cambiarCanal);


