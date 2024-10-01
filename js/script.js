// 1. Posicionarse en el contenedorCartas

const contenedorCartas = document.querySelector('#contenedorCartas');
const contenedorCartas2 = document.getElementById('contenedorCartas');

// 1)Mostrar por consola: su primer hijo
const primerHijo = contenedorCartas.firstElementChild;
console.log("El primer hijo es: ",primerHijo);

// 2) Su tercer hijo
const tercerHijo = contenedorCartas.children[2];
console.log("El tercer hijo es: ",tercerHijo);

// 3) El siguiente hermano del tercer hijo
const siguienteHermanoTercerHijo = tercerHijo.nextElementSibling
console.log("El siguiente hermano del tercer hijo es: ",siguienteHermanoTercerHijo);

// 4) Su último hijo
const ultimoHijo = contenedorCartas.lastElementChild;
console.log("El ultimo hijo es: ",ultimoHijo);

// 5) Su padre
const padre = contenedorCartas.parentElement;
console.log("El padre es: ",padre);


// 6) El padre del padre

const padreDelPadre = contenedorCartas.parentElement.parentElement;
console.log("El padre del padre es: ",padreDelPadre);


// 7) Su hermano anterior

const hermanoAnterior = contenedorCartas.previousElementSibling;
console.log("El hermano anterior es: ",hermanoAnterior);

// 8) Las clases del último hijo

const clasesDelPrimerHijo = primerHijo.classList;
console.log("Las clases del primer hijo son: ",clasesDelPrimerHijo);

