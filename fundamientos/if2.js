function teste1(num) {
    if(num > 7)
        console.log(num) // en este 
        console.log('Final')
}

teste1(6)
teste1(8)
// en el ejemplo de arriba mostrmos un posible error que es dejar el segundo paramero son las chaves de modo que el codigo no lo cuenta como parte del if

function teste2(num) {
    if(num > 7); { // prestar atencion con el punto y coma
        console.log(num)
    }
}

teste2(6)
teste2(8)
// en el ejemplo de arriba tenemos otro problema comun que es poner el punto y coma despues del if esto lo que hace es cerrarno el codigo de modo que en este caso este es un codigo vacio, por eso apenas se ejecuta el console.log sin la condicion del if
