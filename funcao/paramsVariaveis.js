function soma(){
    let soma = 0 // creao una variable donde almazeno toda la iinforamcion, en el caso los parametros sumados
    for (i in arguments){ // arguments es la forma que podemos fijarnos todos los parametros que le pasamos a una funcion
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))

console.log(1.1,2.2,'teste')
console.log(soma('a','b','c'))