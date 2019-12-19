const pessoa = {
    saudacao : 'Bom dia',
    falar() {
        console.log(this.saudacao)// estoy creando una funcion que gracias al this se va a fijar en todo lo que esta adentro del objeto y utilizar el texto de saudacao
    }
}

pessoa.falar()// este es un ejemplo de como se puede ejeceutar la funcion, que es llamando al objeto y buscando la funcon adentro de el 

const falar = pessoa.falar// almaceno la funcion en una constante que esta en el escopo global
falar()// cuando la ejecuto el this pasa a mira al escopo global lo que me da un problema ya que saudacao no se encuantra ahi sino que en el objero pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // lo que hago aca con el bind el hacer que this apenas se fije en el objeto pessoa
falarDePessoa() // y de este modo podemos hacer qu vuerla a funcionar el codigo

// esto que hacemos con bind es lo mismo que ocurre al usar un arrow function