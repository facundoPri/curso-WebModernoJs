// usando notacion literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object) // Object es una funcion constructiora dada por JavaScript
const obj2 = new Object
console.log(obj2)

// Con una Funcao Constructora
function Produto (nome, preco, desc){ // creamos nuestra propia funcion costructora 
    this.nome = nome // usamos el this para que sea visible al estoco global
    this.getPrecoComDesconto = () =>  preco * (1 - desc)
}


const p1 = new Produto('caneta', 7.99, 0.15) // creamos el objeto
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) // acordarese de los parentesis ya que sino no se ejecutara la funcion

//Funçao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/ 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)