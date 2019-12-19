const moduloA = require('./moduloA') // estamos grabando lo que exportamos en los otros archivos como atributos de las constantes
const moduloB = require('./moduloB') // como el archivo es js no es necesario poner .js

// veamos como moduloA es un objeto
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

// ahora el caso del moduloB
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

// lo unico que podemos accecer afuera del achivo principar es lo que exportamos con el module.export