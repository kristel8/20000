const persona = {
    nombre: 'Otar',
    edad: 25,

    saludar: () => {
        console.log('Hola')
    }
}

// persona.saludar()
// console.log( persona )

// Agregar una nueva propiedad
persona.nacionalidad = 'Madre Rusia'

// console.log( persona )

// Acceder a las propiedades
// console.log( persona.domicilio )
// console.log( persona['nombre'] )

// eliminar una propiedad
delete persona.edad

// console.log( persona )


// Funciones contructoras
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Clases
class Usuario {

    // Metodo constructor de la clase
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }

    cumpleAnos() {
        // this.edad += 1;
        this.edad = this.edad + 1;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }


}

const usr1 = new Usuario('Otar', 30)
console.log(usr1)
usr1.saludar()
console.log( usr1.getEdad() )
usr1.cumpleAnos()
console.log( usr1.getEdad() )
usr1.setEdad(122)
console.log( usr1.getEdad() )


// Creo nuevas instancias (objetos) de la funcion contructora (otro objeto)
const persona1 = new Persona('Otar', 30)
const persona2 = new Persona('Matias', 25)

// console.log(persona1)
// console.log(persona2)

// Crear un objeto a partir de Object
// const obj1 = new Object({ nombre: 'Matias'})
// console.log( obj1 )


// METODOS COMUNES

// Clonar un objeto
const alumno = Object.assign({camada: 20000}, persona)

// console.log( alumno )
// console.log( persona )

// Obtener pares clave valor
const entries = Object.entries(persona)

// console.log( entries )

// Obtener keys
const keys = Object.getOwnPropertyNames(persona)
// console.log( keys )

const values = Object.values(persona)
// console.log(values)
