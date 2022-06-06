alert('simulador para compra de albums calculando monto total y cuotas')

let v1 = 7900
let v2 = 19200
let v3 = 9000
let v4 = 11900
let d = 3500
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









while (compra) {
    switch (parseInt(prompt('Seleccione un producto: \n1: Tame impala - Lonerism \n2: Radiohead - In Rainbows \n3: Kornél Kovács - The Bells  \n4: Gustavo Cerati - Siempre Es Hoy \n5: Finalizar compra'))) {
        case 1:
            input = parseInt(prompt('Seleccione formato: \n1: Vinilo: $7900 \n2: Digital: $3500'));
            if (input == 1) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * v1);
                logv1 = cantidad;
                console.log(logv1);
                break;
            } else if (input == 2) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * d);
                logd1 = cantidad;
                console.log(total);
                break;
            }
        case 2:
            input = parseInt(prompt('Seleccione formato: \n1: Vinilo: $19200 \n2: Digital: $3500'));
            if (input == 1) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * v2);
                logv2 = cantidad;
                console.log(total);
                break;
            } else if (input == 2) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * d);
                logd2 = cantidad;
                console.log(total);
                break;
            }
        case 3:
            input = parseInt(prompt('Seleccione formato: \n1: Vinilo: $9000 \n2: Digital: $3500'));
            if (input == 1) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * v3);
                logv3 = cantidad;
                console.log(total);
                break;
            } else if (input == 2) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * d);
                logd3 = cantidad;
                console.log(total);
                break;
            }
        case 4:
            input = parseInt(prompt('Seleccione formato: \n1: Vinilo: $11900 \n2: Digital: $3500'));
            if (input == 1) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * v4);
                logv4 = cantidad;
                console.log(total);
                break;
            } else if (input == 2) {
                cantidad = parseInt(prompt('Seleccione cantidad:'))
                total = total + (cantidad * d);
                logd4 = cantidad;
                console.log(total);
                break;
            }
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
                }else if (input == 'no') {
                    alert('Total: ' + total + '\nGracias por su compra!');
                }else {
                    alert('codigo incorrecto!');
                }
            }
    }

}