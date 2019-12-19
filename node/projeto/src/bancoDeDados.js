const sequencia = {
    _id: 1,
    get id() {return this._id++} // esto es para seguence.id me devuelva el proximo valor de id
}

const produtos = {} // creamos un objeto que contenga los productos

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequencia.id // si el producto no tiene id entonces seguence.id se fijara cual es el id que le corresponde
    produtos[produto.id] = produto // el producto se salvara en la pocicion de su id, si su ide es 5 estonces en la pocicion 5 va esta el produto con id = 5
    return produto // me devuelve el producto
}

function getProduto(id){
    return produtos[id] || {} // esta funcion es para saber el producto que tiene tal id, le pasamos el id como parametro y nos devuelve un producto o un objeto vacio si en el caso no existe un producto en tal id
}

function getProdutos(){
    return Object.values(produtos) // ma va a hacer una list con todos los productos, en el caso solo los valores, sin las chaves que adentro de produtos son los id
}

function excluirProdutos(id){ // va a excluir un porducto por su id
    const produto = produtos[id] // necesito almacenar el producto que sera borrado para despues poder mostrarlo al usuario y decirle que este prducto fue borrado
    delete produtos[id] // estamos borrando el producto de la lista de objetos
    return produto // necesito que la funcion me devuelva el objeto producto que fue exluido para poder mostrarlo al usuario
}


module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos} // pasamos todas mis funciones para afuera del archivo