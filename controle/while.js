function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){ // mientras lo de adetro sea verdadero esto se seguira ejecutando, cuando sea falso dejara de ejecutarse, en el caso opcao tiene que ser igual a -1 ya que mi condicion es que opcao sea distinto de -1 para que continue el programa
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`)
}//este codigo se seguira ejecuntado hasta que el parametro sea falso
console.log('Ate a proxima')

