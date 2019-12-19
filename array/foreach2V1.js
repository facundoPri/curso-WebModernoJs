// en este desafio vamos a crear la implemetacion del foreach
// mi solucion 
const forEach2 = function(funcion, array){
    for(let i = 0; i < array.length; i++){ // antes estaba usando el for in y este me estaba generando un problema con la suma, me estaba trasformando el indice en un array
        funcion(array[i], i)
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

const imprimirNombre = function(nome,indice){
   console.log(`${indice + 1}) ${nome}`) // habia un error en la suma del 1
}

forEach2(imprimirNombre, aprovados)



