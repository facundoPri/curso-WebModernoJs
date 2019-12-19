const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // ulilizamos la funcion forEach en un array y le metemos como parametro del forEach otro funcion
fabricantes.forEach(fabricantes => console.log(fabricantes)) // hacemos lo mismo aca abajo pero creando una funcion adetro de el

//el evento que dispara la funcion imprimir, es el loop cuando detecta un nuevo valor en el array