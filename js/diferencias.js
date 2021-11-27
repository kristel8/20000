function ejemploContextos() {

    // aca hacemos referencia al this global window
    this.figura = 'triangulo'
    this.color = 'rojo'

    // creamos la funcion para generar un contexto, al cual veremos como acceden las funciones
    function FiguraGeoClass() {
        this.figura = 'rectangulo'
        this.color = 'verde'
    }

    // Crea una instancia de la funcion creada arriba
    let figura = new FiguraGeoClass()

    // Crear la funcion para obtener this.figura
    let getFigura = function () {
        return this.figura
    }

    // Agrego la nueva propiedad creada con el operador function
    figura.getFigura = getFigura;

    // Crea una funcion de flecha para acceder al this.color
    let getColor = () => {
        return this.color
    }

    // Agrego la nueva propiedad con la arrow function
    figura.getColor = getColor;

    console.log( getFigura() )
    console.log( getColor() )
    console.log( figura.getFigura() )
    console.log( figura.getColor() )

}

ejemploContextos()
