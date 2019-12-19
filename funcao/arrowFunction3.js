let comparaComThis = function (param){ // creo una funcion que se fije si mi this es el parametro que les pase
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj) // podemos ver que con el bind puedo redefinir mi this

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)// vamos a intentar redefinir el local del this
comparaComThisArrow(obj)// podemos ver que en este caso el bind que infuncional
comparaComThisArrow(module.exports)
