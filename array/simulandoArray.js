const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{ // creamos esto para que se imprima como sifuera un array
    value: function() {return Object.values(this)},
    enumerable: false // no que remos que aparezcan los numeros
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)