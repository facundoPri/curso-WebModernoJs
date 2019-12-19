class Pessoa {
    constructor(nome){
        this.nome = nome // pasamo nome para un estoco mas general asi se puede acceder por mi funcion falar
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`) // la funcion busca nome en el estoco mas general // el probleme es que esto va a depender de quien llame esta funcion, que si el estoco no es el mismo a donde se definio nome entonces podemos tener un problema
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return{
        falar : () => console.log(`Meu nome é ${nome}`) // con una funcion factory nos evitamos el proble de arriba
    }
}

const p2 = criarPessoa('João')
p2.falar()