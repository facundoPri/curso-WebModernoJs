const anonimo = process.argv.indexOf('-a') !== -1 // si esta percente en la lista de argumentos que me devuelva verdadero
//console.log(anonimo)

if(anonimo) { // si lo que se ejecuta es anonimo entonces ocurre lo de abajo
    process.stdout.write('Fala Anonimo!\n') // se genera un proceso donde se escribe en la salida standar (stdout)
    process.exit() // despues que aparezca el texto se termina el processo
} else { // en el caso que no sea anoni quien accedio en programa
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data =>{ // recive alguna informacionpor la entrada estandar 
        const nome = data.toString().replace('\n', ' ') // agarra la data y la almacena en nome pero antes convirtiendola a un string y remplazando el enter(\n) por un espacio

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}