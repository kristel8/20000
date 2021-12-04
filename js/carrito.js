class Carrito {

    constructor( lista ) {
        this.lista = lista;
    }

    findAllItems() {
        // mostrarme todos sus items <> devolviendo this.lista
        return this.lista;
    }

    createItem( item ) {
        // Agregue el item al carrito <> agregar item a this.lista
        this.lista.push( item )
    }

    findOneByIdItem( itemId ) {
        // muestre el item <> encuentre el item en this.lista y lo devuelva
        const item = this.lista.find( element => element.id === itemId )

        if ( !item ) {
            throw new Error('No existe el item id:' + itemId)
        }

        return item;
    }

    updateItem( itemId, cantidad ) {
        // Actualizar item a itemActualizado <> encuentre el item en this.lista y lo actualice con itemActualizado
        const item = this.findOneByIdItem( itemId );
        const index = this.lista.indexOf( item );
        this.lista[index].cantidad = cantidad;
        if( cantidad <= 0 ) {
            this.lista[index].stock = false
        }
        /*
        // ItemActualizado seria un nuevo objeto
        this.lista[index] = itemActualizado;
        this.lista[index].id = itemId;
        */
    }

    deleteItem( itemId ) {
        // Eliminar item <> encuentre el item en this.lista y eminarlo
        const item = this.findOneByIdItem( itemId );
        const index = this.lista.indexOf( item );
        this.lista.splice( index, 1 );
    }

}

class Producto {
    constructor(id, nombre, precio, cantidad, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
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

const producto1 = new Producto(1, 'Fernandito', 10, 100, true);
const producto2 = new Producto(2, 'Agua Mineral', 80, 50, true);
const producto3 = new Producto(3, 'Vodka', 1, 15000, true);


// Opcion 1, crear a partir de un array inicial
/*
const carrito = new Carrito(
    [ producto1, producto2, producto3 ]
)
 */

// Opcion 2, crear con un array vacio
const carrito = new Carrito([])

carrito.createItem( producto1 )
carrito.createItem( producto2 )
carrito.createItem( producto3 )

// obtener los items del carrito
console.log( carrito.findAllItems() )

// Crear un nuevo item
const producto4 = new Producto(4, 'Uvita fiesta', 50, 10,  true);
carrito.createItem( producto4 )

// obtener los items del carrito
console.log( carrito.findAllItems() )

// Obtener un item por id
// carrito.findOneByIdItem(4)

// Eliminar un item por id
carrito.deleteItem( 1 )

// obtener los items del carrito
console.log( carrito.findAllItems() )

// Modificar item (propiedad CANTIDAD)
// const updatedItem = new Producto(null, "Vodka", 1, 2000000, true )
carrito.updateItem(3, 0)

// obtener los items del carrito
console.log( carrito.findAllItems() )
