function criarProduto(nome, preco){
    return {
        nome, // esto es lo mismo que poner nome : nome
        preco,
        desconto : 0.1 // como este es un valor padron tambien se podiria haber pasado en lo parametros como tal
    }
}

console.log(criarProduto('notebook', 2199,49))
console.log(criarProduto('ipad', 1099,49))
console.log(criarProduto('celular', 210,49))