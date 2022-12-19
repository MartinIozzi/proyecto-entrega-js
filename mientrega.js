let precio_total = 0;
let running = true

let ventas = []

class Venta{
    constructor (tipo_madera, alto, ancho){
        this.tipo_madera = tipo_madera;
        this.alto = alto;
        this.ancho = ancho;
        this.precio_sin_iva
        this.precio_con_iva
        this.cuotas
        this.precio_mensual
        this.precio_final
    }

    imprimir(){
        console.log (`Tipo de madera: ${this.tipo_madera}
        \nMetros de alto: ${this.alto}
        \nMetros de ancho: ${this.ancho}
        \n\nPrecio sin iva: $${this.precio_sin_iva}
        \nPrecio con iva: $${this.precio_con_iva}
        \n\nCantidad de cuotas: ${this.cuotas}
        \nPrecio mensual: ${this.precio_mensual}
        \n\nPrecio Final: ${this.precio_final}`);
    }
    
    calcular_precio (tipo, alto, ancho){

        const metro_pino = 100;
        const metro_roble = 80;
        const metro_arce = 120;
        const metro_cerezo = 200;
    
        let precio = 0;
        let metros = alto * ancho;
    
        if( tipo == "pino" || tipo == "Pino" || tipo == "PINO"){
            return metros * metro_pino
        }
        else if ( tipo == "roble" || tipo == "Roble" || tipo == "ROBLE"){
            return metros * metro_roble
        }
        else if ( tipo == "arce" || tipo == "Arce" || tipo == "ARCE"){
            return metros * metro_arce
        }
        else if ( tipo == "cerezo" || tipo == "Cerezo" || tipo == "CEREZO"){
            return metros * metro_cerezo
        }
        else {
            console.log ("No se encontró el tipo de madera")
        }
    }
    calcular_iva (precio){

        const iva = 1.21;
        return iva * precio
    
    }
    
    precio_cuotas (precio, cuotas){
        if(cuotas == 1){
            return precio;
        }
        else if (cuotas == 3){
            return precio * 1.15;
        }
        else if (cuotas == 6){
            return precio * 1.30;
        }
        else if (cuotas == 9){
            return precio * 1.45;
        }
        else if (cuotas == 12){
            return precio * 1.60;
        }
        else {
            console.log ("ERROR: Cantidad de cuotas no disponible")
        }
    }
    compra (){
        this.precio_sin_iva = this.calcular_precio(this.tipo_madera, this.alto, this.ancho)
        this.precio_con_iva = this.calcular_iva (this.precio_sin_iva)
        
        this.cuotas = prompt ("Seleccione cantidad de cuotas (1, 3, 6, 9, 12): ")
        this.precio_final = this.precio_cuotas (this.precio_con_iva, this.cuotas);
        this.precio_mensual = this.precio_final / this.cuotas;

        precio_total = precio_total + this.precio_final

    }
}

function filtrar_madera (tipo){
    let precio_total = 0;
    ventas.forEach ((venta)=>{
        if(venta.tipo_madera.toLowerCase() == tipo.toLowerCase()){
            venta.imprimir()

            precio_total += venta.precio_final
        }
    })
    console.log ("El precio total de los productos filtrados es: $ ", precio_total)
}

while(running){
    let tipo_madera = prompt ("Seleccione el tipo de madera deseada: Pino, Roble, Arce, Cerezo")
    let alto = prompt ("Seleccione el alto deseado: ")
    let ancho = prompt ("Seleccione el ancho deseado: ")

    let compra = new Venta (tipo_madera , alto , ancho);

    compra.compra()
    //compra.imprimir()
    ventas.push(compra);

    let respuesta = prompt("Quiere seguir comprando? (SI/NO)")
    if(respuesta == "no" || respuesta == "NO" || respuesta == "No" ){
        running = false
    }
}

filtrar_madera ("pino")