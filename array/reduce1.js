const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Meria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota)) // de esta forma veremos apenas las notas de los alumnos
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ // lo que hacer el reduce es recibir una callback y un valor inicial, este va hacer alguna interaccion entre los valores de un array, tomando el primero valor y el segundo y hacer algo, despues con el resutado tomar el proximo, asi susecivamente
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)