const contadorA = require('./instanciaUnica') // como es un objeto, el valor de instanciaunica se almazena en un cache de modo que si lo llemo desde varios contadores sera el mismo valor
const contadorB = require('./instanciaUnica') // son dos contadores con el mismo valor

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor) // podemos ver que por mas que llamamos al contadorA, el valor de contadorB es el mismo
// esto de debe a que los dos apuntan al mismo objeto exportado por la instancia unica

const contadorC = require('./instanciaNova')() // como lo que es exportado en este caso es una funcion factory estamos creando objetos independiente en cada una de las constantes
const contadorD = require('./instanciaNova')() // acordarse que al ser una funcion es necesario lo () para que ella se ejecute y se haga el objeto

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor) // como podemos ver el valor del contadorD es independiente al del contadorC
