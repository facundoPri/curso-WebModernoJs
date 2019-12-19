//funcao em js é First-Class Object (Citizens)
//Higher-order function

//Criar de forma literal
function fun1() {}

//armazenar en uma variable
const fun2 = function() {}

//armazerar en um array
const array = [ function(a,b){ return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar en um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//passar funçao como parametro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

// Um funçao pode retomar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)