// la unica diferencia entre la vercion del profesor y la mia es el uso de prototype
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < array.length; i++){ // antes estaba usando el for in y este me estaba generando un problema con la suma, me estaba trasformando el indice en un array
        callback(array[i], i)
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){ // el foreach va a recorrer cada elemento del array y ejecturar una funcion para cada uno
    console.log(`${indice + 1}) ${nome}`)
})
