const arr = new Array()

// declaracion de un array vacio
const arr1 = []

// crear una lista de frutas
const frutas = [ 'manzana', 'naranja', 'anana' ]

const personas = [
    { nombre: 'Otar', edad: 30 }, // 0
    { nombre: 'Lautaro', edad: 20 }, // 1
]

// length indica la cantidad de elementos que posee el array
// console.log(personas.length)

// iteracion de una lista con for
/*
for ( let i = 0; i < personas.length; i++ ) {
    console.log( personas[i] )
}
*/

// iteracion de una lista con for ... of
/*
for ( const persona of personas ) {
    console.log( persona )
}
*/

console.log( frutas )

// METODOS COMUNES DE LOS ARRAYS
frutas.forEach( ( elemento, indice, array ) => {
    // console.log(elemento, indice, array)
} )

// Agregar elementos al array
// Al final del array
frutas.push( 'kiwi' )

// Al principio
frutas.unshift( 'melon' )

console.log( frutas )

// Eliminar el ultimo elemento
frutas.pop()

console.log( frutas )

// Eliminar un elemento del array | a partir de que posición, cuántos elementos
frutas.splice( 1, 2)
console.log(frutas)

// conocer el indice de un elemento | devuelve -1 si no existe
console.log(frutas.indexOf('melon'))

console.log( frutas.toString() )

console.log( frutas.join(';'))

const verduras = [ 'zanahoria', 'lechuga']

console.log( frutas.concat(verduras) )
