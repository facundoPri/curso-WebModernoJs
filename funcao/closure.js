// Closure e o estoco criado quando uma funcao e declarada
// Esse escopo permite a fuçao acessar e manipular variaveis externas a funçao

// Contexto lexico en açao!

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao =  fora() // como la funcion fora devuelve la funcion dentro entonces estmos creando una funcion igual a la funion dentro
console.log(minhaFuncao()) // y podemos ver que el resultado es local ya que como vimos una funcion tambia carga la memoria se su contexto lexico o sea su closure
