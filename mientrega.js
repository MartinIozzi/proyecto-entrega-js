
let tipo_madera = prompt ("Seleccione el tipo de madera deseada: Pino, Roble, Arce, Cerezo")
let alto = prompt ("Seleccione el alto deseado: ")
let ancho = prompt ("Seleccione el ancho deseado: ")
let cuotas 

function calcular_precio (tipo, alto, ancho){

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

function calcular_iva (precio){

    const iva = 1.21;
    return iva * precio

}

function precio_cuotas (precio, cuotas){
    
    if (cuotas == 3){
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


let precio = calcular_precio(tipo_madera, alto, ancho)
let precio_iva = calcular_iva (precio)

cuotas = prompt ("Seleccione cantidad de cuotas (3, 6, 9, 12): ")
let precio_final = precio_cuotas (precio_iva, cuotas);
let precio_mensual = precio_final / cuotas;


console.log (`Tipo de madera: ${tipo_madera}
            \nMetros de alto: ${alto}
            \nMetros de ancho: ${ancho}
            \n\nPrecio sin iva: $${precio}
            \nPrecio con iva: $${precio_iva}
            \n\nCantidad de cuotas: ${cuotas}
            \nPrecio mensual: ${precio_mensual}
            \n\nPrecio Final: ${precio_final}`);