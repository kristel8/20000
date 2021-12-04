class Carrito {

    constructor( lista ) {
        this.lista = lista
    }

    listarItems() {
        // mostrarme todos sus items <> devolviendo this.lista
    }

    agregarItem( item ) {
        // Agregue el item al carrito <> agregar item a this.lista
    }

    getItem( item ) {
        // muestre el item <> encuentre el item en this.lista y lo devuelva
    }

    actualizarItem( item, itemActualizado ) {
        // Actualizar item a itemActualizado <> encuentre el item en this.lista y lo actualice con itemActualizado
    }

    eliminarItem( item ) {
        // Eliminar item <> encuentre el item en this.lista y eminarlo
    }

}

const carrito = new Carrito([])
console.log(carrito)

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    agotado() {
        this.stock = false;
    }
}
