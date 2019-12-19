function Pessoa() {
    this.idade = 0 

    const self = this // lo que hago aca es hacer una constante con valor de this, lo que me permite neter un this que simepre se va a referir a pessoa en el caso ya que esta constante esta cotenida adentro de esta funcion
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*bind(this)*/, 1000)  // usar una constante es lo mismo que usar el bind
}

new Pessoa