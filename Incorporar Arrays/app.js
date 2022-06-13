alert('simulador para compra de albums calculando monto total y cuotas')

class producto {
    constructor(id, artista, stockd, stockv, preciod, preciov) {
        this.id = id;
        this.artista = artista;
        this.stockd = stockd;
        this.stockv = stockv;
        this.preciod = preciod;
        this.preciov = preciov;
    }
}

let productosEnVenta = [];

productosEnVenta.push(new producto(1, 'Tame Impala', 20, 5, 3500, 7900));
productosEnVenta.push(new producto(2, 'Radiohead', 20, 5, 3500, 19200));
productosEnVenta.push(new producto(3, 'Kornvel kovacs', 20, 5, 3500, 9000));
productosEnVenta.push(new producto(4, 'Gustavo Cerati', 20, 5, 3500, 11900));

const carrito = []; //constante para proximamente armar un carrito de compra con detalles de cada producto

let total = 0; // precio total del carrito
let cantidad = 0; // cantidad a comprar para el formato elegido
let formato = 0; // formato de album elegido (digital o vinilo)

function agregarProducto(id){
    formato = parseInt(prompt(`Artista: ${productosEnVenta[id].artista} \n1. Precio digital: $${productosEnVenta[id].preciod} \n2. Precio vinilo: $${productosEnVenta[id].preciov}\nSeleccione formato 1 o 2`));
    if (formato == 1) {
        let cantidad = prompt(`Actualmente hay ${productosEnVenta[id].stockd} en stock. \nSeleccione la cantidad deseada`)
        if (productosEnVenta[id].stockd > cantidad) {
            total = total + (cantidad * productosEnVenta[id].preciod);
            productosEnVenta[id].stockd = productosEnVenta[id].stockd - cantidad;
        } else { alert('No hay stock') }
    } else if (formato == 2) {
        let cantidad = prompt(`Actualmente hay ${productosEnVenta[id].stockv} en stock. \nSeleccione la cantidad deseada`)
        if (productosEnVenta[id].stockv > cantidad) {
            total = total + (cantidad * productosEnVenta[id].preciov);
            productosEnVenta[id].stockv = productosEnVenta[id].stockv - cantidad;
        } else { alert('No hay stock') }
    }
}

const comprar = () => {
    for (let comprando = 1; comprando < 2; comprando = prompt('Total: $' + total + '\nQuiere continuar su compra?\n1: Continuar\n2: Terminar')) {
        switch (parseInt(prompt('Seleccione un producto: \n1: Tame impala - Lonerism \n2: Radiohead - In Rainbows \n3: Kornél Kovács - The Bells  \n4: Gustavo Cerati - Siempre Es Hoy'))) {
            case 1: agregarProducto(0);
                    break;
            case 2: agregarProducto(1);
                    break;
            case 3: agregarProducto(2);
                    break;
            case 4: agregarProducto(3);
                    break;
        }
    }
}

comprar();