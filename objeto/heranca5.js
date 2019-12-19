// estas funciones son las responsables por crear y darle atributos a las strings, los arrays, y los objetos, que todo lo que pogamos en su prototype podra ser usado mas tarde
console.log(typeof String) 
console.log(typeof Array)
console.log(typeof Object)

//ejemplo string
String.prototype.reverse = function() { // le vamos a sumar al prototype de las strings una funcion llamada reverse
    return this.split('').reverse().join('') // esto ira a pasar todos los elementos de la string a un array despues los va a invertir y por ultimo los va a juntar en una nueva string // reverse es una funcion que ya esta en los arrays
}

console.log('Hola mundo'.reverse()) // este metodo no estaba en la api de las string pero nosotros se lo adicionamos via prototype

//ejemplo con los arrays 
Array.prototype.first = function(){
    return this[0]  // en este caso mi funcion me retornara apenas el primer valor de mi array
}

console.log([1, 2, 3, 4, 5].first()) //IMPORTANTE// si no cierrlo los parentecis de la llamada de la funcion esta no se ejecutara
console.log(['a', 'b', 'c', 'd'].first())


// es para tener cuidado con esta manipulacion de los prototypos de estas funciones
// y es recomendable no modificar los que ya estan por padron
// veamos un ejemplo de efectos colaterales en los Strings
// nunca substituir un metodo que ya esta adicionado en el prototype

String.prototype.toString = function() {
    return 'Lascou Tudo'  // estamos modificando una funcion ya existente en el prototype de los strings
}

console.log('Testeando el efecto colaretal'.reverse()) // podemos ver que aca lo que paso es que todas las string creadas de ahora en adelantes son Lascou Tudo