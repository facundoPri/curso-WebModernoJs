const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperaçao')
            break
        case 3: case 2: case 1:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')
    }
}

//notas
// lo que hace el switch es verificar casos, en este ejercicio yo le voy a ntregar un numero al switch para la nota
// lo que va a hacer es fijarse en que caso se aplica el valor que le di, por ejemplo si es un 10 o un 9 se verifica el primero 
// el break hay que ponerlo por que switch funciona de modo que empieza a ejecitar todo lo que esta abajo del caso que verifica

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)