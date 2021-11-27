
const frutas = ['manzana', 'naranja', 'anana']

// console.log(frutas.length)

/*
for (let i = 0; i < frutas.length; i++) {
    // listar las frutas
    console.log( frutas[i] )
}
*/

/*
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}
*/

/*
const numerosAleatorios = [ 823, 923, 12, 92384832, 0, 723, 92938]

for (let i = 0; i < numerosAleatorios.length; i++) {



    if ( numerosAleatorios[i] === 12 ) {
        alert('Encontraste el 12!!')
        break
    }

    console.log(numerosAleatorios[i])

}
*/

const pelis = [
    { titulo: '1', genero: 'terror' },
    { titulo: '2', genero: 'comedia' },
    { titulo: '3', genero: 'terror' },
    { titulo: '4', genero: 'comedia' },
    { titulo: '5', genero: 'terror' },
    { titulo: '6', genero: 'accion' },
]
/*

for (let i = 0; i < pelis.length; i++) {

    if ( pelis[i]['genero'] === 'terror' ) {
        continue
    }

    console.log( pelis[i]['titulo'] )
}
*/

// WHILE
/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while( entrada !== "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

console.log(' SALIO del WHILE ')
*/

// DO... WHILE
/*
let repetir = false;
do {
    console.log( '¡Solo una vez!' );
} while( repetir )
*/

// EJ: LOGIN
/*
let password = prompt("Ingrese la contraseña");
while ( password !== '123456') {
    alert('Credenciales invalidas')
    password = prompt("Ingrese la contraseña");
}

alert('Bienvenidx!')
*/


// SWITCH

let entrada = prompt('Que desea comer?').toUpperCase()

while (entrada !== 'ESC') {

    switch ( entrada ) {

        case "pizza":
            alert('Son $800')
            break
        case "empanadas":
            alert('Son $1000')
            break
        default:
            alert('Aca solo comemos pizza y empandas')
            break
    }

    entrada = prompt('Que desea comer?')

}

















