

class Productos{

    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("Datos de Productos a vender");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Disponibilidad: ", this.stock);
    }

    get_stock(){
        if (this.stock < 2){
            console.log ("Falta de Stock")
        }
    }

    venta_stock(){
        if(this.stock >= cantidad){
            console.log ("Venta Realizada con exito");
            this.stock = this.stock - cantidad;
            console.log (this.stock);
        }
        else{
            console.log ("No hay disponibilidad de stock actualmente")
        }
    }

}


let motor = new Productos ("Motor Audi A5", 18000 , 2);
let ruedas = new Productos ("Ruedas Audi A5", 5000 , 4);
let llantas = new Productos ("Llantas Audi A5", 2000 , 4);
let luces = new Productos ("Luces Audi A5", 1000 , 6);

motor.get_datos();
ruedas.get_datos();
llantas.get_datos();
luces.get_datos();


// Compra y Venta de productos

let cantidad = prompt ("Cantidad");
motor.venta_stock(cantidad);