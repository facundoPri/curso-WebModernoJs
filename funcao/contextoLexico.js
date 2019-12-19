const valor = 'Global'

function minhaFuncao(){ // al crear esta funcion hay que tener en cuenta el contexto lexico de ella, osea donde fue creada, y en el caso como esta funcion fue creada en un estoco mas general se fija en el valor mas cercano
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() // cuando llamamos la funcion en este otro escoto la funcion igualmente cargara la informacion del contexto lexico de donde fue creada
}

exec() // por eso el resultado es global en vez de local