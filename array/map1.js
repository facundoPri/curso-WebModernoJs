const nums = [1, 2, 3, 4, 5]

//For con proposito
let resultado = nums.map(function(e){ // creamos un array que sus elementos son los mismo que el de nums pero al pasarlos por map este se encargara de modificarlos todos de alguna manera
    return e * 2 // en este caso los multiplica por 2
})

console.log(resultado, nums) // map genera un nuevo array

// otro ejemplo de modificando un array
// primero voy a crear funciones que hacen una modificancion en un elemento

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // primer pasamos los elementos a numeros flotantes, en el caso como ya son numero la unica diferencia es que aparecen zeros atras de la coma// depues reducimos esa cantidad de zeros a dos// y por ultimo remplazamos el punto, que es la coma americana por una coma

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // esto significa que primer se crea un array nuevo con todos los valores mas el 10, despues con ese array se crea otro donde los valores sean el triplo, y por ultimo agarramos ese array y lo pasamos a dinero// se respeta el orden
console.log(resultado) // aca podemos ver todos los cambios hechos por la tira de maps