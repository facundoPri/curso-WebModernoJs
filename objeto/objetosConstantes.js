// pessoa -> 123 -> {...}   // tenemos la constante pessoa que apunta a una ubicacion en la memoria y por ser un objeto no se puede cambiar eso
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // se le pude cambiar los atributos, ya que por q cambies lo que esta adetro del objeto este siempre sera el mismo, apunta al mimo lugar en al memoria
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome : 'Ana'} // si hago esto me dara un error

Object.freeze(pessoa) // esta es una forma de congela un objeto, osea es imposible modificarlo despues de esto

// podemos ver como nada de esto es tomado en cuenta, todo siguie igual, como si no se ubiera escrito esto
pessoa.nome = "maria"
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// una buena forma de crear un objeto y que no se pueda modificar en el futuro es :
const pessoaContante = Object.freeze({nome : 'Joao'})
pessoaContante.nome = 'Maria'
console.log(pessoaContante)