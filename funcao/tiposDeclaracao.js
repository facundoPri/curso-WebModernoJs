console.log(soma(3, 4))

//function declaration // como esta declarada no importa cuando la llames esta siempre existira
function soma(x, y){
    return x + y
}

// function expression // a diferencia de la primera solo se puede llamar una vez que se haya creado esta funcion, osea abajo de la linea 6 en el caso
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4))

//named function expression // es la menos usada entre estos 3 tipos de declaracion, y en comparacion co la funcion exprecion puede ser util cuando uno quiere hacr debbugin // tambien requiere haber sido creada antes de ser llamada para funcionar
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))