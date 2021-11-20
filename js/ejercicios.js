// Recibo los datos
let nombre = prompt('Cual es tu nombre?')
let edad = prompt('Cual es tu edad')


// Parseo y formateo
nombre = nombre.toLowerCase()
edad = Number(edad)





// console.log(nombre, typeof nombre);
// console.log(edad, typeof edad);


if (edad < 20 || edad > 40) {
    alert('Usted no puede estar en este sitio')
    // throw new Error('Es menor')
} else {
    alert('Bienvenidx ' + nombre)
}
