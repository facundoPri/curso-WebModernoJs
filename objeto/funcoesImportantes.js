const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // ma va a devolver un array con las chaves
console.log(Object.values(pessoa)) // me va a devolver un array con los valores
console.log(Object.entries(pessoa)) // me va a trasformar el objeto en un array, osea un array con arrays adentro sin los mas pequeños la coleccion chave vvalor

// se puede usar un destructurin para percorrer las chaves: valor
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// esta es una forma de tener mas corntrol sobre nuestos objetos
Object.defineProperty(pessoa, 'dataNacimento', {  /// esta funcion pide 3 parametros, uno es el objeto donde queremos añadir un atributo, otro es la chave y por ultimo un objeto con info de este valor nuevo que estamos agregando
    enumerable: true, // esto me permite decidir si la chave sera visible o no
    writable: false, // se puede sobre escribir o no
    value: '01/01/2019' // es apenas el valor
})

pessoa.dataNacimento = '01/02/2017'
console.log(pessoa.dataNacimento) // podemos ver que gracias al writable: false el valor no se modifico
console.log(Object.keys(pessoa)) // si pongo alguna chave como enumerable: false, entonces no se vera aca

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // de esta forma estamos concatenando todos las chave: valor de las costantes arriba// lo que paso con el a es que como ya estaba definido este fue sobre escirto 

Object.freeze(obj)
obj.c = 123
console.log(obj) // podemos ver que gracias al freezz nada cambio
