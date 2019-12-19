// es una funcion que retorna un objeto
// factory simples
function criarPessoa(){ // en este caso todo objeto sera asi, pero puedo hacer varariables pidiendole parametros a la funcion
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())