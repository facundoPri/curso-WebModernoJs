function Carro(velocidadeMaxima = 200, delta = 5){ // esta funcion es una funcion contructora, lo que es muy parecida a una clase, estoy creando una funcion que se le puede atribuir a una variable o una constante y cuando hago eso le estoy pasando un par de caracteristicas que son las funiones que se encuantran adentro de esta misma, veamos el ejemplo
    // este es un atributo privado de la funcion // osea solo existe adentro de esta funcion
    let velocidadeActual = 0 

    // metodo publico // con el this pasamos esto para el estoco mas general// para hacer esto posible en vez de poner un const o let adelante de la declaracion de la funcion apenas pongo un this.
    this.acelerar = function(){
        if (velocidadeActual + delta <= velocidadeMaxima){
            velocidadeActual += delta
        } else {
            velocidadeActual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeActual = function(){
        return velocidadeActual
    }
}

const uno = new Carro // le estamos atribuyendo a uno una serie de funciones// como se trata de una funcion constructora no es necesarion los parentecis para llamar la funcion // como no pusimos nada entre los parentecis va a agrarrar los valores padrones
uno.acelerar() // llamo una vez la funcion acelerar que me va a sumarle delta a la variable velocidadeActual que se encuentra adentro de uno desde que le atribuimos la funcion constructora
console.log(uno.getVelocidadeActual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeActual())

console.log(typeof(ferrari))
console.log(typeof(Carro))