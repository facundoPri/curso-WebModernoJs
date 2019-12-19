Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){ // si la callback me da true
            newArray.push(this[i]) // se le suma el valor del array con el devido indice
        } 
    }
    return newArray
}

const productos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

// creamos funciones para usarlas en el filtro
const caro = p => p.preco >= 500
const fragil = p => p.fragil 

const fragilCaro = productos.filter2(caro).filter2(fragil)
console.log(fragilCaro)