const pilotos = ['Vettel','Alonso','Raikkonen','Massa'] // cuando creo un array constante significa que ya no le puedo atribuir otro array a este mismo pero si lo podemos modificar
pilotos.pop() // remueve el ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // agrega un nuevo elemento en el ultimo lugar
console.log(pilotos)

pilotos.shift() // remueve el primer elemento contrion de pop
console.log(pilotos)

pilotos.unshift('Hamilton') //le va a sumar un elemento en el primer lugar , es el push pero para el shift
console.log(pilotos)

//splice puede adicionar y remover elementos

// adicionar
pilotos.splice(2, 0, 'Botas','Massa') // estamos adicionando dos elementos despues del segundo puesto
console.log(pilotos) // podemos ver como en el atributo dos entran estos dos nuevos atributos que le pusimos

// remover
pilotos.splice(3,1) // estamos removiendo un atributo desde el atributo 3 osea apensa en 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // va a crear un nuevo array contodos lo atributos apartir del indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // desde el indice 1 hasta el 4 sin incluir el 4
console.log(algunsPilotos2)