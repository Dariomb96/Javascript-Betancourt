alert('simulador para compra de albums calculando monto total y cuotas')

const v1 = 7900
const v2 = 19200
const v3 = 9000
const v4 = 11900
const d = 3500
let total = 0
let compra = true
let logv1 = 0
let logd1 = 0
let logv2 = 0
let logd2 = 0
let logv3 = 0
let logd3 = 0
let logv4 = 0
let logd4 = 0
const TAME_IMPALA = 1
const RADIOHEAD = 2
const KORNEL_KOVACS = 3
const GUSTAVO_CERATI = 4

function agregarProducto(album, precio, formato) {
    cantidad = parseInt(prompt('Seleccione cantidad:'))
    total = total + (cantidad * precio);
    switch (album) {
        case TAME_IMPALA:
            if (formato == 1) { logv1 = cantidad; } else { logd1 = cantidad };
            break;
        case RADIOHEAD:
            if (formato == 1) { logv2 = cantidad; } else { logd2 = cantidad };
            break;
        case KORNEL_KOVACS:
            if (formato == 1) { logv3 = cantidad; } else { logd3 = cantidad };
            break;
        case GUSTAVO_CERATI:
            if (formato == 1) { logv4 = cantidad; } else { logd4 = cantidad };
            break;
    }
}

/*function producto2(selec, log){
    cantidad = parseInt(prompt('Seleccione cantidad:'))
    total = total + (cantidad * selec);
    log = cantidad;
}*/



while (compra) {
    let precio;
    switch (parseInt(prompt('Seleccione un producto: \n1: Tame impala - Lonerism \n2: Radiohead - In Rainbows \n3: Kornél Kovács - The Bells  \n4: Gustavo Cerati - Siempre Es Hoy \n5: Finalizar compra'))) {
        case 1:
            formato = parseInt(prompt('Seleccione formato: \n1: Vinilo: $7900 \n2: Digital: $3500'));
            if (formato == 1) {precio = v1} else {precio = d}
            agregarProducto(TAME_IMPALA, precio, formato);
            break;
        case 2:
            formato = parseInt(prompt('Seleccione formato: \n1: Vinilo: $19200 \n2: Digital: $3500'));
            if (formato == 1) {precio = v2} else {precio = d}
            agregarProducto(RADIOHEAD, precio, formato);
            break;
        case 3:
            formato = parseInt(prompt('Seleccione formato: \n1: Vinilo: $9000 \n2: Digital: $3500'));
            if (formato == 1) {precio = v3} else {precio = d}
            agregarProducto(KORNEL_KOVACS, precio, formato);
            break;
        case 4:
            formato = parseInt(prompt('Seleccione formato: \n1: Vinilo: $11900 \n2: Digital: $3500'));
            if (formato == 1) {precio = v4} else {precio = d}
            agregarProducto(GUSTAVO_CERATI, precio, formato);
            break;
        case 5:
            compra = false;
            while (input !== 'no') {
                alert('Carrito: \nTame impala - Lonerism:\nVinilo x' + logv1 + ' / Digital x' + logd1 + '\nRadiohead - In Rainbows\nVinilo x' + logv2 + ' / Digital x' + logd2 + '\nKornél Kovács - The Bells\nVinilo x' + logv3 + ' / Digital x' + logd3 + '\nGustavo Cerati - Siempre Es Hoy\nVinilo x' + logv4 + ' / Digital x' + logd4 + '\nTotal: ' + total)
                input = prompt('Aplicar codigo de descuento? (descuentito / descuento / descuentote), escribir no para omitir')
                if (input == 'descuentito') {
                    total = total - (total * 0.11);
                    alert('Codigo de 11% descuento aplicado, nuevo total: ' + total);
                    alert('Gracias por su compra!');
                    break;
                } else if (input == 'descuento') {
                    total = total - (total * 0.22);
                    alert('Codigo de 22% descuento aplicado, nuevo total: ' + total);
                    alert('Gracias por su compra!');
                    break;
                } else if (input == 'descuentote') {
                    total = total - (total * 0.33);
                    alert('Codigo de 33% descuento aplicado, nuevo total: ' + total);
                    alert('Gracias por su compra!');
                    break;
                } else if (input == 'no') {
                    alert('Total: ' + total + '\nGracias por su compra!');
                } else {
                    alert('codigo incorrecto!');
                }
            }
    }

}