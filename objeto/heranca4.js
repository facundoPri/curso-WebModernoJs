function MeuObjeto() {} // creamos una funcion
console.log(MeuObjeto.prototype) // como podemos ver el prototype de mi funcion es {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // podemos ver que el proto de los dos apntan para el mismo lugar
console.log(MeuObjeto.prototype === obj1.__proto__) // y  ese lugar que apuntan es el mismo que MeuObjeto.prototype

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // va a usar el nombre del mismo prototype

obj2.nome = 'Rafael' // va a sobre escribir el nombre que le da el prototype
obj2.falar()

// el proto de todo objeto recien creado es el Object.prototype
const obj3 = {}
console.log(obj3.__proto__ === Object.prototype) //podemos comprovarlo aca
 // voy a hacer a que el proto de mi objeto pase a apuntar al prototype de MeuObjeto
 obj3.__proto__ = MeuObjeto.prototype
 obj3.nome = 'Obj3'
 obj3.falar()

 // Resumen
 console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
 console.log(MeuObjeto.__proto__ === Function.prototype) // recordemos que al usar new MeuObjeto estoy creando una funcion constructora
 console.log(Function.prototype.__proto__ === Object.prototype) // y el prototype de una funcion es un objeto asi que el prototype del prototype de una funcion al mismp tiempo es el prototype de Object
 console.log(Object.prototype.__proto__ === null) // no existe el prototype de Object ya que este es el ultimo en la cadena
 