const pai = { nome: 'Pedro', corCabelo: 'preto' }

// esta es otra forma de generar una herancia entre dos objetos 
const filha1 = Object.create(pai)
filha1.nome = 'Ana' 
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { // estamos dandole un nombre a este nuevo objeto usando el Object.create
    nome: {value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // como pusimos que no se puede sobre escribir entonces tenemos que filha2 se seguira llamanndo bia
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// podemos ver que igual como en cualquier heranza tenemos que los unicos atributos realmente presentes en los objetos son los que creamos nosotros pero igual podemos usar los que estan en el prototype
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){ // vamos a percorrer todas las keys adentro de filha2
    filha2.hasOwnProperty(key) ? // esto va a verificar si la key esta en su propia propiedad, si es asi se ejecuta lo primero, en el caso que no lo sea sera falso y ejecutara lo segundo
        console.log(`En su propiedad esta: ${key}`) : console.log(`Por herança: ${key}`)
}