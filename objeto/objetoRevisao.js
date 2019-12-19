// coleçao dinamica de pares chave/valor
const produto = new Object
// al haber sido creado de forma dinamica se puede crear las chaves y los valores de esta manera
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

// de la misma forma que se puede borrar una chade de esta
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelos: 'A4',
    valor: 89000,
    proprietario: { // se pueden crear objetos adentros de un objeto
        nome: 'Raul',
        idade: 56,
        endereco: {
            lagradouro: 'Rua ABC',
            numero: 123
        }
    },
    conductores: [{ // tambien como hacer un array que contenga otra cantidad de objetos
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() { // tambien puedo poner una funcion
        // ...
    }   
}
console.log(carro)

// notacion punto // mas que nada usada cuando ya sabemos el nombre del atributo
carro.proprietario.endereco.numero = 1000 // cambion el 123 a 1000

// notacion por array// muy util cuando queremos hacer una introspecion y queremos acceder a un atributo via una string
carro['proprietario']['endereco']['lagradouro'] = 'Avenida Gigante'

console.log(carro)

delete carro.conductores
delete carro.calcularValorSeguro
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.conductores) // esto no da error, solo me da undefined por que carro existe y solo estoy llamando algo que apenas no esta definido
//console.log(carro.conductores.length) // en este caso si da error por que conductores no esta definido y por eso length nisiquiera existe
