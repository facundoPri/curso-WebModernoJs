console.log(this === global)
console.log(this === module)

console.log(this === module.exports) // this apunta a module exports
console.log(this === exports) // exports tambien apunta a module.exports

function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports) // adentro de una funcion this deja de apntar a module.exports y pasa a apuntar a quien lo llame
    console.log(this === global) // en este caso el this es llamado por el global
}

logThis()