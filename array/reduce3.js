//Creando la un reduce
Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1 // si el valorinicial esta seteado en tonces queremos que el indice del for sea 0 y si no lo esta queremos que sea 1
    let acumulador = valorInicial || this[0] //el acumulador va a ser o el valor inicial o el primero valor del array
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))