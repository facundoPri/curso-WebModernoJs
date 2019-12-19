const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo // parece mas importante como hay que hacer algo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// Declarativo // parece que es mas importante que hay que hacer
// uso recomendado, facilita el reuso de funciones
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)