const soma = function (x, y) { // funcion anonima es una sin nombre
    return x + y 
}

const imprimirResultado = function (a, b, operacao = soma){ // aca cree otro funcion anoima que recibe 3 paremetros 2 numero y el nombre de una operacion
    console.log(operacao(a,b))
}

imprimirResultado(3,4) // como no le pase el 3ro parametro entronces usa el que esta por padron
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function(x,y){ // puedo meter una funcion como operacion
    return x - y 
})
imprimirResultado(3,4,(x,y)=> x*y) // y una arrow function tambien, las arrow funcion siempre son anonimas

const pessoa = {
    falar: function(){ // se puede crear funciones anomimas adetro de un objeto
        console.log('Opa')
    }
}

pessoa.falar()
