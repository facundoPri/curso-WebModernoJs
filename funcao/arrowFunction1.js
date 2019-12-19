let dobro =  function (a){
    return 2 * a
}

// vamos a hacer lo mismo pero con una arrow function

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return que da implicito en esta version acortada del arrow function
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'Ola' // en este caso estmos haciendo una funcion sin parametro
ola = _ => 'Ola' // esto es una forma de hacer algo parecido pero en realidad si tiene parametro
console.log(ola())