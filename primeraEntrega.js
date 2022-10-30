//! codigo reutilizable
alert("Bienvenido al sistema de Compra mi nombre es Gabriel y el tuyo")

let nombreComprador = prompt("ingresa tu nombre")

console.log(`Hola ${nombreComprador.toLowerCase()}`)

//!


const ArrayGaseosas = [];
const ArrayGalletas = [];
const Arrayfiambres = [];

class Productos {
    constructor(nombre, precio, calorias, tipo) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.calorias = calorias;
        this.tipo = tipo;
        this.vendido = false;
        this.cantidad = 0
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.cantidad +=1;
        this.vendido = true;
    }
    mostrarProducto() {
        console.log(`el producto ${this.nombre} y tiene las siguientes calorias ${this.calorias}`);
    }
}


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

const productoVendido = ArrayCarrito.filter((pro) => pro.vendido == true)

console.log(productoVendido)

//forEach para que el producto aplique un iva y luego acumule cantidad si se desea

productoVendido.forEach((num) => {
    num.precio = (num.precio * num.cantidad ) * 1.21
    console.log(`el producto ${num.nombre} tiene un valor de ${num.precio.toFixed()} `)
})



// que cuando este en true me cree un nuevo array con los vendidos
// probar una forma de usar reduce para sumar el precio.
let resultado = productoVendido.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio


console.log(`su total a pagar es de ${resultado.toFixed(1)}`);





//!ssssssssssss

let valorConTarjeta = 0;
let pagoTarjeta;

function formaDePagoTarjeta() {

    let pagoTarjeta = prompt("desea pagar con tarjeta")

    if (pagoTarjeta == `si`) {
        console.log("en cuantas cuotas desea pagar hasta un maximo de 12")
        for (let i = 1; i <= 12; i++) {

            console.log(`el recargo en ${i} cuota es de %${i+3}`)

            valorConTarjeta = resultado * (i + 3);
            valorConTarjeta = valorConTarjeta / 100;
            valorConTarjeta = valorConTarjeta + resultado;
            console.log(valorConTarjeta.toFixed(1));
            
        }
        cuota()
    } else if (pagoTarjeta =="no"){
        console.log(`usted paga ${resultado}`)
    }else {console.log("error")}

}



function cuota() {
    
    
    let cuotasApagar = parseInt(prompt("Elegir el numero de cuotas a pagar "));
    let cuotaCuenta = (cuotasApagar + 1) - 1
    for (let i = cuotasApagar; i <= cuotaCuenta; i++) {
        
        if (resultado) {
            valorConTarjeta = (resultado * (i + 3)) / 100
            valorConTarjeta = valorConTarjeta + resultado
            console.log(`Tu Total a pagar sera de ${valorConTarjeta.toFixed(1)}`)
        } else {
            alert("error")
        }
    }
}




formaDePagoTarjeta()

