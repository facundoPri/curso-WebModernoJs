const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas){ // lo que esta haciendo aca es fijandoce en los indices del array
    console.log(i , notas[i])// por ejemplo en el primer caso i vale 0 y notas[0] es igual a 6.7
}

const pessoa = {
    nome: 'Ana', 
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}// for in tambien sirve para objetos 

//console.log(atributo) // como use let esta variable no esta en el ecopo grlobal