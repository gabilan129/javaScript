alert("Bienvenido al sistema de Compra mi nombre es Gabriel y el tuyo")

let nombreComprador = prompt("ingresa tu nombre")

console.log(`Hola ${nombreComprador.toLowerCase()}`)



function elegirProductos() { // funcio que le pide al usuario que ingrese los productos de una lista para que se agregen a la lista


    valor = 0;
    let producto = prompt("Ingrese un producto a comprar \nCocacola \nPepsi \nCarne \nPollo \nArroz \nHelado");
    while (producto.toLocaleLowerCase() != `esc`) {

        switch (producto.toLowerCase()) {
            case "cocacola":
                console.log("el valor de la Cocacola es de $320");
                valor = valor + 320;
                break;
            case "pepsi":
                console.log("el valor de la Pepsi es de $220");
                valor = valor + 220;
                break;
            case "pollo":
                console.log("el valor de la pollo es de $620");
                valor = valor + 620;
                break;
            case "carne":
                console.log("el valor de la carne es de $950");
                valor = valor + 950;
                break;
            case "arroz":
                console.log("el valor de la arroz es de $120");
                valor = valor + 120;
                break;
            case "helado":
                console.log("el valor de la helado es de $1220");
                valor = valor + 1220;
                break;

            default:
                alert(`ingreso un caracter no valido`);

        }




        producto = prompt(`desea agregar otro producto a la lista \nCocacola \nPepsi \nPollo \Carne \nArroz \nHelado \nademas de su ultimo producto que fue ${producto} En caso de no querer seguir comprando escribir ESC `);

    }


}




let valor = 0;
let valorIva = 0;


function aplicarIva() { //funcion que si la compra supera el valor a 1000 aplicara el iva



    console.log(`el valor total de la lista de los productos es de $${valor}`)

    if (valor > 1000) {
        valorIva = valor * 1.21

        console.log(` como la compra supera los $1000 se aplica el iva \n el valor con iva es de ${valorIva.toFixed(1)} `)

    } else {
        console.log(`el valor es de $${valor} no se le aplicara IVA`)
    }

}





let valorConTarjeta = 0;

function formaDePagoTarjeta() {

    let pagoTarjeta = prompt("desea pagar con tarjeta")

    if (pagoTarjeta == `si`) {
        console.log("en cuantas cuotas desea pagar hasta un maximo de 12")
        cuota()
        for (let i = 1; i <= 12; i++) {
            if (valor < 1000) {
                console.log(`el recargo en ${i} cuota es de %${i+3}`)

                valorConTarjeta = valor * (i + 3);
                valorConTarjeta = valorConTarjeta / 100;
                valorConTarjeta = valorConTarjeta + valor;
                console.log(valorConTarjeta.toFixed(1));

                // console.log(valor)
            } else if (valor > 1000) {
                console.log(`el recargo en ${i} cuota es de %${i+3}`)
                valorConTarjeta = valorIva * (i + 3);
                valorConTarjeta = valorConTarjeta / 100;
                valorConTarjeta = valorConTarjeta + valorIva;
                console.log(valorConTarjeta.toFixed(1));
            } else {
                console.log("error")
            }
        }

    } else {
        if (valor < 1000) {

            console.log(`el valor en efectivo es de ${valor}`)
        } else {
            console.log(`el valor es de ${valorIva}`)
        }
    }

}



elegirProductos();
aplicarIva();
formaDePagoTarjeta();


// ! prueba de eleccion de cuotas //////////////////////////

function cuota() {


    let cuotasApagar = parseInt(prompt("Elegir el numero de cuotas a pagar "));
    let cuotaCuenta = (cuotasApagar + 1) - 1
    for (let i = cuotasApagar; i <= cuotaCuenta; i++) {

        if (valor < 1000) {
            valorConTarjeta = (valor * (i + 3)) / 100
            valorConTarjeta = valorConTarjeta + valor
            console.log(`Tu Total a pagar sera de ${valorConTarjeta}`)
        } else if (valor > 1000) {

            valorConTarjeta = (valorIva * (i + 3)) / 100
            valorConTarjeta = valorConTarjeta + valorIva
            console.log(`Tu Total a pagar sera de ${valorConTarjeta}`)

        } else {alert("error")}
    }
}

/////////////////////////////////////////////////////////

