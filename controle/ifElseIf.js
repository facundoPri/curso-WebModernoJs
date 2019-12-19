Number.prototype.entre = function (inicio, fim){ // creamos una funcio que me digas si un valor numerico esta entre otros dos, osea si es mayor que el primero y menos que el segundo
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){ //como creamos la funcion .entre arriba ahora podemos apenas darle un numero antes del punto y este sera analizado por la funcion
        console.log('Quadro de honra')
    }else if(nota.entre(7, 8.99)){ // lo que hace el else if es que si el de arriba es falso entonces se plantea un otro if, si es verdadero se ejecuta y sino lo es pasamos al proximo
        console.log('aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Reprovado')
    }else{
        console.log('nota invalida')
    }
    console.log('fim')
}

imprimirResultado(9.50)
imprimirResultado(7.5)
imprimirResultado(5)
imprimirResultado(3)