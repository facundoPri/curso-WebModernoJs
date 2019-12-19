const imprimirResultado = function(nota) {
    if(nota>= 7){
        console.log('Aporvado')
    }else{ // el es lo mismo que decir sino, entonces si lo del if me da falso se ejecuta el esle
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa') // en este caso if va a comparar a la strig con el 7 y lo va a tomar como falso, por eso el resultado resulta en reprovado cuando deberia dar un error o algo del estilo

