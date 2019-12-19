//IIFE --> Immediately Invoked Function Expression
// es una forma de escapar de el escopo global, envolves tu funcion adentro de parentecis y lo terminas con parentesis abiertos y cerrados, de esta forma se auto ejecutara, en el instante que es leido// pero sin estar en el ecopo global

(function(){ // funcion anonima
    console.log('Será excutado na hora!')
    console.log('Foge do escopo mais abrangente')
})() 

// se ejecutan de la misma forma
console.log('Será excutado na hora!')
console.log('Foge do escopo mais abrangente')