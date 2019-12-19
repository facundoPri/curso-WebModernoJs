const sequiencia = {
    _valor: 1, // se escribe con el _  por convencion // esto significa que esta variable es pare sr usada apenas adentro de mi objeto
    get valor() { return this._valor++}, // esto crea unsa secuancia que en el caso va a acresentar una unidad
    set valor(valor){ // esto haciendo una validacion que solo me permite poner un valor mayor al que ya habia
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequiencia.valor, sequiencia.valor)
sequiencia.valor = 1000
console.log(sequiencia.valor, sequiencia.valor)
sequiencia.valor = 900  // gracias al set no me permitira pner un valor menos
console.log(sequiencia.valor, sequiencia.valor)