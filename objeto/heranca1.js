const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // en el caso esto da undefined ya que prototye no es un atributo qe hayamos creado para este objeto
console.log(ferrari.__proto__) // el objeto padre de ferrari es un objeto vaicio// que es lo mismo que el prototipo de un objeto comun
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjecto() {}
console.log(typeof Object, typeof MeuObjecto)
console.log(Object.prototype, MeuObjecto.prototype)