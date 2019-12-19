const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} // son exactamente lo mismo 
console.log(obj1, obj2)

// se puede generar un objeto a partir de strings
const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {} // cramos el objeto
obj3[nomeAtributo] = valorAtributo // le damos un valor a partir de una string
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo} // esta es otra forma de hacer lo mismo
console.log(obj4)

const obj5 = { // formas de agregar funciones a objeto
    funcao1: function(){
        //...
    },
    funcao2() {
        //...
    }
}

console.log(obj5)