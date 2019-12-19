const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Meria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]


// Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    let resultado = acumulador + atual
    if (resultado = this.length) {
        return true
    }else return false
})
console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista?
const algunBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    let resultado = acumulador + atual
    if (resultado > 0) {
        return true
    }else return false
})

console.log(algunBolsistas)

// otra forma de hacerlo:
//Desafio 1
const todosBolsistas2 = (resultado, bolsista) => resultado && bolsista // resultado es la acumulacion y bolsista es el caso individual, usando && mientras uno es falso el resultado sera falso tambine
// en otras palabras esto al pasar por el reduce significa, primero agarramos el primer resultado podemos ver que es falso y el segundo es verdadero como uno de los dos es falso entonces resultado vuelve a ser falso, lo mismo con el segundo, y con el tecero y cuarto
console.log(alunos.map(a => a.bolsista))
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas2))

// Desafio 2
const algumBolsista2 = (resultado, bolsista) => resultado || bolsista // usar el || solo necesita que apensa uno de los dos sea verdadero para que el resultado tambien lo sea
// en este caso se fija si el primero o el utlimo alguno de los dos el verdadero, si alguno lo es entoces resultado se hace verdadero, de modo que ahora siempre que nos fijemos si uno de los dos es verdadero o falso el resultado siempre sera verdadero
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista2))