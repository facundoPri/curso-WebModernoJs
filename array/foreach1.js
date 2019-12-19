const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){ // el foreach va a recorrer cada elemento del array y ejecturar una funcion para cada uno
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // aca estamos haciendo parecido a arriba pero con una arrow

const exibirAprovados = aprovados => console.log(aprovados) // y aca estamos haciendo parecido pero la diferencia es que primero creamos una funcion general 
aprovados.forEach(exibirAprovados) // y despues hacermos que se ejecute para cada uno de los elementos gracias al foreach
