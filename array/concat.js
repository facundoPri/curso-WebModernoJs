const filhas = ['Ana', 'Maria']
const filhos = ['Juan', 'Pedro']
const todos = filhas.concat(filhas, 'Fulano') // junta valores y arrays en un array unico
console.log(todos, filhas, filhos)

console.log([].concat([1,2],[3,4],5,[[6,7]]))