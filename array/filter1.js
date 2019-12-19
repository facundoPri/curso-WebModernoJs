const productos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]
// filter sivre para pasar en un array apenas los parametros que se queden como verdaderos
console.log(productos.filter(function(p){
    return false  // en el caso todos seran falsos
}))

console.log(productos.filter(function(p){
    return true // todos verdaderos 
}))

console.log(productos.filter(function(p){
    return p.preco >500 // apensas los que tengan precio mayor 500 seran verdaderos 
}))

// creamos funciones para usarlas en el filtro
const caro = p => p.preco >= 500
const fragil = p => p.fragil 

const fragilCaro = productos.filter(caro).filter(fragil)
console.log(fragilCaro)