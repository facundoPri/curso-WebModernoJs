// Array es la funcion constrructora de un array// si instanciamos un array con new Array nos da que es un objeto ya que un array no es nada mas que eso// y si lo creamos de forma literal obtenemos de vuelta que este es apenas un objeto
console.log(typeof Array, typeof new Array, typeof [])
// es un objeto con un atributo que crece 0, 1, 2 ,3 ..
// se recomienda trabajar con datos homogenero
// forma mas recomendada de crear un array es la literal

let aprovados = new Array('Bia', 'Carlos', 'Ana') // cremos un array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // esta es la forma literal y la mas recomendada para la creacion de arrays
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // como todavia no hay nada en la posicion 3 me aparece undefined

aprovados[3] = 'Paulo' // de esta forma podemos sumarle al array un valor en deretminado lugar
aprovados.push('Abia') // de esta forma le metemos un valor despues del ultimo valor existente
console.log(aprovados.length) // con esto podemos chequear la cantidad de valores presentes en mi array

aprovados[9] = 'Rafael' // le estoy metiendo un valor a mi array en la posicion 9 de modo que la 5,6,7 y 8 tendran valor de undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // lo que hace esta funcion es alterar el orden de mi array original, ordenandolo
console.log(aprovados)

delete aprovados[1] // con eso estamos dejado la posicion que pongamos al lado de aprovados como undefined sin aterar el orden de mi array
console.log(aprovados[1])
console.log(aprovados[2])

// definamos de vuelta el array para seguir con lo ejemplos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1,'Elemento1', 'Elemento2') // el metodo splice sirve para borrar elementos tanto como agregarlos
// en el caso lo que hicimos es borrar desde el elemento 1 una unidad y despes agregar en su lugar los parametros que puse despues del segundo uno
console.log(aprovados) // como podemos ver salio crlos y entro elemento 1 y 2