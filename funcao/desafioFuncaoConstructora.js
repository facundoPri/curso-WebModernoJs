function Pessoa(nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`) // la funcion busca nome en el estoco mas general // el probleme es que esto va a depender de quien llame esta funcion, que si el estoco no es el mismo a donde se definio nome entonces podemos tener un problema
    }
}

const p1 = new Pessoa('João')
p1.falar()