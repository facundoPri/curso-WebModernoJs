// Cadena de prototipos (prototype chain)
Object.prototype.attr0 = '0' // no recomendado
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'} // podemos verer que tenemos dos attr3 pero en el caso si llamamos a filho.attr3 este va a acceder al que esta mas cercano haciendo un efecto de shadowing que es muy parecido a sobre escribir un valor
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr03) // podemos ver que por mas que ponga filho y los atributos no esten en el, se me mostrara un resultado gracias al prototype en cadena

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) { // si la velocidad actual mas delta es menos igual a velocidad maxima entonce
            this.velAtual += delta // se le sumara a velocidad actual el delta
        } else {
            this.velAtual = this.velMax // en el caso que delta mas velocidad acual sea mayor que la maxima la velocidad actual sera esta maxima
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}


const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // aca estamos estableciendo la herancia entre carro y ferrari siendo el primero el hijo y el segundo el padre
Object.setPrototypeOf(volvo, carro) // lo mismo para volvo

console.log(ferrari) // como podemos ver no aparecen todos los atributos aportados por el prototype pero esto no sigifica que no podamos accederlos
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())