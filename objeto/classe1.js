//clase es una forma distinta de escribir una funcion
class Lancamento { // una clase
    constructor(nome = 'Generico', valor = 0){ // con su constructos
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro { // otra clase
    constructor(mes, ano){ // su constructor
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
// y otros dos metodos adentro de esta clase
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000) // la clase lancamento la usamos para crear objetos que contengan los ingresos positivos y negativos en la cuenta del sujeto
const contaDeLuz = new Lancamento('Luz', -220) // este es uno negativo por ejemplo

const contas = new CicloFinanceiro(6, 2018) // le mandams una fecha para el dia que arranca el ciclo financiero
contas.addLancamentos(salario, contaDeLuz) // con esta funcion el programa se va a encargar de hacer todas las sumas de los gastos y el dinero entrante en la cuenta para ese nuevo ciclo
console.log(contas.sumario()) // aca podemos ver el resume de la cuenta
console.log(contas) // aca podemos ver la informacion como la fecha y el dinero que entra y sale