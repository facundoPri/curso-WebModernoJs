function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // en el caso del while yo no podia poner -1 como valor de opcao, ya que esto me dejaria al paarametro del while como verdadero

do{ // en el caso del do / while si se puede ya que lo que hacer es primero ejecutar una vaz mi codigo y despues pasarlo por el while, que tendra el mismo comprortamiento de siempre
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`)
} while (opcao != -1)
console.log('Ate a proxima')
