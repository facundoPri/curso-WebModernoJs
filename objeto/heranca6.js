function Aula(nome, videoID) {  // creamos una funcion constructora
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // cuando usamos en operador new ocurren dos cosas una es que el objeto es creado y la otra es que ahora el prototype del objeto pasa a amuntar al prototype de la funcion constructora
const aula2 = new Aula('Ate Breve', 456)
console.log(aula1, aula2)

//simulando el operador new
function novo(f, ...params){ // f es la funcion construsctora y params es un array con todos los parametros que necesitemso
    const obj = {} // creamos un objeto
    obj.__proto__ = f.prototype // le asignamos el prototype de la funcion al objeto
    // el aplay sirve para aplicarle una funcion a un objeto, poniendo los paremetros necesarios despues del objeto en cuestion y adentro de un array
    f.apply(obj, params)// como usamos un apply este necesita de un array lo que ya se hizo anteriormente y antes de este array se necesita espesificar donde vamos a poner la informacion que en el caso es adentro del objeto
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123) // podemos ver que primero pongo la funcion constructora, y despues los paremetros que pasaran por ella para la creacion de un nuevo objeto
const aula4 = novo(Aula, 'Ate Breve', 456)
console.log(aula3, aula4) // podemos ver que esto es exactamente igual a usar el operador new