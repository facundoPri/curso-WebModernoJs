//primero vamos a crear una estructura para despues navegar
 
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// creo las funciones 
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
console.log(escola)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)// las notas de las dos turmas

console.log([].concat( [ 8.1, 9.3 ], [ 8.9, 7.3 ] )) // las juntamos en apenas un array

// vamos a crear un metodo llamado flatmap para que haga eso por nosotros
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback)) // vamos a meter adentro de un array vacio el array que llamamos modificado por el map con la funcion que llamemos como callback
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)