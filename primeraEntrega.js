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


//Gaseosas  
const productoGaseosa1 = new Productos("cocacola", 320, 840, "gaseosa");
const productoGaseosa2 = new Productos("coca zero", 320, 0, "gaseosa");
const productoGaseosa3 = new Productos("pepsi", 230, 700, "gaseosa");
const productoGaseosa4 = new Productos("manaos", 110, 750, "gaseosa");

ArrayGaseosas.push(productoGaseosa1, productoGaseosa2, productoGaseosa3, productoGaseosa4)
//Galletas
const productoGalleta1 = new Productos("oreo", 130, 800, "galleta");
const productoGalleta2 = new Productos("pepitos", 150, 820, "galleta");
const productoGalleta3 = new Productos("don satur", 100, 500, "galleta");
const productoGalleta4 = new Productos("criollitas", 50, 100, "galleta");

ArrayGalletas.push(productoGalleta1, productoGalleta2, productoGalleta3, productoGalleta4)

//Fiambres
const productosFiambres1 = new Productos("salame", 600, 545, "fiambre");
const productosFiambres2 = new Productos("queso", 800, 945, "fiambre");
const productosFiambres3 = new Productos("jamon crudo", 900, 1045, "fiambre");
const productosFiambres4 = new Productos("jamon cocido", 400, 245, "fiambre");

Arrayfiambres.push(productosFiambres1, productosFiambres2, productosFiambres3, productosFiambres4)
ArrayCarrito = ArrayGalletas.concat(ArrayGaseosas, Arrayfiambres)

console.log(ArrayCarrito)

let venderProducto = prompt("ingresar producto que desea comprar \nCocacola\nCoca Zero\nPepsi\nManaos\nOreo\nPepitos\nDon Satur\nCriollitas\nSalame\nQueso\nJamon Crudo\nJamon Cocido")




while (venderProducto != "esc") {
    switch (venderProducto) {
        case "cocacola":
            productoGaseosa1.vender();
            console.log(`Sumo un producto Cocacola`)
            break;
        case "coca zero":
            productoGaseosa2.vender();
            console.log(`Sumo un producto Coca Zero`)

            break;
        case "pepsi":
            productoGaseosa3.vender();
            console.log(`Sumo un producto Pepsi`)

            break;
        case "manaos":
            productoGaseosa4.vender();
            console.log(`Sumo un producto Manaos`)

            break;
        case "oreo":
            productoGalleta1.vender();
            console.log(`Sumo un producto Oreo`)

            break;
        case "pepitos":
            productoGalleta2.vender();
            console.log(`Sumo un producto Pepitos`)

            break;
        case "don satur":
            productoGalleta3.vender();
            console.log(`Sumo un producto Don Satur`)

            break;
        case "criollitas":
            productoGalleta4.vender();
            console.log(`Sumo un producto Criollitas`)

            break;
        case "salame":
            productosFiambres1.vender();
            console.log(`Sumo un producto Salame`)

            break;
        case "queso":
            productosFiambres2.vender()
            console.log(`Sumo un producto Queso`)

            break;
        case "jamon crudo":
            productosFiambres3.vender()
            console.log(`Sumo un producto Jamon Crudo`)

            break;
        case "jamon cocido":
            productosFiambres4.vender()
            console.log(`Sumo un producto Jamon Cocido`)

            break;
    }
    venderProducto = prompt("Desea Seguir Comprando o escriba ESC para salir\nCocacola\nCoca Zero\nPepsi\nManaos\nOreo\nPepitos\nDon Satur\nCriollitas\nSalame\nQueso\nJamon Crudo\nJamon Cocido")
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

    pagoTarjeta = prompt("desea pagar con tarjeta")

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

