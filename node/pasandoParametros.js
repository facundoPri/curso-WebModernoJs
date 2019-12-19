module.exports = function(...nomes) { // creamos una funcion que recibe parametros
    return nomes.map(nome =>`Bom dia ${nome}!`)  // y crea un objeto que agarra esos parametros y los saluda
}