Array.prototype.map2 = function(callback){
    const newArray = [] // como map crea un nuevo array eso necesito hacer
    for(let i = 0; i < this.length; i++){ // despes percorre el array original
        newArray.push(callback(this[i], i, this)) // le meti al nuevo array el resultado de la callback pasando el this[i], i y this
    }
    return newArray // y retorne el nuevo array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


const jsonObjeto = e => JSON.parse(e) 
const apenasPreco = e => e.preco 

const precos = carrinho.map2(jsonObjeto).map2(apenasPreco)
console.log(precos)

