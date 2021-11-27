function createUser( email, nombre, apellido ) {

    const newUser = {
        email,
        nombre,
        apellido,
    }

    // console.log( 'Se creo el user: ' + JSON.stringify(newUser))
    return newUser
}

function registerUser() {
    const email = prompt('Email')
    const nombre = prompt('Nombre')
    const apellido = prompt('Apellido')

    createUser(email, nombre, apellido)
}

// registerUser()



const usuario1 = createUser('Ale@mail.com', 'Alejandro', '...uertas')
// console.log( usuario1 )

let resultado = 0

function sumar( num1, num2 ) {
    const resultado = num1 + num2
    return resultado
}

// console.log(resultado)

const result = sumar(2, 5)
// console.log(result)

// console.log(resultado)

function calculadora() {

    const num1 = +prompt('Ingrese un numero')
    const num2 = +prompt('Ingrese otro numero')
    const operacion = prompt('Ingrese la operacion')

    switch ( operacion ) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 0
    }

}

// console.log( calculadora() )


// FUNCIONES ANONIMAS

const saludar = function () {
    console.log('hola')
}

// FUNCIONES DE FLECHA
/*
const arrowFnSuma = (num1, num2) => {
    const result = num1 + num2
    return result
}
*/
const arrowFnSuma = (num1, num2) => num1 + num2

// console.log(arrowFnSuma(7, 3))

