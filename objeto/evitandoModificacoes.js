// Object.preventExtensions
// esto ira a prevenir se estienda, no se puede meterle mas atributos
// si se pueden borrar o modificar

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha' // si se modificara el valor adentro de un atributo
produto.descricao = 'Borracha escolar branca' // no se podra crear un atributo nuevo
delete produto.tag // pero si se podra borrar uno ya existente
console.log(produto)

// Object.seal
// ahora no se puede supar atributos ni restarle apenas modificar los valores de los ya existentes
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // sellamos un objeto de esta forma
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // no se puede crear un nuevo atributo
delete pessoa.nome // ni borrarlo
pessoa.idade = 29 // pero si podemos alterar el valor de uno ya existente
console.log(pessoa)

// Object.freeze
// selado + valores constantes
// es la forma de hacer un objeto constante
// de esta forma no se le pueden sumar ni restar atributos, pero ahora no se puede editar lo valores adentro de los atributos
