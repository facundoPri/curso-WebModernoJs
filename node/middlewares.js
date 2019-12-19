// middleware pattern (chain of responsability)

// creamos 3 funciones que una vez ejecutadas le suman un valor al array y despues ejecutan otra funcion
const passo1 = (ctx, next)=>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// vamos a crear una funcion para ejecutar todo esto
const exec = (ctx, ...middlewares)=>{ // esta funcion recibe un array y una cantidad indeterminada de middlewares (adentro de un array) que son las funciones creadas anterirmente
    const execPasso = indice => { // mi parametro es el indice del middleware que quiero ejecutar
        middlewares && indice < middlewares.length && // si esta seteado los middlewares y el indice es menos que el middleware.length osea la cantidad de middlewares seteados
            middlewares[indice](ctx, () => execPasso(indice + 1)) // si lo de arriba se valida entonces se ejecuta la funcion middleware de determinado indice, pasando por parametro, el ctx ( que es el array ) y esta misma funcion pero con un indice mayor, de modo que cuando en la funcion diga next() se ejecutara de vuelta el execPassos pero con el middleware de proximo indice
    }
    execPasso(0) // una vez creada la funcion, hay que dispararla para que ocurra
}

const ctx = []

exec(ctx,passo1,passo2,passo3) // primero el contexto(ctx) y despues todas las funciones que queremos ejecutar
console.log(ctx)