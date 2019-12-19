const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//DESAFIO : retornar un array apenas con los precos

const jsonObjeto = e => JSON.parse(e) //pasamos el json a objeto
const apenasPreco = e => e.preco // obtenemos apenas el preco de los objetos

const precos = carrinho.map(jsonObjeto).map(apenasPreco)
console.log(precos)

