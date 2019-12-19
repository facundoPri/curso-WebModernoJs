function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco // si quiero ejecutar producto.getPreco necesito que la funcion se encuentre adentro de mi objeto
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco()) // en este caso el this se refiere al global 
console.log(produto.getPreco()) // en este caso el this pasa a ser el prducto

const carro = {preco: 49990, desconto: 0.20}

console.log(getPreco.call(carro)) // esta es una forma de llamar una funcion sobre un objeto que no tiene esta funcion adentro // el this de la funcion pasa a ser el objeto que ponemos adentro de los parentesis de call()
console.log(getPreco.apply(carro)) // lo mismo pasaria con el apply

// la unica diferencia entre el call y el apply es la forma en que organizan los parametros
console.log(getPreco.call(carro, 0.17, '$')) // en el caso del call hay que pones primero el objero al cual se quiere llamar y depues los parametros
console.log(getPreco.apply(carro, [0.15, 'AR$'])) // con el apply se pone primero el objeto una coma y despues los parametros adentro de un array