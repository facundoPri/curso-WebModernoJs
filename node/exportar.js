console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // no sireve de nada atribuirle algo distinto al exports ya que solo se puede alterar el objeto completo apartir del module.exports
console.log(module.exports)

exports = { // podemos ver de vuelta que el objeto no se alterara en lo o absoluto
    nome: 'teste'
}

console.log(module.exports)

module.exports = {publico: true} // lo uico que puede cambiar el objeto de module exports es le mismo modulde.exports
console.log(module.exports)
