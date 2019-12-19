require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // para evitar que el nombre sea modificado usamos el Object.freeze en la creacion del objeto en el global
console.log(MinhaApp.nome)